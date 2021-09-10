
(function () {
     'use strict'
   
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     var forms = document.querySelectorAll('.needs-validation');
     onloadLanguage(); 
     // Loop over them and prevent submission
     Array.prototype.slice.call(forms)
       .forEach(function (form) {
         form.addEventListener('submit', function (event) {
              
           if (!form.checkValidity() ){

            var lang = document.querySelector(".langWrapli.activee");
           
            event.preventDefault();
            event.stopPropagation();
           }
           else if(document.getElementById("examplePasswordInput").value  != document.getElementById("exampleRepeatPasswordInputa").value){
               console.log(document.getElementById("exampleRepeatPasswordInputa").value, document.getElementById("examplePasswordInput").value )
               document.getElementById("exampleRepeatPasswordInputa").classList.add("invalid");
               document.getElementById("exampleRepeatPasswordInputa").value="";
               event.preventDefault()
               event.stopPropagation()
           }
           else {
               event.preventDefault();
               var lang = document.querySelector(".langWrapli.activee");
               console.log(lang.language);
               var firstName = document.getElementById("exampleFirstName").value;
               var lastName = document.getElementById("exampleLastName").value;
               var username = document.getElementById("exampleUsername").value;
               var password = document.getElementById("examplePasswordInput").value;
               var Email = document.getElementById("exampleInputEmail").value;
               var Role = "U";
               console.log(lastName,firstName,password ,Email,Role,lang.getAttribute('language'));
               fetch("https://localhost:5001/Register/RegisterNewUserGenerateToken",{
               method:'POST',
               body: JSON.stringify({
                    username : username,
                    firstName : firstName,
                    lastName : lastName,
                    password : password,
                    email : Email,
                    role : Role,
                    avatarUrl : "",
                    language : lang.getAttribute('language')

                   }),
                   headers: {'Content-type': 'application/json',
                             'Accept': 'application/json'
                  }
               }
               ).then(resp => {
                   if (resp.status == 200) {
                        resp.json().then(data=>{
                        
                        localStorage.setItem("tokenLogin", data['tokendata']);
                      
                        location.assign(data['reflink']);
                        });
                            
                    }
                   else if(resp.status == 202){
                    resp.json().then(data =>{
                    
                    document.getElementById("exampleUsername").value = "";
                  
                    document.querySelector(".infbemail").innerHTML= data;
                    
                    event.preventDefault();
                    event.stopPropagation();
                    
                     
                    });
                       
                   }
                   else if( resp.status == 203){
                    resp.json().then(data =>{
                      document.getElementById("exampleUsername").value="";
                
                      document.querySelector(".infbkorime").innerHTML= data;
                    
                     event.preventDefault();
                    event.stopPropagation();
                     
                    });
                       
                   }  
                   else{
                       location.href = '404.html';
                   }    
              });
           }
           form.classList.add('was-validated')
           
         }, false)
       })
   })()
