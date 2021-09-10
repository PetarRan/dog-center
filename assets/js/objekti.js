var tok;
$(document).ready(function () {
    onloadLanguageObj();
    onloadLanguageFuter();
     onloadLanguageIU();
});

function crtajObjekat(id, tip, name, webLink, rate, address, phoNeNumb) {
    var lang = document.querySelector(".langWrapli.activee").getAttribute("language");
    var Recenzije = "Recenzije";
    var komi = "Komentari & ";
    var visitup = "Posetite nas ";
    var WebAddress = "Web adresa ";
    var msg2 ="Objekat uspesno sacuvan";
    var msg1="Objekat uklonjen sa liste sacuvanih"
    if (lang == "english") {
        Recenzije = "Reviews";
        komi = "Coments & ";
        visitup = "Visit Us ";
        WebAddress = "Web address ";
        msg2 ="Service saved";
     msg1="Service removed from liked services list "
    }

    const lista = document.getElementById("objekti-list");
    let objli = document.createElement("li");
    lista.appendChild(objli);
    objli.classList.add(tip, "list-item", "p-3");
    objli.id = id + "_obj";
    let divh3 = document.createElement("div");
    divh3.classList.add("col","d-flex","tajDiv");
   
    let h2 = document.createElement("h2");
    
    var ikona = odrediIkonicu(tip);

    

    let buttLike =  document.createElement("button");
    
    buttLike.id = "like_"+id;
    divh3.appendChild(buttLike);
    divh3.appendChild(h2);
    buttLike.setAttribute("data-bs-target","#favorites-confirm");
    buttLike.setAttribute("data-bs-toggle","modal");
    buttLike.setAttribute("type","button");
    buttLike.onclick = (ev) => {
        tok = localStorage.getItem("tokenLogin");
        
        if(tok==null) location.href = "404.html";
        if(buttLike.firstChild.classList.contains("liked")){
            buttLike.innerHTML =   "<i  class='unliked fas fa-heart' style='font-size:40.8px;color:red'></i>" ;
            $("#textmodal").html (msg2+" <i class=\"fas fa-check\">");
        }
        else{
            buttLike.innerHTML =   "<i  class='liked far fa-heart' style='font-size:40.8px;color:red'></i>" ;
            $("#textmodal").html (msg1+" <i class=\"fas fa-check\">");
        }
        fetch("https://localhost:5001/User/PostLikedServices/ "+id+"/"+ JSON.parse(tok)['user'] , {
            method: 'POST',
            body: JSON.stringify({
            

                    userId: 0,
                    dogServiceId: id
                  
    
            }),
            headers: {
                'Content-type': 'application/json',
                //'Accept': 'application/json'
            }
        }
        ).then(resp => {
            if (resp.status == 200) {
               console.log("sveok");
                //nesto za uspesno
                //moze neki popup uspesno ste promenili lozinku na fade in fade out 
            }
            else {
                //da se doda da nije uspelo nesrtoo 
            }
        });
      
        
    
 
     };
    buttLike.style.height = "40.8px";
    buttLike.classList.add("btn", "btn-link", "rounded", "rounded-circle" ,"confirm-oglas-btn","butLike");
    buttLike.innerHTML = "<i  class='liked far fa-heart' style='font-size:40.8px;color:red'></i>" ;
    //h2.appendChild(buttLike);
    h2.innerHTML =  name + "<i class=\"" + ikona + " m-2 text-primary\" data-bss-hover-animate=\"pulse\"></i>";

    objli.appendChild(divh3);
    let d1 = document.createElement("div");
    d1.classList.add("row", "mb-3");
  
    d1.innerHTML = "<div class=\"col-8\"> \
    <p class=\"text-monospace location-card\"><a class=\"h6\">" + address + " <i class=\"fas fa-map-marker-alt\"></i></a></br>\
    <a class=\"h5 link-primary\" href="+ webLink + ">" + WebAddress + "<i class=\"fas fa-link\"></i></a>\
    </p></div> <div class=\"col-2 icon-oglas\"></div>";
    var prosek = rate.toFixed(1);
    //Math.round(rate);
    rate = rate.toFixed(0);
    objli.appendChild(d1);
    let d2 = document.createElement("div");
    d2.classList.add("row", "mb-3");
    objli.appendChild(d2);
    let d21 = document.createElement("div");
    d21.classList.add("col-8",);
    d2.appendChild(d21);
    let p21 = document.createElement("p");
    d21.appendChild(p21);
    let rateSpan = document.createElement("span");

    p21.appendChild(rateSpan);
    rateSpan.id = id + "_rate";
    rateSpan.classList.add("icons", "border", "border-rounded", "p-2");
    crtajOcenu(rateSpan, rate, prosek);
    let d22 = document.createElement("div");
    d22.classList.add("col-4");
    d22.innerHTML = "<p class=\"text-end text-muted\"><a class=\"border rounded p-2 h6\">" + phoNeNumb + "</a></p>";
    d2.appendChild(d22);
    let d3 = document.createElement("div");
    d3.classList.add("col", "d-flex", "flex-row-reverse");
    objli.appendChild(d3);

    let d4 = document.createElement("div");
    d4.classList.add("p-1");
    d3.appendChild(d4);
    let butt = document.createElement("button");
    butt.classList.add("btn", "btn-dark", "button-recenzija");
    butt.setAttribute("type", "button");
    //butt.id = id;
    butt.innerHTML = "<i class=\"fas fa-plus\"></i>";
    d4.appendChild(butt);
    let r1 = document.createElement("div");
    r1.classList.add("recenzije" + id, "container", "bg-light", "pb-2", "pt-2", "rounded");
    r1.setAttribute("style", "display: none");

    objli.appendChild(r1);

    butt.onclick = (ev) => {
       

        if ($(".recenzije" + id).is(":visible")) {
            $(".recenzije" + id).delay(100).fadeOut();
            butt.innerHTML = '<i class="fas fa-plus"></i>';
     
        }
        else {
            $(".recenzije" + id).delay(100).fadeIn();
            butt.innerHTML = '<i class="fas fa-times"></i>';
          
        }
    };
    let d5 = document.createElement("div"); d5.classList.add("p-2");
    d5.innerHTML = "<span class=\"p-2 text-muted h4 text-end\">" + Recenzije + "</span>";
    d3.appendChild(d5);



    let hr1 = document.createElement("h2");
    hr1.innerHTML = komi + Recenzije;

    let dr1 = document.createElement("div");
    dr1.classList.add("forma-nova-recenzija" + id);
    dr1.onclick = (ev) => {

        $(".forma-nova-recenzija" + id + ".container").fadeIn();
    }
    r1.appendChild(hr1);
    r1.appendChild(dr1);

    let r2 = document.createElement("div");
    r2.classList.add("comments", "section", "border", "rounded", "mt-5");
    r1.appendChild(r2);
    let r3 = document.createElement("div");
    r3.classList.add("row");
    r2.appendChild(r3);
    let r4 = document.createElement("div");
    r4.classList.add("col-sm-12");
    r3.appendChild(r4);
    let r5 = document.createElement("div");
    r5.classList.add("review-block");

    r5.id = id + "_revBlock"; /////////////////////id bloka za review
    r4.appendChild(r5);


}
function odrediIkonicu(tip) {
    switch (tip) {
        case "filter_veterinar": return "far fa-hospital";
        //break;

        case "filter_petshop": return "fas fa-shopping-basket";
        //break;

        case "filter_frizer": return "fas fa-cut";
        //break;

        case "filter_hotel": return "fas fa-hotel";
        //break;
        default: return "hotel";

    }
}
function crtajOcenu(rateSpan, rate, prosek) {
    let iel;
    for (var i = 1; i < 6; i++) {
        iel = document.createElement("i");
        if (rate >= i) {
            iel.classList.add("fas");
        }
        else {
            iel.classList.add("far");
        }
        iel.classList.add("fa-star");
        rateSpan.appendChild(iel);
    }
    rateSpan.innerHTML += "&nbsp; <strong>" + prosek + "</strong>";
}

