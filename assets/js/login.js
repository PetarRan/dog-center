
var logintry = 1;


$('form').on('change', function(e){
    document.getElementById("TryRegister").innerHTML = "";
   
  });
  $(document).ready(function () {
    'use strict'
    onloadLanguageLog();
    var params  = getParams(window.location.href);
    
    var trueval = params['con'];
    
    var tokLog = localStorage.getItem("tokenLogin");
   
    if(tokLog!=null && trueval=="true"){
    
        var jsontok = JSON.parse(tokLog);
        jsontok["conf"]=trueval;
        localStorage.setItem("tokenLogin",JSON.stringify(jsontok));
    }
    tokLog = localStorage.getItem("tokenLogin");
    

    var forms = document.querySelectorAll('.needs-validation');
    
    

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                console.log(tokLog);
                

                if (!form.checkValidity()) {

                    event.preventDefault()
                    event.stopPropagation()
                }
                else {
                    
                    var email = document.getElementById("exampleInputEmail").value;
                    var pass = document.getElementById("exampleInputPassword").value;
                    event.preventDefault();
                    console.log(tokLog, "pre fecha");
                                    
                    fetch("https://localhost:5001/Login/LoginUserByEmail/" + email + "/" + pass 
                    )
                        .then(resp => {
                            resp.json().then(data=>{
                            if (data["status"] == "200") {
                                

                                    if(tokLog==null){ 
                                        console.log(data['tok'],"tok");
                                        tokLog = data['tok']; 
                                        localStorage.setItem("tokenLogin",tokLog); 
                                    }
                                    if (tokLog != null) {
                                        console.log(JSON.parse(tokLog)['user']==data['uname']);
                                        if (JSON.parse(tokLog)['user'] === data['uname']) {
                                            console.log("user je ok ");
                                            if (new Date(JSON.parse(tokLog)['exp']) >  new Date()) {
                                                    
                                                

                                                console.log("date je ok ");
                                                if (JSON.parse(tokLog)['conf'] != 'false') {

                                                    
                                                    console.log("conf ok ");
                                                    location.href =  data['reflink'];
                                                    
                                                }
                                                else{
                                                    
                                                    alert("You didnt confirm your elmail yet!");
                                                }
                                            }
                                            else{
                                                if(data['tok']!=""){
                                                    tokLog=data['tok'];
                                                    localStorage.setItem("tokenLogin",tokLog); 
                                                    location.href =  data['reflink'];
                                                }
                                            }
                                        }
                                        else{
                                            if(data['tok']!=""){
                                                tokLog=data['tok'];
                                                localStorage.setItem("tokenLogin",tokLog); 
                                                location.href =  data['reflink'];
                                            }

                                        }
                                    }
                                    else{
                                        console.log("de");
                                    }

                                   

                                
                            }
                            else if (data["status"] == "202") {
                                logintry++; console.log(logintry);
                                document.getElementById("exampleInputEmail").value = email;

                                document.getElementById("exampleInputPassword").classList.add("invalid");
                                document.getElementById("exampleInputPassword").value = "";

                                if (logintry >= 4) {
                                    document.getElementById("exampleInputEmail").disabled = true;
                                    document.querySelector(".btn-user.loglang").disabled = true;
                                    let errorMesage = document.querySelector(".infbpass");
                                    let lang = document.querySelector(".langWrapli.activee").getAttribute("language");
                                    if (lang == "srpski") {
                                        errorMesage.innerHTML = "Nekoliko puta ste uneli nekorektnu lozinku. Ako ste zaboravili lozinku kliknite dugme \"Zaboravili ste Šifru\" ispod.";
                                    }
                                    else errorMesage.innerHTML = "Several times you entered wrong password, if you like to resert your password click on Forgotten password belove the form.";
                                    setTimeout(EnableFunction, 20000);

                                }

                            }
                            else if (data["status"] == "203") {
                                console.log("404");
                                let lang = document.querySelector(".langWrapli.activee").getAttribute("language");
                               
                                if (lang == "srpski") {
                                document.getElementById("TryRegister").innerHTML = "Ne postoji nalog sa ovim podacima, probajte prvo da se registrujete!";}
                                else{
                                    document.getElementById("TryRegister").innerHTML = "This account doesnot exists. Try to register first!"
                                }

                            }
                            else{
                                console.log("Ne znam b");
                            }
                            });})


                }
                   
                form.classList.add('was-validated')

            }, false)
        })

       
});

function forgottenpass(e) {
    location.href = "forgott-password.html";
   
}

function EnableFunction() {
    logintry = 0;
    document.getElementById("exampleInputEmail").disabled = false;
    document.querySelector(".btn-user.loglang").disabled = false;
    document.getElementById("exampleInputPassword").classList.remove("invalid");
    let errorMesage = document.querySelector(".infbpass");
    let lang = document.querySelector(".langWrapli.activee").getAttribute("language");
    if (lang == "srpski") {
        errorMesage.innerHTML = "Pogrešna lozinka!";
    }
    else errorMesage.innerHTML = "Invalid password!";

    document.querySelector(".btn-user.loglang").click();

}

