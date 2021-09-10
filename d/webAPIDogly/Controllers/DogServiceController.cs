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

namespace webAPIDogly.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DogServiceController : ControllerBase
    {
        private DoglyContext Context { get; set; }
        private static int loginTry { get; set; }
        public DogServiceController(DoglyContext con)
        {
            this.Context = con;
        }
        [HttpGet]
        [Route("GetServices")]
        public async Task<List<DogService>> GetServices()
        {
            
            List<DogService> listaServisa = await this.Context.DogService.OrderBy(o => o.AvgRate).ToListAsync();
            listaServisa.Reverse();
            return listaServisa;
        }


        [HttpPost]
        [Route("PutService/{id}")]
        public async Task<IActionResult> PutService(int id, [FromBody] DogService ds)
        {
            DogService dsStari = await this.Context.DogService.FindAsync(id);
            dsStari.Address = ds.Address;
            dsStari.PhoneNumber = ds.PhoneNumber;



            await Context.SaveChangesAsync();
            return StatusCode(200);
        }
        [HttpPost]
        [Route("AddServiceReview/{id}/{username}")]
        public async Task<JsonResult> GetServices(int id, string username, [FromBody] Review r)
        {
            float prosecnaOcena = 0;
            DogService listaServisa = await this.Context.DogService.Include("Reviews").Where(predicate => predicate.Id == id).FirstOrDefaultAsync();


            User user = await this.Context.Users.Where(predicate => predicate.Username == username).FirstOrDefaultAsync();

            if (listaServisa != null && user != null)
            {
                r.PostDate = DateTime.UtcNow.ToString("d");

                if (listaServisa.Reviews == null)
                    listaServisa.Reviews = new List<Review>();
                listaServisa.Reviews.Add(r);

                if (user.UReviews == null)
                    user.UReviews = new List<Review>();
                user.UReviews.Add(r);

                this.Context.Reviews.Add(r);

                foreach (Review rw in listaServisa.Reviews)
                {
                    prosecnaOcena += rw.Rate;
                }
                prosecnaOcena = prosecnaOcena / listaServisa.Reviews.Count;
                listaServisa.AvgRate = (short)Math.Round(prosecnaOcena);
                await this.Context.SaveChangesAsync();
                return new JsonResult(new
                {
                    status = 200,
                    avatar = user.AvatarUrl,
                    rewpd = r.PostDate,
                    newAwgRate = listaServisa.AvgRate
                    

                });

            }

            return new JsonResult(new { status = 400 });



        }
        [HttpGet]
        [Route("GetServicessReviews/{id}")]
        public async Task<List<JsonResult>> GetReviewServices(int id)
        {

            DogService listaServisa = await this.Context.DogService.Include("Reviews").Where(predicate => predicate.Id == id).FirstOrDefaultAsync();
            var daR = new List<JsonResult>();
            foreach (Review rw in listaServisa.Reviews)
            {

            
                User user = await this.Context.Users.Include(x => x.UAds).Where(predicate=>predicate.Id==rw.UserId).FirstOrDefaultAsync();
               

                
                if(user==null) break;
                var dataRew = new
                {
                    username = user.Username,
                    avatar = user.AvatarUrl,  
                    rate = rw.Rate,
                    datumPostavlajnja = rw.PostDate,
                    opis = rw.RDescription,
                    userId = user.Id,
                    ime =user.FirstName +" "+user.LastName,
                    email = user.Email,
                    brojOglasa= user.UAds.Count

                };
                
                daR.Add(new JsonResult(dataRew));

            }


            return daR;



        }
        [HttpPut]
        [Route("IzmenaServices")]
        public async Task<IActionResult> IzmenaServices([FromBody] List<DogService> lista)
        {
            float prosecnaOcena = 0;
            foreach (DogService dw in lista)
            {
                DogService listaServisa = await this.Context.DogService.Include("Reviews").Where(predicate => predicate.Id == dw.Id).FirstOrDefaultAsync();
                if (listaServisa != null)
               

                    foreach (Review rwa in listaServisa.Reviews)
                                {
                                    prosecnaOcena += rwa.Rate;
                                }
                                prosecnaOcena = prosecnaOcena / listaServisa.Reviews.Count;
                                listaServisa.AvgRate = (short)Math.Round(prosecnaOcena);
                prosecnaOcena=0;

                
            }
            await Context.SaveChangesAsync();
            return StatusCode(200);
        }
    


    }

}