
async function checkLoginSession(token) {

  var resp = await fetch("https://localhost:5001/Login/CheckLoginSession/" + token, {
    method: "GET"
  });
  return resp.json();



}
$(document).ready(function () {

  var params = getParams(window.location.href);
  console.log("set");
  var lg = params['lang']
  setLanguage(lg);


})



function proveraKorisnika(provera, url, foo) {

  if (provera != null || provera == "") {
    console.log(provera);
    if (new Date(JSON.parse(provera)['exp']) > new Date()) {

      checkLoginSession(JSON.parse(provera)['user'])
        .then(data => {
          if (data['status'] == "200") {
            if (data['url'] != "")
              url = data['url'];
            if (JSON.parse(provera)['conf'] == foo) {
              location.href = url;
              //console.log("dabreeeee");
            }

          } else {

          }

        });

    }
    else {
      console.log("trrrrrtcghvjk");
    }
  }
}

function logout() {
  localStorage.removeItem("tokenLogin");
  var lang = document.querySelector(".langWrapli.activee");
  if (lang != null && lang != "" && lang != undefined) {
    lang = lang.getAttribute('language');
    location.href = 'index.html?lang=' + lang;
  }
  else
    location.href = 'index.html';
}

$(".redirekcija").click(function () {
  var lang = document.querySelector(".langWrapli.activee");
  if (lang != null) {
    lang = lang.getAttribute("language");
  }
  else {
    lang = "srpski";
  }

  var hr = $(this).attr("href");


  if (hr.includes('?')) { console.log("niz"); hr += "&lang=" + lang; }
  else { hr += "?lang=" + lang; }
  $(this).attr("href", hr);
  console.log(hr);


});

function getParams(url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};

