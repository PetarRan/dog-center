var email;
var lang;
$(document).ready(function (){
    var token = localStorage.getItem("tokenLogin");
   
    if(token==null)
    location.assign('index.html'); 
    console.log("hj");
    onloadLanguageIU();
    onloadLanguage();
    onloadLanguageFuter();

   
});

 async function boolEmail(email){

    
        let response= await fetch("https://localhost:5001/Login/CheckEmail/"+email,{
            method:"GET"
        });
        let json_response=await response.json();
        return json_response;
    
}

$('#quizButt').click(function () {
    location.href = "quiz.html?lang="+ document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");

});

