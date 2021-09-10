function onloadLanguageLogForgP()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    
   var rss = document.querySelector(".rss");
   var rss1 = document.querySelector(".rss1");
   var istee1 = document.querySelector(".istee1");
   var istee = document.querySelector(".istee");
   var lozinkalang  = document.querySelector(".lozinkalang");
   var lozinkalangp  = document.querySelector(".lozinkalangp");
    
    link.forEach(element => {
        console.log(link);
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            rss.innerHTML = data[att].rss;
            rss1.innerHTML = data[att].rss1;
            istee1.innerHTML = data[att].istee1;
            istee.innerHTML = data[att].istee;
            lozinkalang.placeholder = data[att].lozinkalang;
            lozinkalangp.placeholder = data[att].lozinkalangp;

            
        })
    });

    var  data= {
        "srpski":{
            "rss": "<i class=\"fas fa-user rss1\"></i>&nbsp; Resetuj šifru",
            "istee":"Šifre moraju biti iste",
            "istee1":"Šifre moraju biti iste",
            "rss1": "<i class=\"fas fa-user rss1\"></i>&nbsp; Resetuj šifru",
            "lozinkalang": "Šifra",
            "lozinkalangp": "Ponovljena Šifra"


        },
        "english":{
            "rss": "<i class=\"fas fa-user rss1\"></i>&nbsp; Reset password",
            "istee":"The passwords must be the same",
            "istee1":"The passwords must be the same",
            "rss1": "<i class=\"fas fa-user rss1\"></i>&nbsp; Reset password",
            "lozinkalang": "Password",
            "lozinkalangp": "Repeated password"
            
            
        }
    }
}