function setLanguage(lang) {

  langat = document.querySelector(`[language= ${lang}]`);
  console.log(langat, "set0");
  if (langat != null) {
    if (!langat.classList.contains("activee")) {
      var ac = document.querySelector(".langWrapli.activee");
      if (ac != null) {
        ac.classList.remove("activee");
        langat.classList.add("activee");
      }
    }
    langat.click();
  }


}
function crtajModul(userId, ime, avatar, userName, Email, brojOglasa) {

  lang = document.querySelector(".langWrapli.activee");
  if (lang != null) {
    lang = lang.getAttribute("language");
  }
  let modalDiv = document.createElement("div");
  modalDiv.id = userId;
  modalDiv.classList.add("modal", "fade", userId);

  modalDiv.setAttribute("role", "dialog");
  // modalDiv.setAttribute("data-bs-keyboard","false");
  modalDiv.setAttribute("tabindex", "-1");
  modalDiv.setAttribute("aria-labelledby", "confirmLabel");
  modalDiv.setAttribute("aria-hidden", "true");
  let d1 = document.createElement("div");
  modalDiv.appendChild(d1);
  d1.classList.add("modal-dialog");
  let d2 = document.createElement("div");
  d2.classList.add("modal-content");
  d1.appendChild(d2);

  let d21 = document.createElement("div");
  d21.classList.add("modal-header");
  let h21 = document.createElement("h4");
  h21.classList.add("modal-title");
  h21.id = "staticBackdropLabel";
  if (lang == "srpski")
    h21.innerHTML = "<i class=\"fas fa-info-circle\"></i>&nbsp;Info Korisnika:";
  else {
    h21.innerHTML = "<i class=\"fas fa-info-circle\"></i>&nbsp;Users info:";
  }

  let b21 = document.createElement("button");
  b21.classList.add("btn-close");
  b21.setAttribute("data-bs-dismiss", "modal");
  b21.setAttribute("aria-label", "Close");
  d21.appendChild(h21);
  d21.appendChild(b21);
  d2.appendChild(d21);


  let d22 = document.createElement("div"); //modal body 
  d22.classList.add("modal-body");
  d2.appendChild(d22);
  let d221 = document.createElement("div");
  d221.classList.add("container", "mt-1", "d-flex", "justify-content-center");
  let d222 = document.createElement("div");
  d222.classList.add("card-user", "p-3");
  let d223 = document.createElement("div");
  d223.classList.add("d-flex", "align-items-center");
  d22.appendChild(d221);
  d221.appendChild(d222);
  d222.appendChild(d223);

  let divImg = document.createElement("div");
  divImg.classList.add("image");
  let imgEl = document.createElement("img");
  imgEl.classList.add("rounded-circle", "m-3", "slikaUser");
  imgEl.setAttribute("width", "155");
  imgEl.setAttribute("src", "assets/img/avatar/" + avatar);
  divImg.appendChild(imgEl);
  d223.appendChild(divImg);

  let divInf = document.createElement("div");
  d223.appendChild(divInf);
  divInf.classList.add("ml-3", "w-100");
  let hime = document.createElement("h4");
  hime.classList.add("mb-0", "text-wrap", "mt-0", "imeUser");
  hime.innerHTML = ime;
  divInf.appendChild(hime);
  let usnme = document.createElement("span");
  usnme.classList.add("text-monospace", "usernameUser");
  usnme.innerHTML = userName;
  divInf.appendChild(usnme);


  let divEmail = document.createElement("div");

  let spEmail = document.createElement("span");
  spEmail.classList.add("text-monospace", "emailUser");
  spEmail.setAttribute("href", "#");
  spEmail.innerHTML = Email;
  divEmail.appendChild(spEmail);
  divInf.appendChild(divEmail);

  let divBrDatum = document.createElement("div");
  divInf.appendChild(divBrDatum);
  divBrDatum.classList.add("p-2", "mt-2", "bg-dark", "d-flex", "justify-content-between", "rounded", "text-white", "stats");

  let divBr = document.createElement("div");
  divBr.classList.add("d-flex", "flex-column");
  let spog = document.createElement("span");
  spog.classList.add("articles");
  if (lang == "srpski") {
    spog.innerHTML = "Oglasi";
  }
  else
    spog.innerHTML = "Adds";

  let spBr = document.createElement("span");
  spBr.classList.add("number1", "broglasaUser");
  spBr.innerHTML = brojOglasa;

  divBr.appendChild(spog);
  divBr.appendChild(spBr);
  let divDatum = document.createElement("div");
  divDatum.classList.add("d-flex", "flex-column");
  let spDatum = document.createElement("span");
  spDatum.classList.add("followers");

  let spn2 = document.createElement("span");
  spn2.classList.add("number2");

  if (lang == "sprski")
    spn2.innerHTML = "Korisnik";
  else
    spn2.innerHTML = "User";



  divDatum.appendChild(spDatum);
  divDatum.appendChild(spn2);

  divBrDatum.appendChild(divBr);
  divBrDatum.appendChild(divDatum);

  let dposl = document.createElement("div");
  dposl.classList.add("button", "mt-2", "d-flex", "flex-row", "align-items-center");
  dposl.innerHTML = "<a class=\"btn btn-sm btn-outline-dark w-100 m-1\"><i class=\"fas fa-phone\"></i></a>";
  divInf.appendChild(dposl);
  let divFut = document.createElement("div");
  divFut.className = "modal-footer";
  d2.appendChild(divFut);


  document.querySelector(".modcont").appendChild(modalDiv);


}
function popuniModul(usid, ime, avatar, username, email, broglasa) {
  lang = document.querySelector(".langWrapli.activee");
  if (lang != null) {
    lang = lang.getAttribute("language");
  }

  var modal = document.getElementById(usid);
  let h21 = modal.querySelector(".modal-title");


  if (lang == "srpski")
    h21.innerHTML = "<i class=\"fas fa-info-circle\"></i>&nbsp;Info Korisnika:";
  else {
    h21.innerHTML = "<i class=\"fas fa-info-circle\"></i>&nbsp;Users info:";
  }

  let spog = modal.querySelector(".articles");

  if (lang == "srpski") {
    spog.innerHTML = "Oglasi";
  }
  else
    spog.innerHTML = "Advertisements";

  let spDatum = modal.querySelector(".followers");
  if (lang == "srpski")
    spDatum.innerHTML = "Uloga";
  else
    spDatum.innerHTML = "Role";

  let spn2 = modal.querySelector(".number2");

  if (lang == "sprski")
    spn2.innerHTML = "Korisnik";
  else
    spn2.innerHTML = "User";

  let imemod = modal.querySelector(".imeUser");
  let emilmod = modal.querySelector(".emailUser");
  let broglmod = modal.querySelector(".broglasaUser");
  let usernamea = modal.querySelector(".usernameUser");
  let slikamod = modal.querySelector(".slikaUser");
  imemod.innerHTML = ime;
  emilmod.innerHTML = email;
  broglmod.innerHTML = broglasa;
  usernamea.innerHTML = username;
  slikamod.src = "assets/img/avatar/" + avatar;

}
function crtajLajkObjekat(idobj, naslov, desc, webLink, index, role) {
  const sectionOglas = document.getElementById("sectionObjekti")

  let d1 = document.createElement("div");
  sectionOglas.appendChild(d1);
  d1.classList.add("card", "mb-2");
  d1.id = idobj + "_objekat";


  let d11 = document.createElement("div");
  d11.classList.add("card-body");
  d1.appendChild(d11);
  let h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerHTML = naslov; //titlee

  let buttLike = document.createElement("button");
  if (role == "U") {
    buttLike.classList.add("btn", "btn-link", "rounded", "rounded-circle", "confirm-oglas-btn", "butLike");
    buttLike.id = "like_" + idobj;
    buttLike.innerHTML = "<i  class='unliked fas fa-heart' style='color:red'></i>";
    buttLike.onclick = (ev) => {
      console.log("dada");
      var tok = localStorage.getItem("tokenLogin");

      if (tok == null) location.href = "404.html";

      fetch("https://localhost:5001/User/PostLikedServices/ " + idobj + "/" + JSON.parse(tok)['user'], {
        method: 'POST',
        body: JSON.stringify({


          userId: 0,
          dogServiceId: idobj


        }),
        headers: {
          'Content-type': 'application/json',
          
        }
      }
      ).then(resp => {
        if (resp.status == 200 || resp.status == 201) {

          if (buttLike.firstChild.classList.contains("liked")) {
            buttLike.innerHTML = "<i  class='unliked fas fa-heart' style='color:red'></i>";

            $("#" + idobj + "_objekat").delay(800).fadeOut();
            var timeout = setTimeout(function () { d1.remove(); }, 1000);

          }
          else {
            buttLike.innerHTML = "<i  class='liked far fa-heart' style='color:red'></i>";
            $("#" + idobj + "_objekat").delay(800).fadeOut();

          }
        }
        else {

        }
      });


    }
  } else {
    buttLike.classList.add("btn", "btn-link", "rounded", "rounded-circle", "confirm-oglas-btn", "butLike");
    buttLike.id = "like_" + idobj;
    buttLike.innerHTML = "<i  class='unliked fas fa-tresh' style='color:red'></i>";
  }
  h5.prepend(buttLike);
  d11.appendChild(h5);
  let pd1 = document.createElement("p");
  pd1.classList.add("card-text");
  pd1.innerText = desc //opiss
  d11.appendChild(pd1);
  let ad1 = document.createElement("a");
  ad1.classList.add("btn", "btn-danger");
  ad1.innerHTML = "Visit Us <i class=\"fas fa-map-marker\"></i>";
  ad1.setAttribute("href", webLink);


  d11.appendChild(ad1);
  if (index >= 3) {
    d1.setAttribute("objAttr", "1");
    d1.setAttribute("style", "display:none");
  }


}
function updateLanguage(lang) {
  var tok = localStorage.getItem("tokenLogin");
  if (tok != null) {
    fetch("https://localhost:5001/User/UpdateUsersLanguage/" + JSON.parse(tok)['user'], {
      method: 'PUT',
      body: JSON.stringify({
        firstName: "d",
        lastName: "d",
        username: "d",
        password: "d",
        email: "f@hhj.com",
        role: "U",
        avatarUrl: "d",
        language: lang

      }),
      headers: {
        'Content-type': 'application/json',
      
      }
    }
    ).then(resp => {
      if (resp.status == 200) {
        console.log("promena jezika");
      }
      else {

      }
    })
  }
}