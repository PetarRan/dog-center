var user;
var mojiOglasi;
var lajkovaniservisi;
var objekti;
$(document).ready(function () {
    onLoadProfile(mojiOglasi);
    $("#izmeni-profil").hide();
    $("#info-change").hide();
    $("#promeni-sifru").hide();
    $("#sacuvano-objekti").hide();
    $("#moji-oglasi-btn").css("border-bottom", "solid");
    $("#promeni-avatar").hide();
    $("#changed-avatar").hide();
    user = JSON.parse(localStorage.getItem("tokenLogin"))['user'];

    
    $("#ucitajjosOglasa").hide();
    $("#ucitajjosObj").hide();
    //$("#moji-oglasi-btn").click(); 
    //iscrtajOglase();
   // $("#ucitajjosOglasa").click();


});

$("#moji-oglasi-btn").click(function () {
    if ($("#moji-oglasi:visible")) {
        $("#sacuvano-objekti").fadeOut();
        $("#moji-oglasi").fadeIn();
    }

    $("#ucitajjosOglasa").fadeIn();
    $("#moji-oglasi-btn").css("border-bottom", "solid");
    $("#sacuvani-objekti-btn").css("border-bottom", "none");
    if (!$("#nacrtanoId").hasClass("nacrtano"))
        iscrtajOglase();

});
$("#ucitajjosOglasa").click(function () {
    var sakriveniOglasi = $("div.card[oglasAttr=1]:hidden");
    var k = 3;
    if (sakriveniOglasi.length < 3)
        k = sakriveniOglasi.length;
    for (var i = 0; i < k; i++) {
        $("#" + sakriveniOglasi[i].id).fadeIn();
        if (i==0)
            $("#refOgl").attr("href", "#" + sakriveniOglasi[i].id);

    }

});
$("#ucitajjosObj").click(function () {
    var sakriveniObj = $("div.card[objAttr=1]:hidden");
    var k = 3;
    if (sakriveniObj.length < 3)
        k = sakriveniObj.length;
    for (var i = 0; i < k; i++) {
        $("#" + sakriveniObj[i].id).fadeIn();
            if(i==0)
            $("#refObj").attr("href", "#" + sakriveniObj[i].id);

    }

});

$("#sacuvani-objekti-btn").click(function () {
    if ($("#nacrtanoId").hasClass("nacrtano")) {
        const sakriveniOglasi = $("div.card[oglasAttr=1]");

        sakriveniOglasi.each(function () {
            $(this).hide();
        });
    }
    if (!$("#nacrtaniObjId").hasClass("nacrtano"))
        iscrtajObjekte();

    if ($("#sacuvano-objekti:visible")) {
        $("#moji-oglasi").fadeOut();
        $("#sacuvano-objekti").fadeIn();
    }
    $("#ucitajjosObj").fadeIn();
    $("#sacuvani-objekti-btn").css("border-bottom", "solid");
    $("#moji-oglasi-btn").css("border-bottom", "none");


});

$("#promeni-sifru-btn").click(function () {

    if ($("#izmeni-profil:visible")) {
        $("#izmeni-profil").fadeOut();
    }
    $("#promeni-sifru").fadeIn();

    return false;
});

$("#izmeni-profil-btn").click(function () {
    if ($("#promeni-sifru:visible")) {
        $("#promeni-sifru").fadeOut();
    }
    $("#izmeni-profil").fadeIn();
    return false;
});

$("#cancel-izmeni-profil").click(function () {
    $("#izmeni-profil").fadeOut();
    return false;
});

$("#cancel-promeni-sifru").click(function () {
    $("#promeni-sifru").fadeOut();
    return false;
});

$(".avatar").click(function () {
    $("#promeni-avatar").fadeIn();
    var url = $(this).children().attr("src");
    //console.log(url);
    $("#my-avatar").attr("src", url);

});

