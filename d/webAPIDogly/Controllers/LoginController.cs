using System;
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
    public class LoginController : ControllerBase
    {
        private DoglyContext Context { get; set; }

        private readonly IMailService mailService;

        private static int loginTry { get; set; }
        public LoginController(DoglyContext con, IMailService mailService )
        {
            this.Context = con;
            this.mailService = mailService;
        }
        
        [HttpGet]
        [Route("LoginUserByEmail/{email}/{password}")]
        public async Task<JsonResult> LoginUserByEmail(string email, string password)
        { 

            string msg = "",token="",rl="";
            msg = Func.Encodepass(password);

            User user = await this.Context.Users.Where(x => x.Email == email).FirstOrDefaultAsync();
            if(user.Role=="A") rl="admin.html";
            if(user.Role=="U") rl = "index-user.html?lang="+user.Language;
            
            if (user == null)
                return new JsonResult(new { status = "203", uname = user.Username, tok = token , reflink=rl});
            if (user.Password != msg)
                return new JsonResult(new { status = "202", uname = user.Username, tok = token,reflink=rl });
            
            token = Func.CreateToken(user.Username,"true");
            return  new JsonResult(new { status = "200", uname = user.Username, tok= token,reflink=rl });
        }
        
        [HttpGet]
        [Route("CheckLoginSession/{tokenString}")]
        public async Task<JsonResult> CheckLoginSession(string tokenString)
        {

            User user = await this.Context.Users.Where(p => p.Username == tokenString).FirstOrDefaultAsync();
            string url = "";
            if (user != null)
            {
                 if(user.Role=="A") url="admin.html?lang="+ user.Language;
                 else{
                     url="index-user.html?lang="+user.Language;
                 }
                return new  JsonResult(new{ status="200", tok = Func.CreateToken(user.Username,"true"),url=url});
            }
            else
            {
                user = await this.Context.Users.Where(p => p.Email == tokenString).FirstOrDefaultAsync(); 
                if(user!=null){
                if(user.Role=="A") url="admin.html";
               
                    url="index-user.html?lang="+user.Language;
                    return new  JsonResult(new{ status="200", tok = Func.CreateToken(user.Username,"true"), url=url});}
                    else
                return new JsonResult(new{ status ="403", tok = "null", url=""}); 
            }

        }
        [HttpGet]
        [Route("SendEmail/{email}")]
        public async Task<IActionResult> SendEmail(string email)
        {
            User user = await this.Context.Users.Where(x => x.Email == email).FirstOrDefaultAsync();
            if (user == null)
                return StatusCode(400);
            else
            {
                await this.mailService.SendForgottenPassAsync(user.Email, user.Username, user.Language);
               
                return StatusCode(200, user.Language); 
            }
        }
        

        

    }

}