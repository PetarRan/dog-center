var quizRes = {
    'results': [
        { ime: 'Husky', stan: 'ne', deca: 'da', aktivnost: '1', outdoors: 'sport' }, //aktivnost 1,2,3,4
        { ime: 'Buldog', stan: 'da', deca: 'ne', aktivnost: '4', outdoors: 'home' },
        { ime: 'Zlatni Retriver', stan: 'ne', deca: 'da', aktivnost: '1', outdoors: 'sea' },
        { ime: 'Labrador', stan: 'ne', deca: 'da', aktivnost: '3', outdoors: 'sea' },
        { ime: 'Dalmatinac', stan: 'ne', deca: 'ne', aktivnost: '3', outdoors: 'home' },
        { ime: 'Pudla', stan: 'da', deca: 'da', aktivnost: '2', outdoors: 'home' },
        { ime: 'Dzek Rasel', stan: 'da', deca: 'da', aktivnost: '2', outdoors: 'sport' },
    ]
};

$("#next5").click(function () {
    var stanVar = $('input[name="rad1"]:checked').next().next().text();
    var aktivnostVar = $('input[name="rad2"]:checked').next().next().text();
    var decaVar = $('input[name="rad3"]:checked').next().next().text();
    var outdoorsVar = $('input[name="rad5"]:checked').next().next().text();
    var additionalCheck = $('input[name="rad4"]:checked').next().next().text();
    var newArrayStan;
    var newArrayDeca;
    var newArrayOutdoors;
    var newArrayAktivnost;
    var arr = quizRes;

    if(stanVar == "Kuca" && decaVar == "Ne"){
    
        
        arr = quizRes.results.filter(function (el) {
            return el.ime =="Dalmatinac";
        });
        $("#dogNaziv").text(arr[0].ime);
        $("#dogSlika").attr("src", "/assets/img/dolmatinac.jpg");
        return;
    }

    if(stanVar == "Stan" && decaVar == "Ne"){
        arr = quizRes.results.filter(function (el) {
            return el.ime == "Buldog"
        });
        $("#dogNaziv").text(arr[0].ime);
        $("#dogSlika").attr("src", "/assets/img/buldog.jpg");
        return;
    }

    if(stanVar == "Stan" && decaVar == "Da"){
        if(outdoorsVar == "Hiking i Sport"){
            arr = quizRes.results.filter(function (el) {
                return el.ime == "Dzek Rasel"
            });
            $("#dogNaziv").text(arr[0].ime);
            $("#dogSlika").attr("src", "/assets/img/jack.jpg");
            return;
        }
        else{
            arr = quizRes.results.filter(function (el) {
                return el.ime == "Pudla"
            });
            $("#dogNaziv").text(arr[0].ime);
            $("#dogSlika").attr("src", "/assets/img/pud.jpg");
            return;
        }
    }

    if(stanVar == "Kuca" && decaVar == "Da" && outdoorsVar == "Na Bazenu ili Moru"){
        if(aktivnostVar == "Cesto" || aktivnostVar == "Vrlo Cesto"){
            arr = quizRes.results.filter(function (el) {
                return el.ime == "Zlatni Retriver"
            });
            $("#dogNaziv").text(arr[0].ime);
            $("#dogSlika").attr("src", "/assets/img/ss.jpg");
            return;
        }
        else{
            arr = quizRes.results.filter(function (el) {
                return el.ime == "Labrador"
            });
            $("#dogNaziv").text(arr[0].ime);
            $("#dogSlika").attr("src", "/assets/img/labrador.jpg");
            return;
        }
    }
    if(stanVar == "Kuca" && decaVar == "Da" && (outdoorsVar == "Hiking i Sport" || outdoorsVar == "Kod Kuce uz Netflix")){
        arr = quizRes.results.filter(function (el) {
            return el.ime == "Husky"
        });
        $("#dogNaziv").text(arr[0].ime);
        $("#dogSlika").attr("src", "/assets/img/haski.jpg");
        return;
    }

});

$("#prev1").click(function () {
    var tok =localStorage.getItem("tokenLogin");
    if(tok==null){
        location.href ="index.html?lang="+document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");
    }
    else{
        if(new Date(JSON.parse(tok)['exp']) < new Date()){
            location.href = "index.html?lang="+document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");
        }
        location.href = "index-user.html?lang="+document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");;
    }
    
    

});
$("#home1").click(function () {
    var tok =localStorage.getItem("tokenLogin");
    if(tok==null){
        location.href ="index.html?lang="+document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");
    }
    else{
        if(new Date(JSON.parse(tok)['exp']) < new Date()){
            location.href = "index.html?lang="+document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");
        }
        location.href = "index-user.html?lang="+document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");;
    }

});


    
