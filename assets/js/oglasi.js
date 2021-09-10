var pageIndex = 0;
var brojOglasa = -1;

function initLoad() {
    var token = localStorage.getItem("tokenLogin");
    if (token == null){
        location.href = "login.html?con=s&lang="+document.querySelector(".langWrapli.activee");
    }
    onloadLanguageFuter();
    onloadLanguageOglas();
    onloadLanguageIU();
    
    
}

function initOglasi(checkedVal) {
    
    var userName, desc, mob, datum, naslov, id, usId;

    fetch("https://localhost:5001/Adds/GetAdds/" + checkedVal + "/" + pageIndex).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {

                data['data'].forEach(element => {


                    userName = element['usernameFK'];
                    desc = element['adDescription'];
                    naslov = element['title'];

                    mob = element['phoneNumber'];
                    datum = element['lastUpdate'];
                    id = element['id'];
                    usId = element['userId'];
                    brojOglasa = data['broj'];
                    crtajOglas(checkedVal, usId, userName, desc, mob, datum, naslov, id);


                });
                crtajPagination(data['broj']);

            });
        }
        else {

        }
    });

}

function crtajOglas(checkedVal, usId, userName, desc, mob, datum, naslov, id) {


    var lista = document.getElementById("product-list");
    const elListe = document.createElement("li");
    elListe.id = id + "oglas";
    if (checkedVal == "filter_hitno") {
        elListe.classList.add("border", "border-danger");
    }
    elListe.classList.add(checkedVal, "list-item", "p-3","rounded");
    let lh2 = document.createElement("h2");

    lh2.innerHTML = naslov;///////ovo je nasloovv 
    elListe.appendChild(lh2);
    const d1 = document.createElement("div");
    d1.classList.add("row", "mb-3");
    let d11 = document.createElement("div");
    d11.classList.add("col-4", "d-flex", "align-content-center");
    let p1 = document.createElement("p");
    p1.classList.add("text-monospace");
    let a1 = document.createElement("a");
    a1.id = usId + "a";
    a1.classList.add("dugUser");
    crtajModul(usId, "", "", "", "", "");
    Naklik(usId);


    a1.classList.add("link-dark", "aElUsername");
    a1.setAttribute("data-toggle", "modal");
    a1.setAttribute("data-target", "#" + usId);
    a1.setAttribute("href", "#");
    a1.addEventListener('click', function () {

        document.getElementById(usId).style.display = "show";
        $("#" + usId).modal('show');
    })
    a1.innerHTML = userName;
    p1.appendChild(a1);
    d11.appendChild(p1);
    d1.appendChild(d11);


    let d12 = document.createElement("div");
    d12.classList.add("col-8", "icon-oglas", "d-flex", "flex-row-reverse");
    if (userName == JSON.parse(localStorage.getItem("tokenLogin"))['user']) {
        let Dugici = document.createElement("div");
        //Dugici.classList.add("");
        let btnObrisi = document.createElement("button");
        btnObrisi.classList.add("btn", "btn-danger");
        btnObrisi.id = id + "_bo";
        btnObrisi.innerHTML = "<i class=\"fa fa-trash\"></i>"; ///dodaj kanticu 
        let btnIzmeni = document.createElement("button");
        btnIzmeni.classList.add("btn", "btn-info", "mr-2");
        btnIzmeni.id = id + "_bi";
        btnIzmeni.innerHTML = "<i class=\"fas fa-pen\"></i>";
        Dugici.appendChild(btnIzmeni);
        Dugici.appendChild(btnObrisi);
        d12.appendChild(Dugici);
        btnIzmeni.onclick = (ev) => {
            $("#novi-oglas-dugme").click();


            if (checkedVal == "filter_hitno") {

                $("#selectbasic").attr("disabled", "true");

                $("#radios-0").attr("checked", "true");

            }
            else {
                var tip = $("#filter-options :radio:checked").val();

                $("#selectbasic").find('option[value =' + tip + ']').attr("selected", "true");
            }

            $('#textarea').val(desc);

            $("#textinputNumber").val(mob);//////////dodaj input
            $('#textinput').val(naslov);
            $("#filter-options :radio").each(function () { $(this).prop("disabled", true); });
            $("#" + btnIzmeni.id).addClass("klik");
        }


        btnObrisi.onclick = (ev) => { // ovde moze da se dodaa da je uspesno obrisan neki css

            let pom = btnObrisi.id;
            oglId = pom.split("_");
            // ukloni taj div ok , a sad izbrisi iz baze
            fetch("https://localhost:5001/Adds/DeleteAdd/" + parseInt(oglId[0]), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
                .then(res => {
                    if (res.status == 200)


                        $("#" + oglId[0] + "oglas").remove();
                    $("#filter-options :radio:checked").click();
                });





        }
    }


    d1.appendChild(d12);
    elListe.appendChild(d1);
    const d2 = document.createElement("div");
    d2.classList.add("row", "m-auto", "border", "rounded", "p-2");
    d2.id = "opis";
    let p2 = document.createElement("p");
    p2.innerHTML = desc; //ovdee ideee onaj opisss 
    d2.appendChild(p2);
    elListe.appendChild(d2);


    const d3 = document.createElement("div");
    d3.classList.add("row", "mt-3");

    let d31 = document.createElement("div");
    d31.classList.add("col-8");
    let p31 = document.createElement("p");

    let a31 = document.createElement("a");
    a31.classList.add("link-success", "border", "rounded", "p-2");
    a31.innerHTML = mob; // ovdeeee ideeeee teleeefonn
    p31.appendChild(a31);
    d31.appendChild(p31);
    d3.appendChild(d31);

    let d32 = document.createElement("div");
    d32.classList.add("col-4");
    let p32 = document.createElement("p");
    p32.classList.add("text-end", "text-muted");
    let sp32 = document.createElement("span");
    sp32.classList.add("border", "rounded", "p-2");
    sp32.innerHTML = datum; // ovdeeee ideeeee datummm 
    p32.appendChild(sp32);
    d32.appendChild(p32);
    d3.appendChild(d32);
    elListe.appendChild(d3);

    lista.appendChild(elListe);


}


function Naklik(usid) {

    var broglasa, email, avatar, ime, username;
    fetch("https://localhost:5001/User/ModalInfo/" + usid).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {



                email = data['email'];
                broglasa = data['broglasa'];
                avatar = data['avatarUrl'];
                ime = data['ime'];
                username = data['username'];
                popuniModul(usid, ime, avatar, username, email, broglasa);
            });
        }
        else {

            window.location.href = "404.html???";
        }
    });



}


