$(document).ready(function () {
  onloadLanguageNav();
  onloadLanguage();
  onloadLanguageFuter();

  let provera;
  provera = localStorage.getItem("tokenLogin");
  var urll = "index-user.html";
  proveraKorisnika(provera, urll, "true");

}
);


$('#quizButt').click(function () {
    location.href = "quiz.html?lang=" + document.querySelector('.langWrap').querySelector('.langWrapli.activee').getAttribute("language");
    
  });