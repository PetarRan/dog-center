using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace webAPIDogly.Models
{
    public class LikedServices
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        
        public int DogServiceId {get; set; }

       
       
        
    }
}