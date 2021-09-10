var email;
var params;
var pw1, pw2;

$(document).ready(function () {
  params = getParams(window.location.href);

  onloadLanguageLogForgP();
 

  lang = params['lang'];
 
  email = params['email'];


});

$('#exampleInputPassword, #exampleInputPasswordConf').on('input', function () {
  pw1 = $('#exampleInputPasswordConf').val();
  pw2 = $('#exampleInputPassword').val();
  $("#exampleInputPasswordConf").attr("style", "border-color: #e74a3b", pw1 != pw2);
  if (pw1 != pw2) $("#invConf").show();

  if (pw2 == pw1) {
    $("#invConf").hide();
    $("#exampleInputPasswordConf").attr("style", "border-color: #d1d3e2");

  }
  $('#formicaDugme').prop('disabled', pw1 != pw2);

});
$('#formicaDugme').click(function (ev) {
  var lang = document.querySelector(".langWrapli.activee");
  ev.preventDefault();
  console.log(email);
  if (email != "" && email != undefined && email != null) {
    fetch("https://localhost:5001/User/UpdateUsersPass/" + pw1, {
      method: 'PUT',
      body: JSON.stringify({
        firstName: "d",
        lastName: "d",
        username: "csdds",
        password: "ddvdff",
        email: email,
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
        if (lang == "srpski") {
          $("#textModal").text("Informacije potrebne za resetovanje vase lozinike su poslate na email adresu " + email + " !");
        }
        if (lang == "english") {
          $("#textModal").text("Email for informations needed to recover your password is sent to your email address " + email + " !");
        }
        //$("#password-reset-confirm-modal").FadeIn();
        alert("OK");
      //  location.href = "login.html?con=s&lang=" + lang;
      }
      else {
        

      }
    })
}
  else {
    location.href = "404.html";
  }
})
