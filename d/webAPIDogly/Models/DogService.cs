using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace webAPIDogly.Models
{
    public class DogService
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(600)]
        public string SDescription  {get; set; }
        public string LastUpdate { get; set; }
        [Range(0,5, ErrorMessage ="Rate mast be between 0 and 5 stars")]
        public short AvgRate { get; set; }
        public virtual List<Review> Reviews { get; set; }
        public string Type { get; set; } //ima 4-5 tipa i to ce da se pamti kao kod za ikonicu 
        public string WebLink { get; set; }
        public string Address{get;set;}
        public string PhoneNumber{get;set;}
        public List<LikedServices> Likedservices {get;set;}
        
    }
}
