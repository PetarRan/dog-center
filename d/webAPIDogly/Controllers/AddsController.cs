using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using RestSharp;
using webAPIDogly.Models;
using webAPIDogly.Services;

namespace webAPIDogly.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddsController : ControllerBase
    {
        private DoglyContext Context { get; set; }
        private readonly IMailService mailService;
        private static int loginTry { get; set; }
        public AddsController(DoglyContext con, IMailService mailService )
        {
            this.Context = con;
            this.mailService = mailService;
            
        }
        [HttpGet]
        [Route("GetAdds/{tip}/{index}")]
        public async Task<JsonResult> GetAdds (string tip, int index)
        {
            List<Advertisement> addtiped = await this.Context.Advertisements.Where( e=> e.AddType.First(p=> p.TypeDesc == tip)!= null).ToListAsync();
            //  List<Advertisement> addtiped = await this.Context.Advertisements.Include(ui => ui.AddType).ToListAsync();
            AddComp addComp = new AddComp();
            addtiped.Sort(addComp);
             ///addtiped.OrderBy(o=> Convert.ToDateTime(o.LastUpdate)).ToList();
             addtiped.Reverse();
            //addtiped.Sort((x, y) => DateTime.Compare(Convert.ToDateTime(x.LastUpdate), Convert.ToDateTime(y.LastUpdate)));
             int pocetniCount = addtiped.Count;
            int cs = addtiped.Count;
            if(index>cs){
                addtiped = null;
                return new JsonResult( new { data = addtiped , broj = pocetniCount});
            }
            if(cs >=index){  //moras u frontu uvek prvo 0 pa 5
                for(int i=0; i<index; i++){
                 addtiped.RemoveAt(0);
                 }
                 
            
            }
             
             cs = cs-index; 
             if(cs>5){
                
                 while(addtiped.Count > 5){
                 addtiped.RemoveAt(addtiped.Count -1);}
                 }
            
            return new JsonResult( new { data = addtiped , broj = pocetniCount});
        }
        [HttpPost]
        [Route("PostAdd/{username}")]
        public async Task<IActionResult> PostAdd (string username, [FromBody] Advertisement a)
        {
             User userr =await this.Context.Users.Where(x=>x.Username == username).FirstOrDefaultAsync();
             if (userr == null)
                return StatusCode(403);

            a.UsernameFK = userr.Username;
            a.UserId = userr.Id;
            a.LastUpdate = DateTime.Now.ToString("MM/dd/yyyy");

             this.Context.Advertisements.Add(a);
            foreach(Tips t in a.AddType){
                t.AddId = a.Id;
                if(t.TypeDesc=="filter_hitno")
                {
                    List<User> svi =  await this.Context.Users.ToListAsync();
                    svi.Remove(userr);
                    foreach(User k in svi){
                        mailService.SendUrgent(k.Email , userr.Username,userr.Language);
                    }
                }
                this.Context.Tipovi.Add(t);
            }

           // this.Context.Advertisements.Add(a);
            await Context.SaveChangesAsync();
            return StatusCode(200);
        }
         [HttpPut]
        [Route("IzmeniAdd/{id}")]
        public async Task<IActionResult> IzmeniAdd (int id, [FromBody] Advertisement a)
        {
             Advertisement ad = await this.Context.Advertisements.Include(x=>x.AddType).Where(p=>p.Id==id).FirstOrDefaultAsync();
             if (ad == null)
                return StatusCode(403);

            ad.UsernameFK = ad.UsernameFK;
            ad.UserId = ad.UserId;
            ad.AdDescription = a.AdDescription;
           // var culture = System.Globalization.CultureInfo.CurrentCulture;
            //DateTime.ParseExact(rw.LastUpdate, "MM/dd/yyyy", culture);
            
            ad.LastUpdate =  DateTime.Now.ToString("MM/dd/yyyy");
            ad.Title = a.Title;
            foreach(Tips t in ad.AddType){
            
                this.Context.Tipovi.Remove(t);

            }
            foreach(Tips t in a.AddType){
                ad.AddType.Add(t);
                t.AddId = ad.Id;
                this.Context.Tipovi.Add(t);

            }


            await Context.SaveChangesAsync();
            return StatusCode(200);
        }
        [HttpDelete]
        [Route("DeleteAdd/{id}")]
        public async Task<IActionResult> DeleteAdd (int id)
        {
             Advertisement ad = await this.Context.Advertisements.Include(x=>x.AddType).Where(p=>p.Id==id).FirstOrDefaultAsync();
             
             if (ad == null)
                return StatusCode(403);

        
            foreach(Tips t in ad.AddType){
            
                this.Context.Tipovi.Remove(t);

            }
            this.Context.Advertisements.Remove(ad);


            await Context.SaveChangesAsync();
            return StatusCode(200);
        }
        
        
       

    }

}