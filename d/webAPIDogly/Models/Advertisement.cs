using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace webAPIDogly.Models
{
    public class Advertisement
    {
        [Key]
        public int Id { get; set; }
        
        public string AdDescription { get; set; }
        public string PhoneNumber { get; set; }
        public string Title{get;set;}
        public string UsernameFK { get; set; }
        public string LastUpdate { get; set; }
        public int UserId{get; set;}
        public virtual List<Tips> AddType { get; set; } 
        

    }
 }
