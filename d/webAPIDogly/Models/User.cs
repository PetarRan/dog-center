using FluentValidation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using RequiredAttribute = System.ComponentModel.DataAnnotations.RequiredAttribute;

namespace webAPIDogly.Models
{
    
    public class User
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(20)]
        public string FirstName { get; set; }

        [MaxLength(20)]
        public string LastName { get; set; }

        [MaxLength(50)]
        [Required]
        public string Username { get; set; }
        [MaxLength(50)]
        [Required]
        [DataType(DataType.Password)] 
        public string Password { get; set; }

        [EmailAddress]
        [Required]
        public string Email { get; set; }
        [MaxLength(10)]
        public string Role { get; set; } // A ili  U  
        public string AvatarUrl { get; set; }
        public string Language {get; set;}
        public virtual List<Advertisement> UAds { get; set; }

        public virtual List<Review> UReviews { get; set; }

        public virtual List<LikedServices> LikedServices { get; set; }
        

    }
    

        
    
}
