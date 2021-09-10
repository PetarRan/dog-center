$(document).ready(function (){
    onloadLanguageFuter();
    onloadLanguageSav();
    
    var token = localStorage.getItem("tokenLogin");

    

});
$(".backbut").click(function () {
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