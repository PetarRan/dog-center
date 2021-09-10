var objekti;
var oglasi;
var korisnici;
var recenzije;
var user;
var indexUser = 3;
var lang;
$(document).ready(function () {
    $("#recenzija").hide();
    $("#objekat").hide();
    $("#oglas").hide();
    $("#user-dugme").removeClass("btn-primary").addClass("btn-white");
    user = localStorage.getItem("tokenLogin");
    console.log(user);
    uzmibrojnePodatke();
    var params = getParams(window.location.url);
    lang = params['lang'];
    $('#obrisi-Oglas-btn').prop('disabled', !$("#inputID2").val());
    uzmiKorisnike();

});

$("#objekat-dugme").click(function () {
    $("#user").hide();
    $("#recenzija").hide();
    $("#oglas").hide();
    $("#objekat").fadeIn();
    $(".btn-custom").removeClass("btn-white").addClass("btn-primary");
    $(this).removeClass("btn-primary").addClass("btn-white");
    $("#resp-search-dugme").attr("disabled", "");
    $("#search-text").attr("disabled", "");
    $("#search-dugme").attr("disabled", "");
});

$("#oglas-dugme").click(function () {
    $("#user").hide();
    $("#objekat").hide();
    $("#recenzija").hide();
    $("#oglas").fadeIn();
    $(".btn-custom").removeClass("btn-white").addClass("btn-primary");
    $(this).removeClass("btn-primary").addClass("btn-white");
    $("#resp-search-dugme").attr("disabled", "");
    $("#search-text").attr("disabled", "");
    $("#search-dugme").attr("disabled", "");
});

$("#recenzija-dugme").click(function () {
    $("#user").hide();
    $("#objekat").hide();
    $("#oglas").hide();
    $("#recenzija").fadeIn();
    $(".btn-custom").removeClass("btn-white").addClass("btn-primary");
    $(this).removeClass("btn-primary").addClass("btn-white");
    $("#resp-search-dugme").attr("disabled", "");
    $("#search-text").attr("disabled", "");
    $("#search-dugme").attr("disabled", "");
});

$("#user-dugme").click(function () {


    $("#recenzija").hide();
    $("#objekat").hide();
    $("#oglas").hide();
    $("#user").fadeIn();
    $(".btn-custom").removeClass("btn-white").addClass("btn-primary");
    $(this).removeClass("btn-primary").addClass("btn-white");
    $("#resp-search-dugme").removeAttr("disabled", "");
    $("#search-text").removeAttr("disabled", "");
    $("#search-dugme").removeAttr("disabled", "");

    $("#userId").show();



});

function uzmibrojnePodatke() {
    console.log(JSON.parse(user)['user']);
    fetch("https://localhost:5001/Admin/CountData/" + JSON.parse(user)['user']).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {
                if (data['status'] == 200) {
                    document.getElementById("adminUsername").innerHTML = "@" + data['username'];
                    // document.getElementById("email").innerHTML = data['email'];
                    $("#brojUser").html(data['usersCount']);
                    $("#brojOglasa").html(data['oglasiCount']);
                    $("#brojObjekata").html(data['objektiCount']);
                    $("#brojRecenzija").html(data['reviewsCount']);

                } else {
                    location.href = "404.html";

                }
            });
        }
        else {
            //location.href  = "404.html";

        }
    });
}
function crtajUsere(index) {

}
//id mesec,nedelja, 3days
$("#3days").click(function () {
    $("#oglasiDiv").empty();
    uzmiPodatkeOOglasima(3);

});
$("#nedelja").click(function () {
    $("#oglasiDiv").empty();
    uzmiPodatkeOOglasima(10);

});
$("#mesec").click(function () {
    $("#oglasiDiv").empty();
    uzmiPodatkeOOglasima(30);

});
$("#5stars").click(function () {
    $("#sectionObjekti").empty();
    uzmiPodatkeOObjektima(5);
});
$("#4stars").click(function () {
    $("#sectionObjekti").empty();
    uzmiPodatkeOObjektima(4);
});
$("#3stars").click(function () {
    $("#sectionObjekti").empty();
    uzmiPodatkeOObjektima(3);
});
$("#2stars").click(function () {
    $("#sectionObjekti").empty();
    uzmiPodatkeOObjektima(2);
});
$("#1stars").click(function () {
    $("#sectionObjekti").empty();
    uzmiPodatkeOObjektima(1);
});
$("#0stars").click(function () {
    $("#sectionObjekti").empty();
    uzmiPodatkeOObjektima(0);
});


