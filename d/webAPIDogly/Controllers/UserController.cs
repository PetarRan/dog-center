using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using webAPIDogly.Models;

namespace webAPIDogly.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private DoglyContext Context { get; set; }
        public UserController(DoglyContext con)
        {
            this.Context = con;
        }

        [HttpGet]
        [Route("GetUser/{email}")]
        public async Task<JsonResult> GetUser(string email)
        {
            User user = await this.Context.Users.Include(x => x.UAds).Include(x => x.UReviews).Where(x => x.Email== email).FirstOrDefaultAsync();
            return new JsonResult(new { 
                firstName = user.FirstName,
                lastName = user.LastName,
                email= user.Email,
                avatarUrl= user.AvatarUrl,  //avatar0
                language = user.Language
                });
        }
        [HttpGet]
        [Route("GetrUser/{email}")]
        public async Task<JsonResult> GetrUser(string email)
        {
            User user = await this.Context.Users.Include(x => x.UAds).Include(x => x.UReviews).Where(x => x.Email== email).FirstOrDefaultAsync();
            return new JsonResult(user);
        }
        
        [HttpPost]
        [Route("AddAdvertisements/{email}")]
        public async Task<IActionResult> AddAdvertisements(string email, [FromBody] Advertisement a  )
        {

            User userr = await this.Context.Users.Where(x=>x.Email==email).FirstOrDefaultAsync();
            if (userr == null)
                return StatusCode(404);

            a.UsernameFK = userr.Username;
            a.LastUpdate = DateTime.UtcNow.ToString("d");
            foreach(Tips t in a.AddType){
                this.Context.Tipovi.Add(t);
            }

            this.Context.Advertisements.Add(a);
            await Context.SaveChangesAsync();
            return StatusCode(200);


        }

        [HttpPut]
        [Route("UpdateAdvertisements/{id}/{Aid}")]
        public async Task<IActionResult> UpdateAdvertisements(int id, int Aid, [FromBody] Advertisement a)
        {

            User userr = await this.Context.Users.FindAsync(id);
            if (userr == null) return StatusCode(404);

            Advertisement ad = await this.Context.Advertisements.FindAsync(Aid);
            if (ad == null) return StatusCode(403);

            ad.LastUpdate = DateTime.UtcNow.ToString("d");
            ad.AdDescription = a.AdDescription;
            ad.PhoneNumber = a.PhoneNumber;

            await Context.SaveChangesAsync();
            return StatusCode(200);


        }
        [HttpGet]
        [Route("GetProfileInfo/{username}")]
        public async Task<User> GetProfileInfo(string username)
        {
            
                User user =await this.Context.Users.Include(x=>x.UAds).Where(x=>x.Username == username).FirstOrDefaultAsync();
                
                foreach(Advertisement a in user.UAds){
                    Advertisement k = await this.Context.Advertisements.Include(x=>x.AddType).Where(x=>x.Id == a.Id).FirstOrDefaultAsync();
                    a.AddType = k.AddType;
                }
                
                
                
                return user;
            
        }
        [HttpGet]
        [Route("GetLikedServices/{username}")]
        public async Task<List<DogService>> GetLikedServices(string username)
        {
                User user = await this.Context.Users.Where(x=>x.Username == username).FirstOrDefaultAsync();
                List<LikedServices> ls = await this.Context.LikedServices.Where(x=> x.UserId == user.Id).ToListAsync();
                List<DogService> listService = new List<DogService>();
                foreach(LikedServices a in ls){
                    
                    DogService ds = await this.Context.DogService.Where(x=> x.Id == a.DogServiceId).FirstOrDefaultAsync();
                    if(ds!=null)
                    listService.Add(ds);
                
                }
                
                
                return listService;
            
        }
        [HttpPost]
        [Route("PostLikedServices/{idS}/{username}")]
        public async Task<IActionResult> PostLikedServices(int idS, string username, [FromBody] LikedServices s)
        {

            User user =await this.Context.Users.Where(x=>x.Username == username).FirstOrDefaultAsync();
            DogService ds = await this.Context.DogService.Where(x=> x.Id == idS).FirstOrDefaultAsync();
             LikedServices ls = await this.Context.LikedServices.Where(x=> x.UserId == user.Id && x.DogServiceId == idS).FirstOrDefaultAsync();
            if(user==null || ds==null ) 
                return StatusCode(203);
           
               
             else  if(ls!=null)
             {    
                    this.Context.LikedServices.Remove(ls);
                    await this.Context.SaveChangesAsync();
                     return StatusCode(201);
                }
            else{
                s.UserId = user.Id;
                if(user.LikedServices==null)
                user.LikedServices = new List<LikedServices>();
                user.LikedServices.Add(s);
                if(ds.Likedservices==null)
                ds.Likedservices= new List<LikedServices>();
                ds.Likedservices.Add(s);
                this.Context.LikedServices.Add(s);
                 await this.Context.SaveChangesAsync();
                  return StatusCode(200);   
            } 
            
            
            
        }

        [HttpGet]
        [Route("ModalInfo/{id}")]
         public async Task<IActionResult> ModalInfo(int id)
        {
            try
            {   User user =await this.Context.Users.Include(x => x.UAds).Where(x=>x.Id == id).FirstOrDefaultAsync();
                return Ok(new { 
                ime = user.FirstName +" "+user.LastName,
                email = user.Email,
                avatarUrl= user.AvatarUrl,  
                broglasa = user.UAds.Count,
                username = user.Username
                });
            }
            catch (Exception)
            {
                return StatusCode(400);
            }
        }

        [HttpPut]
        [Route("UpdateUsersPass/{nova}")]
        public async Task<ActionResult> UpdateFirstName( string nova,[FromBody] User newuse)
        {   User user=null;
            string enkodedPass = Func.Encodepass(newuse.Password);
            if(newuse.Email=="f@hhj.com"){
                user= await this.Context.Users.Where(x=>x.Username == newuse.Username && x.Password == enkodedPass).FirstOrDefaultAsync();
            }
            if(newuse.Username == "csdds" ){
                    user =await this.Context.Users.Where(x=>x.Email == newuse.Email).FirstOrDefaultAsync();
            }
            if (user == null) return StatusCode(404);

            string novaPass = Func.Encodepass(nova);
            user.Password = novaPass;
            user.Language = newuse.Language;
            
            await this.Context.SaveChangesAsync();
            return StatusCode(200);
        }
        [HttpPut]
        [Route("UpdateUsersLanguage/{username}")]
        public async Task<ActionResult> UpdateUsersLanguage( string nova,[FromBody] User newuse)
        {   User user=null;
           
            user= await this.Context.Users.Where(x=>x.Username == newuse.Username ).FirstOrDefaultAsync();
            user.Language = newuse.Language;
            await this.Context.SaveChangesAsync();
            return StatusCode(200);
        }

        [HttpPut]
        [Route("UpdateUsersNL")]
        public async Task<ActionResult> UpdateUsersNL( [FromBody] User  newuse)
        {
              
            User user = await this.Context.Users.Where(x=>x.Username == newuse.Username).FirstOrDefaultAsync();
            if (user == null) return StatusCode(404);

          
            user.LastName= newuse.LastName;
            user.FirstName=newuse.FirstName;
            
            
            await this.Context.SaveChangesAsync();
            return StatusCode(200);
        }
        [HttpPut]
        [Route("UpdateUsersAvatar")]
        public async Task<ActionResult> UpdateUsersAvatar( [FromBody] User  newuse)
        {
              
            User user = await this.Context.Users.Where(x=>x.Username == newuse.Username).FirstOrDefaultAsync();
            if (user == null) return StatusCode(404);

          
          
            user.AvatarUrl=newuse.AvatarUrl;
            
            
            await this.Context.SaveChangesAsync();
            return StatusCode(200);
        }
        
       

      
        
    }
}