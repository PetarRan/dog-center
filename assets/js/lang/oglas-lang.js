function onloadLanguageOglas()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    var ogl=document.querySelector(".ogl");
    var ti=document.querySelector(".ti");
    var doda=document.querySelector(".doda");
    var set=document.querySelector(".set");
    var sis=document.querySelector(".sis");
    var usv=document.querySelector(".usv");
    var cuv=document.querySelector(".cuv");
    var par=document.querySelector(".par");
    var pro=document.querySelector(".pro");
    var dre=document.querySelector(".dre");
    var hit=document.querySelector(".hit");
    var ti1=document.querySelector(".ti1");
    var nov=document.querySelector(".nov");
    var nasl=document.querySelector(".nasl");
    var hit1=document.querySelector(".hit1");
    var y=document.querySelector(".y");
    var n=document.querySelector(".n");
    var op=document.querySelector(".op");
    var ogpos=document.querySelector(".ogpos");
    var ogpos1=document.querySelector(".ogpos1");

  
    
    link.forEach(element => {
        
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            ogl.innerHTML=data[att].ogl;
            ti.innerHTML=data[att].ti;
            doda.innerHTML=data[att].doda;
            set.innerHTML=data[att].set;
            sis.innerHTML=data[att].sis;
            usv.innerHTML=data[att].usv;
            cuv.innerHTML=data[att].cuv;
            par.innerHTML=data[att].par;
            pro.innerHTML=data[att].pro;
            dre.innerHTML=data[att].dre;
            hit.innerHTML=data[att].hit;
            ti1.innerHTML=data[att].ti1;
            nov.innerHTML=data[att].nov;
            nasl.innerHTML=data[att].nasl;
            hit1.innerHTML=data[att].hit1;
            y.innerHTML=data[att].y;
            n.innerHTML=data[att].n;
            op.innerHTML=data[att].op;
            ogpos.innerHTML=data[att].ogpos;
            ogpos1.innerHTML=data[att].ogpos1;

       
        })
    });
    
    var  data= {
        "srpski":{
            "ogl":"Oglasi u vasoj okolini!",
            "ti":"Odaberite tip oglasa!",
            "doda":"Dodaj oglas",
            "set":"Šetanje",
            "sis":"Šišanje",
            "usv":"Usvajanje",
            "cuv":"Čuvanje",
            "par":"Parenje",
            "pro":"Prodaja",
            "dre":"Dresura",
            "hit":"Hitno!",
            "ti1":"Tip oglasa:",
            "nov":"Novi oglas",
            "nasl":"* Naslov Oglasa:",
            "hit1":"Hitan Oglas?",
            "y":"Da",
            "n":"Ne",
            "op":"Opis:",
            "doni":"Doniraj",
            "ogpos":"Oglas se postavlja...",
            "ogpos1":"Oglas uspesno postavljen!",
            
        },
        "english":{
            "ogl":"Ads in your area!",
            "ti":"Choose an ad type!",
            "doda":"Add an ad",
            "set":"Dog Walking",
            "sis":"Grooming",
            "usv":"Adoption",
            "cuv":"Babysitting",
            "par":"Breeding",
            "pro":"Sale",
            "dre":"Training",
            "hit":"Urgent!",
            "ti1":"Ad type:",
            "nov":"New ad",
            "nasl":"* Ad Title:",
            "hit1":"Urgent Ad?",
            "y":"Yes",
            "n":"No",
            "op":"Description:",
            "doni":"Donate",
            "ogpos":"The ad is placed...",
            "ogpos1":"Ad successfully placed!",
            
        }
    }
    }