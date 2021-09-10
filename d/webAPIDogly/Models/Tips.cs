using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace webAPIDogly.Models
{
    public class Tips
    {
        [Key]
        public int Id { get; set; }
        public int AddId {get; set;}
        public string TypeDesc {get; set;} 
        
        
    }
}