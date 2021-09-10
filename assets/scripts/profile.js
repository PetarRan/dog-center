var mojiOglasi;
$( document ).ready(function() {
    onloadLanguageFuter();
    onloadLanguageIU();
    onloadLanguageProfil();
    
        $('#forma-novi-oglas').hide();
        $('#confirm-oglas').hide();
        $('#load-oglas').hide();
      
      //  $(':radio:checked').triggerHandler('click');
   
    
    var user  = localStorage.getItem("tokenLogin");

    proveraKorisnika(user,"404.html","false");

        
    
    fetch("https://localhost:5001/User/GetProfileInfo/"+JSON.parse(user)['user']).then(resp=>{
                   
        if(resp.status == 200 ){
            resp.json().then(data =>{
                console.log();
                document.getElementById("username").innerHTML ="@"+data['username']; 
                document.getElementById("email").innerHTML = data['email']; 
                document.getElementById("first_name").value= data['firstName']; 
                document.getElementById("last_name").value = data['lastName'];
                mojiOglasi = data['uAds'];
                lajkovaniservisi = data['likedServices'];
               
                
                var avurl = document.getElementById("my-avatar");
                if(data['avatarUrl']=="" || data['avatarUrl']==null )
                    avurl.src = "assets/img/avatar/avatar0.png"; 
                else
                avurl.src="assets/img/avatar/"+data['avatarUrl'];

            }); 
       }
       else{

       }
    });

    document.querySelector(".carousel-inner").addEventListener("click", function(){ 
        var avurl = document.getElementById("my-avatar");
        avurl.src = document.querySelector(".carousel-item.active").querySelector(".rounded-circle").src;

     });
    

 })
function logout(){
    localStorage.removeItem("tokenLogin");
    location.href = "index.html";
}