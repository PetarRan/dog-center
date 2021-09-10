function onloadLanguageNav()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    var rgl = document.querySelector(".reglang");
    var logl = document.querySelector(".loglang");
    var serl = document.querySelector(".servlang");
    var savl = document.querySelector(".savlang");
    var objl = document.querySelector(".objlang");
    var addl = document.querySelector(".addlang");
    var lglang = document.querySelector(".lglang");
    var sropt = document.querySelector(".sropt");
    var enopt = document.querySelector(".enopt");
   
    link.forEach(element => {
        
        element.addEventListener('click', ()=>{
            
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            rgl.innerHTML = data[att].reglang;
            logl.innerHTML = data[att].loglang;
            serl.innerHTML= data[att].servlang;
            savl.innerHTML= data[att].savlang;
           
            objl.innerHTML = data[att].objlang;
            addl.innerHTML = data[att].addlang;
            lglang.innerHTML =data[att].lglang;
            sropt.innerHTML =data[att].sropt;
            enopt.innerHTML =data[att].enopt;
          
        })
    });
    
    var  data= {
        "srpski":{
            "reglang": "Registracija <i class=\"fas fa-user-plus\"></i>",
            "loglang": "Prijava <i class=\"fas fa-sign-in-alt\"></i>",
            "servlang": "Usluge <i class=\"fas fa-plus\"></i>",
            "savlang": "<i class=\"fas fa-hand-holding-heart icon\"></i> Saveti",
            "addlang": "<i class=\"fas fa-bullhorn icon\"></i> Oglasi",
            "objlang": "<i class=\"fas fa-building icon\"></i> Objekti ", 
            "lglang" : "Jezik <i class=\"fas fa-language\"></i>" ,
            "sropt" : "<i class=\"flag-icon flag-icon-srb\"></i> Srpski",
            "enopt": "<i class=\"flag-icon flag-icon-usa\"></i> English",
            
        },
        "english":{
            "reglang": "Registration <i class=\"fas fa-user-plus\"></i>",
            "loglang": "Log in <i class=\"fas fa-sign-in-alt\"></i>",
            "servlang": "Services <i class=\"fas fa-plus\"></i>",
            "savlang": "<i class=\"fas fa-hand-holding-heart icon \"></i> Tips",
            "addlang": "<i class=\"fas fa-bullhorn icon\"></i> Advertisements",
            "objlang": "<i class=\"fas fa-building icon\"></i> Locales ",
            "lglang" : "Language <i class=\"fas fa-language\"></i>",
            "sropt": "<i class=\"flag-icon flag-icon-srb\"></i> Serbian",
            "enopt": "<i class=\"flag-icon flag-icon-usa\"></i> English",
            
        }
    }
    }