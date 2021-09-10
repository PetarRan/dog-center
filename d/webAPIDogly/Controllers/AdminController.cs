using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using webAPIDogly.Models;
using webAPIDogly.Services;
using Microsoft.AspNetCore.Authorization;

namespace webAPIDogly.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private DoglyContext Context { get; set; }
        private readonly IMailService mailService;
        public AdminController(DoglyContext con, IMailService mailService )
        {
            this.Context = con;
            this.mailService = mailService;
          
        }

       [HttpGet]
       [Route("CountData/{username}")]
       public async Task<JsonResult> CountData(string username)
        {
             User user = await this.Context.Users.Where(x => x.Username == username).FirstOrDefaultAsync();
             
             if (user == null)
             {
                 return new JsonResult(new {status = 404});
             }
             if(user.Role!="A") return new JsonResult(new {status = 403});
            int objCount = this.Context.DogService.Count();
            int oglCount =this.Context.Advertisements.Count();
            int rewds=  this.Context.Reviews.Count();
            int users =  this.Context.Users.Count();

           
           

            return new JsonResult(new {
                    status = 200,
                    username =user.Username,
                    email=user.Email,
                    objektiCount = objCount,
                    oglasiCount = oglCount,
                    reviewsCount = rewds,
                    usersCount = users
            }); 
        }
        [HttpPost]
        [Route("PostService/{username}")]
        public async Task<IActionResult> PostService(string username, [FromBody] DogService ds)
        {
            User u = await this.Context.Users.Where(x=>x.Username==username).FirstOrDefaultAsync();
            if(u==null) return StatusCode(400);
            if(u.Role!= "A") return StatusCode(403);
            this.Context.DogService.Add(ds);

            await Context.SaveChangesAsync();
            return StatusCode(200);
        }
        [HttpGet]
        [Route("GetOglasi/{brojdana}/{username}")]
        public async Task<List<JsonResult>> GetOglasi(int brojdana,string username)
        {
            brojdana= brojdana*(-1);  
            DateTime dat = DateTime.Now.AddDays(brojdana);
           
            
            List<Advertisement> oglasi = await this.Context.Advertisements.ToListAsync();
            AddComp addComp = new AddComp();
            oglasi.Sort(addComp);
             ///addtiped.OrderBy(o=> Convert.ToDateTime(o.LastUpdate)).ToList();
             oglasi.Reverse();
            User user= new User();
            var daR = new List<JsonResult>(); var culture = System.Globalization.CultureInfo.CurrentCulture;
            foreach (Advertisement rw in oglasi)
            {
               
                
                DateTime dateOglasa  = DateTime.ParseExact(rw.LastUpdate, "MM/dd/yyyy", culture);
                if(DateTime.Compare(dateOglasa,dat)>=0)
                {
                    user = await this.Context.Users.Include(x=>x.UAds).Where(p=>p.Id==rw.UserId).FirstOrDefaultAsync();
            
                var dataRew = new
                {
                    username = user.Username,
                    avatar = user.AvatarUrl,  
                    opis = rw.AdDescription,
                    datumPostavlajnja = rw.LastUpdate,
                    userId = user.Id,
                    id = rw.Id,
                    ime = user.FirstName +" "+user.LastName,
                    email = user.Email,
                    brojOglasa = user.UAds.Count,
                    naslov = rw.Title

                };
                
                daR.Add(new JsonResult( dataRew));} 

            }


            return daR;



        }
        [HttpGet]
        [Route("GetKorisnici")]
        public async Task<List<User>> GetKorisnici()
        {
                List<User> listService = await this.Context.Users.ToListAsync();
                
                return listService;
            
        }
        [HttpGet]
        [Route("GetObjekti/{rate}")]
        public async Task<List<DogService>> Getobjekti(int rate)
        {
                List<DogService> listService = await this.Context.DogService.ToListAsync();
                List<DogService> vrati = new List<DogService>();
                foreach(DogService a in listService){
                    if(a.AvgRate == rate){
                        vrati.Add(a);
                    }
                
                }
                
                
                return vrati;
            
        }
        [HttpDelete]
        [Route("DeleteUser/{idUsera}")]
        public async Task<IActionResult> DeleteUser(int idUsera)
        {
                User us = await this.Context.Users.Where(x=>x.Id==idUsera).FirstOrDefaultAsync();
                if(us!= null) 
                {
                    this.Context.Users.Remove(us);
                await this.Context.SaveChangesAsync();
                return StatusCode(200);
                }
                if(us==null)
                return StatusCode(401);
                else

                 return StatusCode(400);
        }

}}