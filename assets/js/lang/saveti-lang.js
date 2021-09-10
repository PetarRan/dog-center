function onloadLanguageSav() {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
   var zlatnirtr=document.querySelector(".zlatnirtr");
   var labrador=document.querySelector(".labrador");
   var dalma=document.querySelector(".dalma");
   var pudla=document.querySelector(".pudla");
   var dzek=document.querySelector(".dzek");
   var haski=document.querySelector(".haski");
   var bul=document.querySelector(".bul");
   var stan=document.querySelectorAll(".stan");
   var deca=document.querySelectorAll(".deca");
   var ostali=document.querySelectorAll(".ostali");
   var vel=document.querySelectorAll(".vel");
   var trening=document.querySelectorAll(".trening");
   var lezi=document.querySelector(".lezi");
   var sapa=document.querySelector(".sapa");
   var ustani=document.querySelector(".ustani");
   var sedi=document.querySelector(".sedi");
   var sledeca=document.querySelectorAll(".sledeca");
   var pocetna=document.querySelector(".pocetna");
   var sed=document.querySelector(".sed");
   var dole=document.querySelector(".dole");
   var cast=document.querySelector(".cast");
   var noge=document.querySelector(".noge");
   var dres=document.querySelector(".dres");
   var dogsav=document.querySelector(".dogsav");
   var najces=document.querySelector(".najces");
   var dress=document.querySelector(".dress");
   var lglang = document.querySelector(".lglang"); 
   var bgcustom = document.querySelector("#background-saveti")
  

    link.forEach(element => {
        console.log(link);
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            updateLanguage(att);
            
            zlatnirtr.innerHTML=data[att].zlatnirtr;
            labrador.innerHTML=data[att].labrador;
            dalma.innerHTML=data[att].dalma;
            pudla.innerHTML=data[att].pudla;
            dzek.innerHTML=data[att].dzek;
            haski.innerHTML=data[att].haski;
            bul.innerHTML=data[att].bul;
            stan.forEach(el=>{
                el.innerHTML=data[att].stan;
            })
            deca.forEach(el=>{
                el.innerHTML=data[att].deca;
            })
            vel.forEach(el=>{
                el.innerHTML=data[att].vel;
            })
            ostali.forEach(el=>{
                el.innerHTML=data[att].ostali;
            })
            trening.forEach(el=>{
                el.innerHTML=data[att].trening;
            })
            sledeca.forEach(el=>{
                el.innerHTML=data[att].sledeca;
            })
            
           
            lezi.innerHTML=data[att].lezi;
            sapa.innerHTML=data[att].sapa;
            ustani.innerHTML=data[att].ustani;
            sedi.innerHTML=data[att].sedi;
           
            pocetna.innerHTML=data[att].pocetna;
            sed.innerHTML=data[att].sed;
            dole.innerHTML=data[att].dole;
            cast.innerHTML=data[att].cast;
            noge.innerHTML=data[att].noge;
            dres.innerHTML=data[att].dres;
            dogsav.innerHTML=data[att].dogsav;
            najces.innerHTML=data[att].najces;
            dress.innerHTML=data[att].dress;
            lglang.innerHTML =data[att].lglang;
            bgcustom.className = data[att].bgcustom
           
            
        })
    });


var  data= {
    "srpski":{
        "dogsav":"<i class=\"fas fa-lightbulb\"></i>Dogly Saveti</a>\
        <button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navbarResponsive\"><span class=\"navbar-toggler-icon\"></span></button>",
        "najces":"Najčešće rase",
        "dress":"<a class=\"nav-link\" href=\"#dresura\">Dresura</a>",
        // "slika54":"<img class=\"img-fluid\" src=\"assets/img/ss.jpg\"/>",
        "zlatnirtr":"Zlatni retriver",
        "labrador":"Labrador",
        "dalma":"Dalmatinac",
        "pudla":"Pudla",
        "dzek":"Dzek Rasel",
        "haski":"Haski",
        "bul":"Engleski Buldog",
        "stan":"Dobri u stanu",
        "deca":"Dobri prema deci",
        "ostali":"Dobri prema ostalim psima",
        "vel":"Velicina",
        "trening":"Laki za treniranje",
        "lezi":"<img class=\"img-fluid\" src=\"assets/img/lezi srb.gif\"/>",
        "sapa":"<img class=\"img-fluid\" src=\"assets/img/sapa srb.gif\"/>",
        "ustani":"<img class=\"img-fluid\" src=\"assets/img/ustani srb.gif\"/>",
        "sedi":"<img class=\"img-fluid\" src=\"assets/img/sedi srb.gif\"/>",
        "sledeca":"Pogledajte sledeću komandu",
        "pocetna":"Nazad na početnu komandu",
        "sed":"Naučite psa da sedne!",
        "dole":"Vreme je za odmor. Lezi dole!",
        "cast":"Svaka čast mali, daj šapu!",
        "noge":"Na noge lagane! Ustani!",
        "dres":"DRESURA",
        "sropt": "<i class=\"flag-icon flag-icon-srb\"></i> Serbian",
        "enopt": "<i class=\"flag-icon flag-icon-usa\"></i> English",
        "lglang" : "Jezik <i class=\"fas fa-language\"></i>",
        "bgcustom" : 'masthead-content background-customsa'
    },
    "english":{
        "dogsav":"<i class=\"fas fa-lightbulb\"></i>Dogly Tips</a>\
        <button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navbarResponsive\"><span class=\"navbar-toggler-icon\"></span></button>",
        "najces":"Most common breeds",
        "dress":"<a class=\"nav-link\" href=\"#dresura\">Training</a>",
       // "slika54":"<img class=\"img-fluid\" src=\"assets/img/Slike - EN/dogly-banner-saveti-en.png\"/>",
        "zlatnirtr":"Golden Retriever",
        "labrador":"Labrador",
        "dalma":"Dalmatian",
        "pudla":"Poodles",
        "dzek":"Jack Russell",
        "haski":"Husky",
        "bul":" English Bulldog",
        "stan":"Good in the apartment",
        "deca":"Good with children",
        "ostali":"Good to other dogs",
        "vel":"Size",
        "trening":"Easy to train",
        "lezi":"<img class=\"img-fluid\" src=\"assets/img/lezi eng.gif\"/>",
        "sapa":"<img class=\"img-fluid\" src=\"assets/img/sapa eng.gif\"/>",
        "ustani":"<img class=\"img-fluid\" src=\"assets/img/ustani eng.gif\"/>",
        "sedi":"<img class=\"img-fluid\" src=\"assets/img/sedi eng.gif\"/>",
        "sledeca":"Look up next command",
        "pocetna":"Look the first command",
        "sed":"Teach your dog to sit!",
        "dole":"Time to rest. Lay down!",
        "cast":"Good boy, Paw!",
        "noge":"Get on your feet! Get up!",
        "dres":"TRAINING",
        "sropt" : "<i class=\"flag-icon flag-icon-srb\"></i> Srpski",
        "enopt": "<i class=\"flag-icon flag-icon-usa\"></i> English",
        "lglang" : "Language <i class=\"fas fa-language\"></i>",
        "bgcustom" : 'masthead-content background-customsa-en'
    }
    
}}
