function onloadLanguageProfil() {
    var promeni_avatar = document.getElementById("promeni-avatar");
    var changed_avatar = document.getElementById("changed-avatar");
    var izmeni_profil = document.getElementById("izmeni-profil-btn");
    var promeni_sifru = document.getElementById("promeni-sifru-btn");
    var ime_label = document.querySelector("#ime-label label");
    var prezime_label = document.querySelector("#prezime-label label");
    var stara_sifra = document.querySelector("#label-stara-sifra label");
    var nova_sifra = document.querySelector("#label-nova-sifra label");
    var ponovi_sifru = document.querySelector("#label-ponovi-sifru label");
    var promeni_sifru_btn = document.getElementById("potvrdiPromenuSifre");
    var avatar_izbor = document.getElementById("avatar-izbor");
    var moji_oglasi_kartica = document.getElementById("moji-oglasi-btn");
    var sacuvani_objekti_kartica = document.getElementById("sacuvani-objekti-btn")
    var naslov_oglasa = document.querySelector("#form-izmeni-oglas legend");
    var tip_oglasa = document.querySelector(".form-izmeni-oglas div .ti1");
    var opcija_setanje = document.querySelector("#selectbasic .set");
    var opcija_sisanje = document.querySelector("#selectbasic .sis");
    var opcija_usvajanje = document.querySelector("#selectbasic .usv");
    var opcija_cuvanje = document.querySelector("#selectbasic .cuv");
    var opcija_parenje = document.querySelector("#selectbasic .par");
    var opcija_prodaja = document.querySelector("#selectbasic .pro");
    var opcija_dresura = document.querySelector("#selectbasic .dre");
    var naslov_oglasa = document.getElementById("naslov-lab");
    var hitan_oglas = document.querySelector(".hit1")
    var radio_da = document.getElementById("radios-0");
    var radio_ne = document.getElementById("radios-1");
    var opis_label = document.querySelectorAll(".op")
    var br_tel = document.querySelectorAll(".nas1");
    var ucitaj_jos_ogl = document.querySelector("#ucitajjosOglasa a");
    var ucitaj_jos_obj = document.querySelector("#ucitajjosObj a")
    var azuriranje_oglasa = document.querySelectorAll(".ogpos")
    var oglas_azuriran = document.querySelectorAll(".ogpos1");

    var langEl = document.querySelector('.langWrap');
    var link = document.querySelectorAll('.langWrapli');


    link.forEach(element => {

        element.addEventListener('click', () => {
            console.log(element);
            langEl.querySelector('.activee').classList.remove("activee");

            element.classList.add('activee');
            const att = element.getAttribute("language");

            promeni_avatar.innerHTML = data[att].Av1;
            changed_avatar.innerHTML = data[att].Av2;
            izmeni_profil.innerHTML = data[att].prof1;
            promeni_sifru.innerHTML = data[att].prof2;
            ime_label.innerHTML = data[att].ime;
            prezime_label.innerHTML = data[att].prezime;
            stara_sifra.innerHTML = data[att].sifra1;
            nova_sifra.innerHTML = data[att].sifra2;
            ponovi_sifru.innerHTML = data[att].sifra3;
            promeni_sifru_btn.innerHTML = data[att].sifraBtn;
            avatar_izbor.innerHTML = data[att].Av3;
            moji_oglasi_kartica.innerHTML = data[att].mojiOg;
            sacuvani_objekti_kartica.innerHTML = data[att].mojiSac;
            naslov_oglasa.innerHTML = data[att].naslov1;
            tip_oglasa.innerHTML = data[att].tipOg;
            opcija_setanje.innerHTML = data[att].t1;
            opcija_sisanje.innerHTML = data[att].t2;
            opcija_usvajanje.innerHTML = data[att].t3;
            opcija_cuvanje.innerHTML = data[att].t4;
            opcija_parenje.innerHTML = data[att].t5;
            opcija_prodaja.innerHTML = data[att].t6;
            opcija_dresura.innerHTML = data[att].t7;
            naslov_oglasa.innerHTML = data[att].naslov2;
            hitan_oglas.innerHTML = data[att].hitan;
            radio_da.innerHTML = data[att].da;
            radio_ne.innerHTML = data[att].ne;
            opis_label.innerHTML = data[att].opis;
            br_tel.innerHTML = data[att].brTel;
            azuriranje_oglasa.innerHTML = data[att].oglasConf1;
            oglas_azuriran.innerHTML = data[att].oglasConf2;
            ucitaj_jos_ogl.innerHTML = data[att].ucitajJos;
            ucitaj_jos_obj.innerHTML = data[att].ucitajJos;

        })
    });

    var data = {
        "srpski": {
            "Av1": "Sacuvaj Avatara",
            "Av2": "Avatar azuriran!",
            "prof1": "Izmeni profil",
            "prof2": "Promeni sifru",
            "ime": "Ime",
            "prezime": "Prezime",
            "sifra1": "Stara sifra",
            "sifra2": "Nova sifra",
            "sifra3": "Ponovi sifru",
            "sifraBtn": "Promeni sifru",
            "Av3": "Izaberite vas avatar",
            "mojiOg": "MOJI OGLASI",
            "mojiSac": "SACUVANO",
            "naslov1": "Izmeni oglas",
            "tipOg": "Tip oglasa:",
            "t1": "Šetanje",
            "t2": "Šišanje",
            "t3": "Usvajanje:",
            "t4": "Čuvanje",
            "t5": "Parenje",
            "t6": "Prodaja",
            "t7": "Dresura",
            "naslov2": "* Naslov Oglasa:",
            "hitan": "Hitan Oglas?",
            "da": "Da",
            "ne": "Ne",
            "opis" : "Opis",
            "brTel" : "*Broj telefona:",
            "oglasConf1" : "Azuriranje oglasa...",
            "oglasConf2" : "Oglas uspesno azuriran!",
            "ucitajJos" : "Ucitaj jos"

        },
        "english": {
            "Av1": "Save Avatar",
            "Av2": "Avatar updated!",
            "prof1": "Change Info",
            "prof2": "Change Passwrod",
            "ime": "Name",
            "prezime": "Lastname",
            "sifra1": "Old Password",
            "sifra2": "New Password",
            "sifra3": "Repeat Password",
            "sifraBtn": "Change Password",
            "Av3": "Choose an avatar",
            "mojiOg": "MY ADS",
            "mojiSac": "FAVORITES",
            "naslov1": "Change ad",
            "tipOg": "Type:",
            "t1": "Dog Walking",
            "t2": "Grooming",
            "t3": "Adoption",
            "t4": "Babysitting",
            "t5": "Breeding",
            "t6": "Sale",
            "t7": "Training",
            "naslov2": "* Topic:",
            "hitan": "Urgent?",
            "da": "Yes",
            "ne": "No",
            "opis" : "Description",
            "brTel" : "* Phone Number:",
            "oglasConf1" : "Updating the ad...",
            "oglasConf2" : "Ad updated succesfully!",
            "ucitajJos" : "Load more"

        }
    }
}