$(document).ready(function () {
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $("#endquiz").hide();
    $("#quizresult").hide();
    //var params= getParams(window.location.href);
   // var lang = params['lang'];
    onloadLanguageKviz();
    //console.log(params['lang']);
   // if(lang!=null)
    //setLanguage(params['lang']);
});

$("#next1").click(function () { 
    $("#question1").fadeOut();
    $("#question2").delay(500).fadeIn();
});

$("#next2").click(function () { 
    $("#question2").fadeOut();
    $("#question3").delay(500).fadeIn();
});

$("#next3").click(function () { 
    $("#question3").fadeOut();
    $("#question4").delay(500).fadeIn();
});

$("#next4").click(function () { 
    $("#question4").fadeOut();
    $("#question5").delay(500).fadeIn();
    
});

$("#next5").click(function () { 
    $("#question5").fadeOut();
    $("#quizresult").delay(3500).fadeIn();
    $("#endquiz").delay(500).fadeIn().delay(3000).fadeOut().delay(100);
});

// $("#prev1").click(function () { 
//     $("#question1").fadeOut();
//     $("#endquiz").delay(500).fadeIn();
// });

$("#prev2").click(function () { 
    $("#question2").fadeOut();
    $("#question1").delay(500).fadeIn();
});

$("#prev3").click(function () { 
    $("#question3").fadeOut();
    $("#question2").delay(500).fadeIn();
});

$("#prev4").click(function () { 
    $("#question4").fadeOut();
    $("#question3").delay(500).fadeIn();
});

$("#prev5").click(function () { 
    $("#question5").fadeOut();
    $("#question4").delay(500).fadeIn();
});


$("#again").click(function (){ 
    $("#quizresult").fadeOut();
    $("#question1").fadeIn();
});

$("#home1").click(function (){ 
    $("#quizresult").fadeOut();
});
