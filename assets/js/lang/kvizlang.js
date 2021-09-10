function onloadLanguageKviz()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');

    var naziv = document.querySelector(".naziv");
    var zivis=document.querySelector(".zivis");
    var ku=document.querySelector(".ku");
    var st=document.querySelector(".st");
    var akt=document.querySelector(".akt");
    var vrces=document.querySelector(".vrces");
    var ces=document.querySelector(".ces");
    var ret=document.querySelector(".ret");
    var vrret=document.querySelector(".vrret");
    var dec=document.querySelector(".dec");
    var y=document.querySelector(".y");
    var n=document.querySelector(".n");
    var jos=document.querySelector(".jos");
    var y1=document.querySelector(".y1");
    var y2=document.querySelector(".y2");
    var n2=document.querySelector(".n2");
    var slvr=document.querySelector(".slvr");
    var his=document.querySelector(".his");
    var netf=document.querySelector(".netf");
    var baz=document.querySelector(".baz");
    var pret=document.querySelector(".pret");

    link.forEach(element => {
        console.log(link);
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");

            //rgl.innerHTML = data[att].findlang;
            naziv.innerHTML=data[att].naziv;
            ku.innerHTML=data[att].ku;
            st.innerHTML=data[att].st;
            zivis.innerHTML=data[att].zivis;
            akt.innerHTML=data[att].akt;
            vrces.innerHTML=data[att].vrces;
            ces.innerHTML=data[att].ces;
            ret.innerHTML=data[att].ret;
            vrret.innerHTML=data[att].vrret;
            dec.innerHTML=data[att].dec;
            y.innerHTML=data[att].y;
            n.innerHTML=data[att].n;
            jos.innerHTML=data[att].jos;
            y1.innerHTML=data[att].y1;
            y2.innerHTML=data[att].y2;
            n2.innerHTML=data[att].n2;
            slvr.innerHTML=data[att].slvr;
            his.innerHTML=data[att].his;
            netf.innerHTML=data[att].netf;
            baz.innerHTML=data[att].baz;
            pret.innerHTML=data[att].pret;
           
           
        })
    });
    
    var  data= {
        "srpski":{
            "naziv":"Dogly quiz - pas za tebe!",
            "zivis":"Da li zivite u kući ili stanu?",
            "ku":"Kuca",
            "st":"Stan",
            "akt":"Koliko ste aktivni?",
            "vrces":"Vrlo Cesto",
            "ces":"Cesto",
            "ret":"Retko",
            "vrret":"Vrlo Retko",
            "dec":"Da li imate decu?",
            "y":"Da",
            "n":"Ne",
            "jos":"Da li imate jos nekog kucnog ljubimca?",
            "y1":"Da, jos jednog.",
            "y2":"Da, vise od jednog.",
            "n2":"Ne",
            "slvr":"Gde provodite slobodno vreme?",
            "his":"Hiking i Sport",
            "netf":"Kod Kuce uz Netflix",
            "baz":"Na Bazenu ili Moru",
            "pret":"Pretraga u toku . . ."


            
        },
        "english":{
        
            "naziv":"Dogly quiz - dog for you!",
            "zivis":"Where do you live?",
            "ku":"Flat",
            "st":"House",
            "akt":"How active are you?",
            "vrces":"Very often",
            "ces":"Often",
            "ret":"Rarely",
            "vrret":"Very rarely",
            "dec":"Do you have kids",
            "y":"Yes",
            "n":"No",
            "jos":"Do you have another pet?",
            "y1":"Yes, another one.",
            "y2":"Yes, more then one.",
            "n2":"No",
            "slvr":"Where do you spend your free time?",
            "his":"Hiking and Sports",
            "netf":"At Home with Netflix",
            "baz":"At the Pool or the Sea",
            "pret":"Search in progress . . ."


        }
    }
    }