function uzmiPodatkeOOglasima(brojDana) {
    console.log("dasc")
    fetch("https://localhost:5001/Admin/GetOglasi/" + brojDana + "/" + JSON.parse(user)['user']).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {

                console.log(data);

                data.forEach(element => {
                    nacrtajOglase(element.value['avatar'], element.value['username'], element.value['datumPostavlajnja'],
                        element.value['naslov'], element.value['opis'], element.value['id'], element.value['userId'], element.value['ime'], element.value['email'], element.value['brojOglasa']
                    );
                });


            });
        }
        else {
            //location.href  = "404.html";

        }
    });
}
function uzmiPodatkeOObjektima(rate) {
    console.log("dasc")
    fetch("https://localhost:5001/Admin/GetObjekti/" + rate).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {

                console.log(data);
                var index = 0;
                data.forEach(element => {
                    index--;
                    crtajLajkObjekat(element.id, element.name, element.sDescription, element.webLink, index);
                    index++;
                });


            });
        }
        else {
            //location.href  = "404.html";

        }
    });
}


//<div class="review-block-title">this was not a nice in buy</div>
function nacrtajOglase(avatar, username, datumPostavlajnja, naslov, opis, id, userId, ime, email, brojOglasa) {
    const revBlok = document.getElementById("oglasiDiv");
    let glavniDiv, d1, d2, d3, rbn;

    glavniDiv = document.createElement("div");
    glavniDiv.classList.add("row", "card", "shadow", "border-left-success", "py-2");
    glavniDiv.id = id + "_oglas";
    glavniDiv.setAttribute("sakriveni", "1");

    d1 = document.createElement("div");
    d1.classList.add("col-sm-3")
    d2 = document.createElement("div");
    d2.classList.add("col-sm-9");
    d1.innerHTML = "<img src=\"assets/img/avatar/" + avatar + "\" class=\"img-fluid rounded-circle\"/> ";
    rbn = document.createElement("div");
    rbn.classList.add("review-block-name");
    d1.appendChild(rbn);
    let a1 = document.createElement("a");
    a1.classList.add("link-dark", "h6", "dugUser");
    a1.classList.add("link-dark", "aElUsername");
    a1.setAttribute("data-toggle", "modal");
    a1.setAttribute("data-target", "#" + userId);
    a1.setAttribute("href", "#");
    a1.addEventListener('click', function () {

        document.getElementById(userId).style.display = "show";
        $("#" + userId).modal('show');
    })
    a1.innerHTML = "@" + username;
    rbn.appendChild(a1);
    let rbd = document.createElement("div");
    rbd.classList.add("review-block-date");
    rbd.innerHTML = datumPostavlajnja;
    d1.appendChild(rbd);

    glavniDiv.appendChild(d1);


    glavniDiv.appendChild(d2);
    d3 = document.createElement("div");
    d2.appendChild(d3);
    d3.classList.add("text-dark", "font-weight-bold", "h5", "mb-0", "mr-3", "h6");
    d3.innerHTML = "ID: " + id + "  |   Naslov: " + naslov;


    d4 = document.createElement("div");
    d4.classList.add("review-block-description");
    d4.innerHTML = opis;
    d2.appendChild(d4);
    revBlok.prepend(glavniDiv, document.createElement("hr"));

    crtajModul(userId, ime, avatar, username, email, brojOglasa);

    popuniModul(userId, ime, avatar, username, email, brojOglasa);


}

$("#inputID2").on('input', function () {
    var ID = $("#inputID2").val();
    $('#obrisi-Oglas-btn').prop('disabled', !ID);
});
$("#obrisi-Oglas-btn").click(function (ev) {
    ev.preventDefault();
    var id = $("#inputID2").val();



    // ukloni taj div ok , a sad izbrisi iz baze
    fetch("https://localhost:5001/Adds/DeleteAdd/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    ).then(res => {
        if (res.status == 200)
            $("#" + id + "_oglas").remove();
            var k =parseInt($("#brojOglasa").html());
                    k=k-1;
                    $("#brojOglasa").html(k);

    });

});
var adr;
var link;
var radio;
var opis;
var broj;
var nasov;

