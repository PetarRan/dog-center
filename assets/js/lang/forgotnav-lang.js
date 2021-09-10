function onloadLanguageForgotNav()  {
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
    var featurelang= document.querySelector(".featurelang");;
    var fdesclang = document.querySelector(".fdesclang");
    var savdesclang = document.querySelector(".savdesclang");
    var adddesclang = document.querySelector(".adddesclang");
   
    var addlangdva = document.querySelector(".name.addlang");
    var objlangdva = document.querySelector(".name.objlang");
    var objdesclang = document.querySelector(".objdesclang");
    var reviewlang = document.querySelector(".reviewlang");
    var reviewdesclang= document.querySelector(".reviewdesclang");
    
    link.forEach(element => {
        console.log(link);
        element.addEventListener('click', ()=>{
            console.log(element);
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
            "featurelang": "Odlike",
            "fdesclang": "Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.",
            "savdesclang":"Srpski tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.",
            "adddesclang":"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu. ",
            "savlangdva": "Saveti",
           // "addlangdva": "Oglasi",
           // "objlangdva": "Objekti",
            "objdesclang": "neki opis obj na srpskom ",
            "reviewlang": "Ostavite recenziju servisa",
            "reviewdesclang": "Neki srpski Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae."
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
            "featurelang": "Features",
            "fdesclang": "Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.",
            "savdesclang":"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.",
            "adddesclang":"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.",
            "savlangdva": "Tips",
            "addlangdva": "Advertisements",
            "objlangdva": "Locales",
            "objdesclang": "Some desc in english",
            "reviewlang": "Leave a review",
            "reviewdesclang": "Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae."
        }
    }
    }