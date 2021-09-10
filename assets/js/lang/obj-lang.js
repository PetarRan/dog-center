function onloadLanguageObj()  {
    var naslov1=document.querySelector(".naslov1");
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    var ve=document.querySelectorAll(".ve");
    var pe=document.querySelectorAll(".pe");
    var ho=document.querySelectorAll(".ho");
    var fri=document.querySelectorAll(".fri");
    var friop=document.querySelector(".friop");
    var veop=document.querySelector(".veop");
    var hoop=document.querySelector(".hoop");
    var peop=document.querySelector(".peop");
    var dugmence=document.getElementById("search-button");
    var svena=document.querySelector(".svena");
    var banerveliki1=document.querySelector(".banerveliki1");
    var what1=document.querySelector(".what1");
    var peokolina=document.querySelector(".peokolina");

  
    
    link.forEach(element => {
        
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
           
            naslov1.innerHTML=data[att].naslov1;
            
            
            fri.forEach(el=>{
                el.innerHTML=data[att].fri;
            })
            ho.forEach(el=>{
                el.innerHTML=data[att].ho;
            })
            ve.forEach(el=>{
                el.innerHTML=data[att].ve;
            })
            pe.forEach(el=>{
                el.innerHTML=data[att].pe;
            })
            friop.innerHTML=data[att].friop;
            veop.innerHTML=data[att].veop;
            hoop.innerHTML=data[att].hoop;
            peop.innerHTML=data[att].peop;
            dugmence.value=data[att].dugmence;
            svena.innerHTML=data[att].svena;
            banerveliki1.innerHTML=data[att].banerveliki1;
            what1.innerHTML=data[att].what1;
            peokolina.innerHTML=data[att].peokolina;
          

       
        })
    });
    
    var  data= {
        "srpski":{
            "naslov1":"Pregledajte lokalne objekte i servise za vas i vaseg psa!",
            "ve":"Veterinar",
            "pe":"PetShop",
            "ho":"Hotel za Pse",
            "fri":"Frizer za Pse",
            "svena":"Sve na jednom mestu!",
            "what1":"Znate šta tražite?",
            "veop":"Selekcija profesionalnih veterinarskih ordinacija u vasoj okolini!",
            "peop":"Sve za vaseg psa i njegove potrebe!",
            "hoop":"Na putu ste? Pretrazite najbolje hotele za pse u vasem gradu!",
            "friop":"<p class=\"lead mb-0\">Neka vas pas uvek izgleda cisto i sredjeno! #fresh</p>",
            "peokolina":"<h1 class=\"mb-2 p-2\">Pet-Friendly Objekti na lokaciji <code class=\"h1\">Nis</code> <i id='location-marker' class=\"fas fa-map-marker\"></i></h1>",
            "dugmence":"Pretrazi...",
            "banerveliki1":"<img class=\"card-img-top w-100 d-block\" src=\"assets/img/banner-search.png\">"

            
        },
        "english":{
            "naslov1":"Browse local facilities and services for you and your dog!",
            "ve":"Veterinarian",
            "pe":"PetShop",
            "ho":"Hotel for Dogs",
            "fri":"Grooming salon",
            "svena":"All in one place",
            "what1":"Do you know what are you looking for?",
            "veop":"Selection of professional veterinary surgeries in your area!",
            "peop":"Everything for your dog and his needs!",
            "hoop":"Are you on your way? Search the best dog hotels in your city!",
            "friop":"<p class=\"lead mb-0\">Let your dog always look clean and nice! #fresh</p>",
            "banerveliki1":"<img class=\"card-img-top w-100 d-block\" src=\"assets/img/Slike - EN/banner-search-en.png\">",
            "dugmence":"Search...",
            "peokolina":"<h1 class=\"mb-2 p-2\">Pet-Friendly Places in <code class=\"h1\">Nis</code> <i id='location-marker' class=\"fas fa-map-marker\"></i></h1>"
            
        }
    }
    }