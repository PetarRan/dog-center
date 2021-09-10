using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPIDogly.Models
{
    public class DoglyContext : DbContext
    {

       public DbSet<User> Users { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Advertisement> Advertisements { get; set; }
        public DbSet<DogService> DogService { get; set; }
        public DbSet<Tips> Tipovi { get; set; }
        public DbSet<LikedServices> LikedServices { get; set; }
        public DoglyContext(DbContextOptions options) : base(options)
        {


        }

    }
}