function crtajPagination(broj) {

    var br = (broj / 5);

    var lista = document.querySelector(".pagination");
    if (lista.classList.contains("nijenacrtan")) {
        for (var i = 0; i < br; i++) {
            let elListe = document.createElement("li");
            elListe.id = i + 1 + "_elL";
            elListe.classList.add("page-item");
            let a = document.createElement("a");
            a.classList.add("page-link");
            if (i + 1 == 1)
                elListe.classList.add("active");
            a.innerHTML = i + 1;
            elListe.appendChild(a);

            lista.appendChild(elListe);
            elListe.onclick = function () {
                var el = document.querySelector(".page-item.active");

                if (elListe.getAttribute("id") != el.id) {
                    el.classList.remove("active");
                    elListe.classList.add("active");
                    var pom = elListe.getAttribute("id").split("_");
                    pageIndex = (parseInt(pom[0], 10) - 1) * 5;



                    $("#product-list").empty();
                    $(".modcont").empty();

                    $(".list-wrapper #product-list li").hide();
                    $("#filter-options :radio:checked").each(function () {
                        $("." + $(this).val()).fadeIn();
                        initOglasi($(this).val());
                    });

                    if ($('#filter-options :checkbox').filter(':checked').length < 1) {
                        $(".list-wrapper #product-list li").fadeIn();

                    }
                };
            }

        }
        lista.classList.remove("nijenacrtan");
    }
}


