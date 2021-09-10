function onloadLanguageFuter()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');

    var usl=document.querySelector(".usl");
    var sav=document.querySelector(".sav");
    var ogl=document.querySelector(".ogl");
    var obj=document.querySelector(".obj");
    var kvi=document.querySelector(".kvi");
    var onam=document.querySelector(".onam");
    var konta=document.querySelector(".konta");
    var opis1=document.querySelector(".opis1");
    
    link.forEach(element => {
        
        element.addEventListener('click', ()=>{
            
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
        
            usl.innerHTML=data[att].usl;
            sav.innerHTML=data[att].sav;
            ogl.innerHTML=data[att].ogl;
            obj.innerHTML=data[att].obj;
            kvi.innerHTML=data[att].kvi;
            onam.innerHTML=data[att].onam;
            opis1.innerHTML=data[att].opis1;
            konta.innerHTML=data[att].konta;
            
        })
    });
    
    var  data= {
        "srpski":{
        
            "usl":"Usluge",
            "sav":"Saveti",
            "ogl":"Oglasi",
            "obj":"Objekti",
            "kvi":"Quiz",
            "onam":"O nama",
            "konta":"Kontaktirajte nas",
            "opis1":"Idealno mesto za vlasnike pasa koje kombinuje svakodnevne potrebe vašeg najboljeg prijatelja sa progresivnom web aplikacijom u modernom stilu - user-friendly interfjes, čini od korišćenja naše aplikacije jedan potpuni užitak!",
            
            
        },
        "english":{
        
            
            "usl":"Services",
            "sav":"Tips",
            "ogl":"Ads",
            "obj":"Objects",
            "kvi":"Quiz",
            "onam":"About us",
            "konta":"Contact us",
            "opis1":"An ideal place for dog owners that combines the daily needs of your best friend with a progressive web application in a modern style - user-friendly interfaces, makes using our application a complete pleasure!",


           
        }
    }
    }