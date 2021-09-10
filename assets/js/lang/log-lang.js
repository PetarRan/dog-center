function onloadLanguageLog()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    
   var loglang = document.querySelector(".loglang");
     var lozinka = document.querySelector(".lozinkalang");
     var lglang = document.querySelector(".lglang");
     var email = document.querySelector(".emaillang");
    var forgpasslang = document.querySelector("#forgottenpass");
    var welcomelang = document.getElementById("welcomelang");
    var rgl = document.getElementById("reglang");
    var infbemail = document.querySelector(".infbemail");
    var infbpass = document.querySelector(".infbpass");
    
    link.forEach(element => {
        console.log(link);
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            rgl.innerHTML = data[att].reglang;
            welcomelang.innerHTML = data[att].welcomelang;
            lozinka.placeholder= data[att].lozinkalang;
            loglang.innerHTML=data[att].loglang;
            email.placeholder = data[att].emaillang;
            lglang.innerHTML =data[att].lglang;
            forgpasslang.innerHTML =data[att].forgpasslang;
            infbemail.innerHTML =  data[att].infbemail;
            infbpass.innerHTML = data[att].infbpass;
            
        })
    });

    var  data= {
        "srpski":{
            "reglang": "<i class=\"fas fa-user-plus\"></i>&nbsp; Registruj se",
            "forgpasslang": "Zaboraviljena šifra ?",
            "welcomelang" : "Dobrodošli nazad!",
            "prezimelang" : "Prezime",
            "korimelang":"Korisničko ime",
            "lozinkalang": "Šifra",
            "replozinkalang":"Ponovite šifru",
            "emaillang": "E-mail adresa",
            "lglang" : "Jezik <i class=\"fas fa-language\"></i>" ,
            "loglang": "<i class=\"fas fa-user\"></i>&nbsp; Prijavi se!",
            "infbemail":"Molimo Vas, unesite validnu e-mail adresu!",
            "infbpass": "Pogrešna šifra!"
        },
        "english":{
            "reglang": "<i class=\"fas fa-user-plus\"></i>&nbsp; Register",
            "forgpasslang": "Forgotten password? Click here!",
            "reglangdva": "Register Account!",
            "welcomelang" : "Welcome back!",
            "lozinkalang": "Password",
            "emaillang": "E-mail address",
            "lglang" : "Language <i class=\"fas fa-language\"></i>",
            "loglang": "<i class=\"fas fa-user\"></i>&nbsp; Login",
            "googlelang": "<i class=\"fab fa-google\"></i>&nbsp;Login with Google",
            "infbemail": "Please enter valid e-mail address!",
            "infbpass" : "Incorrect password!"
            
        }
    }
}