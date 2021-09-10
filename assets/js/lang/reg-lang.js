function onloadLanguage()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    var ime = document.querySelector(".imelang");
    var prezime = document.querySelector(".prezimelang");
    var korime  = document.querySelector(".korimelang");
    var lozinka = document.querySelector(".lozinkalang");
    var lglang = document.querySelector(".lglang");
    var email = document.querySelector(".emaillang");
    var replozinkalang= document.querySelector(".replozinkalang");;
    var loglang = document.querySelector(".loglang");
    var infbkorime = document.querySelector(".infbkorime");
    var infbemail = document.querySelector(".infbemail");
    var infbpass = document.querySelector(".infbpass");
    var rgl = document.querySelector(".reglang");
    var rgldva = document.querySelector(".reglangdva");
    
    link.forEach(element => {
        
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            rgl.innerHTML = data[att].reglang;
            ime.placeholder= data[att].imelang;
            prezime.placeholder= data[att].prezimelang;
            korime.placeholder = data[att].korimelang;
            lozinka.placeholder= data[att].lozinkalang;
            replozinkalang.placeholder=data[att].replozinkalang;
            email.placeholder = data[att].emaillang;
            lglang.innerHTML =data[att].lglang;
            loglang.innerHTML =data[att].loglang;
            infbemail.innerHTML =  data[att].infbemail;
            infbkorime.innerHTML = data[att].infbkorime; 
            infbpass.innerHTML = data[att].infbpass;
            rgldva.innerHTML = data[att].reglangdva;
            
        })
    });
    
    var  data= {
        "srpski":{
            "reglang": "<i class=\"fas fa-user-plus\"></i>&nbsp; Registruj se",
            "reglangdva": "Registruj se!",
            "imelang" : "Ime",
            "prezimelang" : "Prezime",
            "korimelang":"Korisničko ime",
            "lozinkalang": "Šifra",
            "replozinkalang":"Ponovite šifru",
            "emaillang": "E-mail adresa",
            "lglang" : "Jezik <i class=\"fas fa-language\"></i>" ,
            "loglang": "Već imaš nalog?",
            "infbkorime":"Molimo Vas, unestite korisničko ime!",
            "infbemail":"Molimo Vas, unesite validnu e-mail adresu!",
            "infbpass": "Šifra mora da sadrži bar  jedan numerički karakter i bar po jedno malo slovo i veliko slovo, i dužina mora da bude 8 ili više karaktera."
            
        },
        "english":{
            "reglang": "<i class=\"fas fa-user-plus\"></i>&nbsp; Create your Account",
            "reglangdva": "Register Account!",
            "imelang" : "First Name",
            "prezimelang" : "Last Name",
            "korimelang":"Username",
            "lozinkalang": "Password",
            "replozinkalang":"Repeate password!",
            "emaillang": "E-mail address",
            "lglang" : "Language <i class=\"fas fa-language\"></i>",
            "loglang": "Already have an account?",
            "infbkorime": "Please choose a username!",
            "infbemail": "Please enter valid e-mail address!",
            "infbpass" : "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            
        }
    }
    }