$("#promeni-avatar").click(function () {
    var url = $("#my-avatar").attr("src");
    var slika = url.split("/");
   // console.log(slika);
    var lang = document.querySelector(".langWrapli.activee").getAttribute("language");
    //slika[3]
    fetch("https://localhost:5001/User/UpdateUsersAvatar/", {
        method: 'PUT',
        body: JSON.stringify({
            firstName: "d",
            lastName: "d",
            username: user,
            password: "h",
            email: "f@hhj.com",
            role: "U",
            avatarUrl: slika[6],
            language: lang

        }),
        headers: {
            'Content-type': 'application/json',
            //'Accept': 'application/json'
        }
    }
    ).then(resp => {
        if (resp.status == 200) {
            $("#promeni-avatar").fadeOut();
            $("#changed-avatar").fadeIn().delay(1000).fadeOut();
            //moze neki popup uspesno ste promenili lozinku na fade in fade out 
        }
        else {
            //da se doda da nije uspelo nesrtoo 
        }
    });





});

$("#potvrdiPromenuSifre").click(function () {

    var stara;
    var nova;
    var nova2;
    var lang;
    stara = $("#oldpassword").val();
    nova = $("#newPassword").val();
    nova2 = $("#repeatPassword").val();
    lang = document.querySelector(".langWrapli.activee").getAttribute("language");
    console.log(lang);
    if (nova != nova2) {
        //treba da se doda nesto da nije ista sifra 
        // moze isto neki tako fadein, fade out 

    }
    else {
        fetch("https://localhost:5001/User/UpdateUsersPass/" + nova, {
            method: 'PUT',
            body: JSON.stringify({
                firstName: "d",
                lastName: "d",
                username: user,
                password: stara,
                email: "f@hhj.com",
                role: "U",
                avatarUrl: "d",
                language: lang

            }),
            headers: {
                'Content-type': 'application/json',
                //'Accept': 'application/json'
            }
        }
        ).then(resp => {
            if (resp.status == 200) {
                $("#promeni-sifru").fadeOut();
                //moze neki popup uspesno ste promenili lozinku na fade in fade out 
            }
            else {
                //da se doda da nije uspelo nesrtoo 
            }
        })
    }
    return false;

});
$("#potvrdiPromenuIP").click(function () {

    var ime;
    var prezime;

    ime = $("#first_name").val();
    prezime = $("#last_name").val();
    lang = document.querySelector(".langWrapli.activee").getAttribute("language");
    console.log(ime == "", prezime == "");

    fetch("https://localhost:5001/User/UpdateUsersNL", {
        method: 'PUT',
        body: JSON.stringify({
            firstName: ime,
            lastName: prezime,
            username: user,
            password: "h",
            email: "f@hhj.com",
            role: "U",
            avatarUrl: "d",
            language: lang

        }),
        headers: {
            'Content-type': 'application/json',
            //'Accept': 'application/json'
        }
    }
    ).then(resp => {
        if (resp.status == 200) {
            $("#izmeni-profil").fadeOut();
            //nesto za uspesno
            //moze neki popup uspesno ste promenili lozinku na fade in fade out 
        }
        else {
            //da se doda da nije uspelo nesrtoo 
        }
    })

    return false;

});


