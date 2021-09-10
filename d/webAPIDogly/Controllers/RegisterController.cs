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
    public class RegisterController : ControllerBase
    {
        private DoglyContext Context { get; set; }
        private readonly IMailService mailService;
        

        
        public RegisterController(DoglyContext con, IMailService mailService )
        {
            this.Context = con;
            this.mailService = mailService;
          
        }

        [HttpPost]
        [Route("RegisterNewUserGenerateToken")]
        public async Task<IActionResult> RegisterNewUserGenerateToken([FromBody] User newUser)
        {
            User allreadyexist = await this.Context.Users.Where(p => p.Email == newUser.Email || p.Username == newUser.Username).FirstOrDefaultAsync();
            if (allreadyexist != null)
            {
                if(allreadyexist.Username == newUser.Username)
                {
                    if(newUser.Language=="srpski")
                     return StatusCode(202,"Ovo korisnicko ime vec postoji!");
                    else
                    return StatusCode(202, "This username already exists!");
                   
                }
                else
                {
                    if(newUser.Language=="srpski")
                        return StatusCode(203,"Ova e-mail adresa vec postoji! Zasto ne pokusate da se prijavite?");
                    else
                    return StatusCode(203,"This email address already exists! Why don't you try login?");
                }
            }
            string msg = "";
            string userToken = Func.CreateToken(newUser.Username,"false");
            msg = Func.Encodepass(newUser.Password);
            newUser.Password = msg;
            this.Context.Users.Add(newUser);

            await mailService.SendWelcomeEmailAsync(newUser.Email, newUser.FirstName, newUser.Language);
            await this.Context.SaveChangesAsync();


            return new JsonResult(new { tokendata = userToken, reflink = "http://127.0.0.1:5500/WelcomeEmailSent.html"});
        }
        
        


    }
}