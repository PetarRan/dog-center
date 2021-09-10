var email;
var params;

$(document).ready(function () {
  params =getParams(window.location.href);  
  onloadLanguageFP();
  onloadLanguageForgotNav();
  onloadLanguageFuter();
   /*lang = params['lang'];
   if(lang!="" && lang!=undefined && lang!= null){
     setLanguage(lang);
   }*/
  
  
});
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  $('#exampleInputEmail').on('input', function() {
    var adresa = $("#exampleInputEmail").val();
    $("#exampleInputEmail").attr("style", "border-color: #e74a3b",!isEmail(adresa));
    if(isEmail(adresa))
    $("#exampleInputEmail").attr("style", "border-color: #d1d3e2");
    $('#btnPosalji').prop('disabled', !isEmail(adresa));
  });


$("#btnPosalji").click(function(ev){
    ev.preventDefault();
    var adresa = $("#exampleInputEmail").val();
    fetch("https://localhost:5001/User/GetUser/"+adresa).then(resp => {

        if (resp.status == 200) {
            
               sendEmail(adresa);

               //da se pojaivi poslai smo vam email 
               //peki njegovi modali da se dodaju 
        }
        else {
            // da nesto iskoci ovaj email ne postojii u bazi... 
        }
    });
});

function sendEmail(email){
    fetch("https://localhost:5001/Login/SendEmail/" + email).then(resp => {

        if (resp.status == 200) {
           alert("Email for informations  needed to recovery password is sent to your email address " + email + " !");
            return;


        }
        else if (resp.status == 303) {
            alert("Email address you entered isnt registrated in this aplication, you can register now,just click on Register button!");
            return;

        }
        else {
            log("404");
            //location.href = '404.html';
        }
    });
}