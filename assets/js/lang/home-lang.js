function onloadLanguage()  {
var langEl = document.querySelector('.langWrap');
var link = document.querySelectorAll('.langWrapli');

var featurelang= document.querySelector(".featurelang");
var fdesclang = document.querySelector(".fdesclang");
var savdesclang = document.querySelector(".savdesclang");
var adddesclang = document.querySelector(".adddesclang");
var savlangdva = document.querySelector(".savlangdva");
var addlangdva = document.querySelector(".addlangdva");
var objlangdva = document.querySelector(".objlangdva");
var objdesclang = document.querySelector(".objdesclang");
var reviewlang = document.querySelector(".reviewlang");
var reviewdesclang= document.querySelector(".reviewdesclang");
var prvaslika = document.querySelector(".prvaslika");
var drugaslika=document.querySelector(".drugaslika");
var trecaslika=document.querySelector(".trecaslika");
var cetvrtaslika=document.querySelector(".cetvrtaslika");
var mash = document.querySelector(".mas");
var daa = document.querySelector(".daa");
var nee = document.querySelector(".nee");
var vremekviz = document.querySelector(".vremekviz");




link.forEach(element => {
    
    element.addEventListener('click', ()=>{
        
        langEl.querySelector('.activee').classList.remove("activee");
        
        element.classList.add('activee');
        const att = element.getAttribute("language");
        if(att=="srpski")
        {
            if(mash.classList.contains("background-customen"))
                mash.classList.remove("background-customen");
            mash.classList.add("background-custom");
        }
        else {
            if(mash.classList.contains("background-custom"))
            mash.classList.remove("background-custom");
            mash.classList.add("background-customen");
        }
        
       
        savlangdva.innerHTML = data[att].savlangdva;
        featurelang.innerHTML = data[att].featurelang;
        fdesclang.innerHTML = data[att].fdesclang; 
        savdesclang.innerHTML = data[att].savdesclang;
        adddesclang.innerHTML =data[att].adddesclang;
        addlangdva.innerHTML = data[att].addlangdva;
        objlangdva.innerHTML = data[att].objlangdva;
        objdesclang.innerHTML = data[att].objdesclang;
        reviewlang.innerHTML = data[att].reviewlang;
        reviewdesclang.innerHTML =data[att].reviewdesclang;
        prvaslika.innerHTML = data[att].prvaslika;
        drugaslika.innerHTML = data[att].drugaslika;
        trecaslika.innerHTML = data[att].trecaslika;
        cetvrtaslika.innerHTML = data[att].cetvrtaslika;
        vremekviz.innerHTML = data[att].vremekviz;
        daa.innerHTML = data[att].daa;
        nee.innerHTML = data[att].nee;
        
        
    })
});

var  data= {
    "srpski":{
        "vremekviz":"Vreme je za kviz!",
        "nee":"Ne hvala",
        "daa":"Pokreni Quiz",
        "featurelang": "Odlike",
        "fdesclang": "Dogly pokriva svaku potrebu vaseg psa i nudi najbolje usluge i preporuke. Isprobajte neke od nasih usluga!",
        "savdesclang":"Pronadjite sve potrebne savete od nabavke vaseg idealnog psa do same dresure.",
        "adddesclang":"Prijavite se i pogledajte sve moguce oglase drugih vlasnika. Setanje, sisanje, usvajanje, prodaja... ",
        "savlangdva": "Saveti",
        "addlangdva": "Oglasi",
        "objlangdva": "Objekti",
        "objdesclang": "Svi dostupni objekti u Nisu. Veterinari, PetShopovi, Hoteli za pse i Grooming saloni",
        "reviewlang": "Ostavite recenziju servisa",
        "reviewdesclang": "Nase musterija nas vole! Procitajte ispod sta imaju da kazu za nas.",
        "prvaslika": "<img class=\"img-size\" src=\"assets/img/banner1.png\">",
        "drugaslika":"<img class=\"img-size\" src=\"assets/img/banner2.png\">",
        "trecaslika":"<img class=\"img-size\" src=\"assets/img/banner3.png\">",
        "cetvrtaslika":"<img class=\"img-size\" src=\"assets/img/banner4.png\">"
        
    },
    "english":{
        "vremekviz":"Time for quiz!",
        "nee":"No thank you",
        "daa":"Start Quiz",
        "featurelang": "Features",
        "fdesclang": "Dogly covers every need of your dog and offers the best services and recommendations. Try some of our services!",
        "savdesclang":"Find all the tips you need from getting your ideal dog to training.",
        "adddesclang":"Sign in and see all possible ads from other owners. Walking, grooming, adopting, selling ...",
        "savlangdva": "Tips",
        "addlangdva": "Advertisements",
        "objlangdva": "Locales",
        "objdesclang": "All available facilities in Nis. Veterinarians, PetShops, Hotels for dogs and Grooming salons",
        "reviewlang": "Leave a review",
        "reviewdesclang": "Our customers love us! Read what they have to say below.",
        "prvaslika": "<img class=\"img-size\" src=\"assets/img/Slike - EN/banner2-en.png\">",
        "drugaslika":"<img class=\"img-size\" src=\"assets/img/Slike - EN/banner2-en.png\">",
        "trecaslika":"<img class=\"img-size\" src=\"assets/img/Slike - EN/banner3-en.png\">",
        "cetvrtaslika":"<img class=\"img-size\" src=\"assets/img/Slike - EN/banner4-en.png\">"
        

    }
}
}