$("#inputID2").on('input', function () {
    adr = $("#Objadresa").val();
    link = $("#Objadresa").val();
    radio = $("radio:checked").val();
    opis = $("#objOpis").val();
    broj = $("#telefonObj").val();
    naslov =$("#naslov").val();

    $('#dodajObjekat').prop('disabled', !(naslov && adr && link && radio && opis && broj));

});
$("#dodajObjekat").click(function (ev) {
    ev.preventDefault();
    dodajObjekat(naslov,adr, link, radio, opis, broj);

})
function dodajObjekat(naslov , adr, link, radio, opis, broj){
    adr = $("#Objadresa").val();
    link = $("#link").val();
    radio = $('input[name="gridRadios"]:checked').val();
    opis = $("#objOpis").val();
    broj = $("#telefonObj").val();
    naslov =$("#naslov").val();
    console.log(naslov , adr, link, radio, opis, broj);
    fetch("https://localhost:5001/Admin/PostService/"+JSON.parse(user)['user'],{
               method:'POST',
               body: JSON.stringify({
                name: naslov,
                sDescription: opis,
                lastUpdate: "csdsd",
                avgRate: 0,
                type : radio,
                webLink: link,
                address: adr,
                phoneNumber: broj,

                   }),
                   headers: {'Content-type': 'application/json',
                             'Accept': 'application/json'
                  }
               }
               ).then(resp => {
                   if (resp.status == 200) {
                    $("#0stars").trigger("click");
                    $("#confirm-oglas").delay(2200).fadeIn().delay(2000).fadeOut();
                    $("#Objadresa").val("");
                    $("#Objadresa").val("");
                    $("radio:checked").val("");
                     $("#objOpis").val("");
                    $("#telefonObj").val("");
                    $("#link").val("");
                    $("#naslov").val("");
                    var k =parseInt($("#brojObjekata").html());
                    k=k+1;
                    $("#brojObjekata").html(k);
                         
                    }
                   else {
                       
                     
                   }  
              });
              return false;
        }
    
       
        


//za obj 
// $("#inputID2").on('input', function() {
//     var ID = $("#inputID2").val();



//     $('#obrisi-Oglas-btn').prop('disabled', !ID);
//   });
// $("#obrisi-Oglas-btn").click(function(ev){
//     ev.preventDefault();


// })

function uzmiKorisnike(){
    fetch("https://localhost:5001/Admin/GetKorisnici").then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {

                console.log(data);

                data.forEach(element => {
                    crtajKorisnika(element.username, element.avatarUrl, element.email, element.id);

                });


            });
        }
        else {
            //location.href  = "404.html";

        }
    });

}
function crtajKorisnika(username, avatarUrl,emal, id){
   var usc =  document.getElementById("tabKor");
   let tr = document.createElement("tr");
   tr.classList.add("search1");
   tr.id = id + "_tr";
   usc.appendChild(tr);
   let td1 = document.createElement("td");
   td1.classList.add("text-wrap","m-4","search-obj") ;
    tr.appendChild(td1);

   let a1 = document.createElement("a");
   
  
   a1.innerHTML= "@"+ username;
   
  
   td1.appendChild(a1);

   let td2 = document.createElement("td");
   td2.classList.add("text-wrap") ;
    tr.appendChild(td2);

   let a2 = document.createElement("a");
   a2.classList.add("btn","btn-info");
   a2.setAttribute("data-toggle","modal");
   a2.setAttribute("href","#");
   a2.setAttribute("type","button");
   a2.setAttribute("data-target","#confirmationModal");
  a2.innerHTML = "<i\
  class=\"fas fa-trash\"></i>";
    a2.onclick = (ev) =>{
        tr.classList.add("kliknut");
    }
   td2.appendChild(a2);
   
}
$("#Brisanje").click(function(){
  
    var k = document.querySelector(".kliknut").id;
    var pom = k.split('_');
    
    console.log("ascssdvs");
    

    fetch("https://localhost:5001/Admin/DeleteUser/" + parseInt(pom[0]), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => {
                if (res.status == 200)

                $("#" + pom[0] + "_tr").remove();
                 $("#otkaziBrisanje").click()

            });

            return false;
})
$("#otkaziBrisanje").click(function(){
    $(".kliknut").removeClass("kliknut");
})


  
