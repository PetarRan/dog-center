using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webAPIDogly.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }

        [MaxLength(300)]
        public string RDescription { get; set; }
        public string PostDate { get; set; }
        [Range(0, 5, ErrorMessage = "Rate mast be between 0 and 5 stars")]
        public short Rate { get; set; }
    }
}
