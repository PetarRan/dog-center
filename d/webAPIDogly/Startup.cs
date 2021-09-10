using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using webAPIDogly.Models;
using webAPIDogly.Settings;

namespace webAPIDogly
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddDbContext<DoglyContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DoglyCS"));
            });

            services.AddControllers();
             services.AddCors(p=>
             {
                p.AddPolicy("CORS", builder=>{
                    builder.AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin()
                     .WithOrigins(new string[]{
                         "http://127.0.0.1:5500"
                   });
                 });
             });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "webAPIDogly", Version = "v1" });
            });
            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));
            services.AddTransient<Services.IMailService, Services.MailService>();
            //services.AddDefaultIdentity<IdentityUser>();
          
            // services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true);
            // services.AddAuthentication(options => {
            //     options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                
            // })
            //     .AddGoogle(options=>{
            //         options.ClientId = "635854025290-s9j2cr3nvuk18om4fqjjsfvabve3v3n0.apps.googleusercontent.com";
            //         options.ClientSecret = "7Ny4yYMdT8bORmPXhK-Ro2bi";
            //     });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "webAPIDogly v1"));
            }

            app.UseHttpsRedirection();
            app.UseCors("CORS");
            app.UseRouting();
            
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