///////////dodaj da se pokazuju samo po 3 i da ima index 

function nacrtajRecenzije(avatar, username, datumPostavlajnja, opis, rate, id,userId, ime,email,brojOglasa) {
    const revBlok = document.getElementById(id + "_revBlock");
    let glavniDiv, d1, d2, d3,rbn;

    glavniDiv = document.createElement("div");
    glavniDiv.classList.add("row");

    glavniDiv.setAttribute("sakriveni", "1");

    d1 = document.createElement("div");
    d1.classList.add("col-sm-3")
    d2 = document.createElement("div");
    d2.classList.add("col-sm-9");
    d1.innerHTML = "<img src=\"assets/img/avatar/" + avatar + "\" class=\"img-fluid rounded-circle\"/> ";
    rbn= document.createElement("div");
    rbn.classList.add("review-block-name");
    d1.appendChild(rbn);
    let a1= document.createElement("a");
    a1.classList.add("text-monospace", "link-dark" ,"h6" ,"dugUser");
    a1.classList.add("link-dark","aElUsername");
     a1.setAttribute("data-toggle", "modal");
     a1.setAttribute("data-target","#"+userId);
     a1.setAttribute("href","#");
     a1.addEventListener('click', function(){
        
        document.getElementById(userId).style.display = "show";
        $("#"+userId).modal('show'); 
    })
    a1.innerHTML = "@"+ username;
    rbn.appendChild(a1);
    let rbd= document.createElement("div");
    rbd.classList.add("review-block-date");
    rbd.innerHTML = datumPostavlajnja + "<br/>";
    d1.appendChild(rbd);
    
    glavniDiv.appendChild(d1);


    glavniDiv.appendChild(d2);
    d3 = document.createElement("div");
    d2.appendChild(d3);
    d3.classList.add("review-block-rate");
    crtajOcenuReview(d3, rate);


    d4 = document.createElement("div");
    d4.classList.add("review-block-description", "p-3");
    d4.innerHTML = opis;
    d2.appendChild(d4);
    revBlok.prepend(glavniDiv, document.createElement("hr"));

    crtajModul(userId,ime,avatar,username,email,brojOglasa);
  
    popuniModul(userId,ime,avatar,username,email, brojOglasa);


}
function crtajOcenuReview(rateSpan, rate) {
    let iel;
    for (var i = 1; i < 6; i++) {
        iel = document.createElement("button");
        iel.classList.add("btn", "btn-light", "btn-xs", "icons");
        iel.setAttribute("type", "button");
        iel.setAttribute("aria-label", "Left Align");

        if (rate >= i) {
            iel.innerHTML = "<i class=\"fas fa-star\"></i>";
        }
        else {
            iel.innerHTML = "<i class=\"far fa-star\"></i>";
        }

        rateSpan.appendChild(iel);
    }

}