function CrtajMojoglas(idmo, naslov, desc, tip, mob, index) {
    const sectionOglas = document.getElementById("sectionOglas")
    let d1 = document.createElement("div");
    sectionOglas.appendChild(d1);
    d1.classList.add("card", "mb-2");
    d1.id = idmo + "_mojoglas";
    if (index >= 3) {
        $("#" + d1.id).attr("oglasAttr", "1");
        $("#" + d1.id).hide();
    }
    let d11 = document.createElement("div");
    d11.classList.add("card-body");
    d1.appendChild(d11);
    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = naslov; //titlee
    d11.appendChild(h5);
    let pd1 = document.createElement("p");
    pd1.classList.add("card-text");
    pd1.innerText = desc; //opiss
    d11.appendChild(pd1);

    let d12 = document.createElement("div");
    d12.classList.add("card-footer", "col", "text-muted");
    d1.appendChild(d12);

    let btnObrisi = document.createElement("button");
    btnObrisi.classList.add("btn", "btn-danger", "btn-sm", "btn-danger");
    btnObrisi.id = idmo + "_bo";
    btnObrisi.innerHTML = "<i class=\"fa fa-trash\"></i>"; ///dodaj kanticu 
    let btnIzmeni = document.createElement("button");
    btnIzmeni.classList.add("btn", "btn-info", "btn-sm", "btn-success", "mr-1");
    btnIzmeni.id = idmo + "_bi";
    btnIzmeni.innerHTML = "<i class=\"fas fa-pen\"></i>";
    d12.appendChild(btnIzmeni);
    d12.appendChild(btnObrisi);

    btnIzmeni.onclick = (ev) => {
        $("#novi-oglas-dugme").click();

        console.log("BUTTT IZMENIII ", tip);
        if (tip == "filter_hitno") {
            console.log("fsdds");
            $("#selectbasic").attr("disabled", "true");

            $("#radios-0").attr("checked", "true");

        }
        else {


            $("#selectbasic").find('option[value =' + tip + ']').attr("selected", "true");
        }

        $('#textarea').val(desc);;

        $("#textinputNumber").val(mob);//////////dodaj input
        $('#textinput').val(naslov);

        //$("#selectbasic").find('option[value ='+tip+']').attr("selected", "false");
        $("#" + btnIzmeni.id).addClass("klik");

    }


    btnObrisi.onclick = (ev) => {
        $('#forma-novi-oglas').hide();



        let pom = btnObrisi.id;
        oglId = pom.split("_");


        fetch("https://localhost:5001/Adds/DeleteAdd/" + parseInt(oglId[0]), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => {
                if (res.status == 200)

                    $("#" + oglId[0] + "_mojoglas").remove();

            });
    };
}



function onLoadProfile() {

    var us = localStorage.getItem("tokenLogin");

    proveraKorisnika(us, "404.html", "false");



    fetch("https://localhost:5001/User/GetProfileInfo/" + JSON.parse(us)['user']).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {
                console.log();
                document.getElementById("username").innerHTML = "@" + data['username'];
                document.getElementById("email").innerHTML = data['email'];
                document.getElementById("first_name").value = data['firstName'];
                document.getElementById("last_name").value = data['lastName'];
                mojiOglasi = data['uAds'];
            
                nabaviObjekte();

                var avurl = document.getElementById("my-avatar");
                if (data['avatarUrl'] == "" || data['avatarUrl'] == null)
                    avurl.src = "assets/img/avatar/avatar0.png";
                else
                    avurl.src = "assets/img/avatar/" + data['avatarUrl'];

            });
        }
        else {

        }
    });

    document.querySelector(".carousel-inner").addEventListener("click", function () {
        var avurl = document.getElementById("my-avatar");
        avurl.src = document.querySelector(".carousel-item.active").querySelector(".rounded-circle").src;

    });


}

function logout() {
    localStorage.removeItem("tokenLogin");
    location.href = "index.html";
}

function iscrtajOglase() {
    nabaviObjekte();

    $("#nacrtanoId").addClass("nacrtano");
    var index = 0;
    mojiOglasi.forEach(element => {
        //console.log(element);
        CrtajMojoglas(element.id, element.title, element.adDescription, element.addType[0].typeDesc, element.phoneNumber, index);
        index++;
    });

}
function iscrtajObjekte() {
  
    $("#nacrtaniObjId").addClass("nacrtano");
    var index = 0;
    objekti.forEach(element => {
        console.log(element);
        crtajLajkObjekat(element.id, element.name, element.sDescription, element.webLink, index,"U");
        index++;
    });
}
function nabaviObjekte() {
   
   
    fetch("https://localhost:5001/User/GetLikedServices/" + user).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {

                objekti = data;
                console.log(data);

            });
        }
        else {
            //mozda neko obavestenje nema liked services
        }
    });


}

