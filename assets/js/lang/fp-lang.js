function onloadLanguageFP()  {
    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');
    var rgl = document.querySelector(".findlang");
    var logl = document.querySelector(".infbemail");
    var serl = document.querySelector(".btnlang");
  
    
    link.forEach(element => {
        console.log(link);
        element.addEventListener('click', ()=>{
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");
            
            element.classList.add('activee');
            const att = element.getAttribute("language");
            console.log(att);
            rgl.innerHTML = data[att].findlang;
            logl.innerHTML = data[att].infbemail;
            serl.innerHTML= data[att].btnlang;
           
        })
    });
    
    var  data= {
        "srpski":{
        
            "findlang":"Hajde da pronađemo Vaš nalog!",
            "infbemail":"Molimo Vas, unesite validnu e-mail adresu!",
            "btnlang":"Pošalji email za resetovanje lozinke"
        },
        "english":{
        
            "findlang":"Let's find your account!",
            "infbemail":"Please enter a valid e-mail address",
            "btnlang":"Send e-mail for password reset!"
        }
    }
    }