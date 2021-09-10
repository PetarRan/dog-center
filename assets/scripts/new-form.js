

$("#novi-oglas-dugme").click(function(){
    if($('#forma-novi-oglas').is(":visible")){
        
        $("#forma-novi-oglas").fadeOut();
        $("#novi-oglas-dugme").text("Dodaj oglas");
        $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');
    }
    else{

        $("#novi-oglas-dugme").text("Nazad");
        $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-arrow-left"></i>');
        $("#forma-novi-oglas").fadeIn();
    }
})


$("#button1id").click(function () {  //success
    var lo =localStorage.getItem("tokenLogin");
    /*console.log(lo);
    $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');*/
    var user = JSON.parse(lo)['user'];
    var phNum = $("#textinputNumber").val();
    var opis = $('#textarea').val();
    var naslov = $('#textinput').val();
    var oglId; var pom;
    if ($(".klik")[0]){
        pom = $(".klik").attr("id");
        oglId = pom.split("_");

        
    }
    else{
        oglId = 0;  
      
    }
    
    var tip;
    if( $("#selectbasic").is(":disabled")){
        if($("#radios-0").is(":checked"))
            tip = "filter_hitno";
        
    }
    else{
        
        tip = $("#selectbasic").children("option:selected").val();
    }
   
    if($(".klik")[0]){
        fetch("https://localhost:5001/Adds/IzmeniAdd/"+ oglId[0],{
            method:'PUT',
            body: JSON.stringify({
             adDescription: opis,
             phoneNumber: phNum,
             title: naslov,
             usernameFK: user,
             lastUpdate: "",
             userId: 0,
             addType: [
               {
                 
                 addId: 0,
                 typeDesc: tip
               }
             ]
           

                }),
                headers: {'Content-type': 'application/json',
                          'Accept': 'application/json'
               }
            }
            ).then(resp => {
                if (resp.status == 200) {
                $("#"+pom).removeClass("klik");
                console.log("ovo");
                $("#filter-options :radio").each(function () { $(this).removeAttr('disabled');});
               
                //$("#filter-options :radio:checked").removeAttr('checked');
                //$("#filter-options :radio").find("radio[value="+tip+"]")
                 $("#load-oglas").fadeIn().delay(4000).fadeOut();
                 $("#oglasi").fadeOut().delay(4200).fadeIn()
                 $("#forma-novi-oglas").delay(4200).fadeOut();
                 $("#confirm-oglas").delay(4200).fadeIn().delay(2000).fadeOut();
                 $("#novi-oglas-dugme").text("Dodaj oglas");
                 $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');
                 $("#filter-options :radio:checked").click();
                
                
                 }
                else {
                 $("#"+pom).removeClass("klik");
                 $("#load-oglas").fadeIn().delay(4000).fadeOut();
                 $("#oglasi").fadeOut().delay(4200).fadeIn()
                 $("#forma-novi-oglas").delay(4200).fadeOut();
                 $("#novi-oglas-dugme").text("Dodaj oglas");
                 $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');
                 $("#filter-options :radio").each(function () { $(this).prop("disabled", false);});
                 
                  
                } 
                $("#textinputNumber").val("");
                 $('#textarea').val("");
                 $('#textinput').val(""); 

           });

           
          
     }
    
    else{
    

    fetch("https://localhost:5001/Adds/PostAdd/"+JSON.parse(lo)['user'],{
               method:'POST',
               body: JSON.stringify({
                adDescription: opis,
                phoneNumber: phNum,//////////dodaj input
                title: naslov,
                usernameFK: user,
                lastUpdate: "",
                userId: 0,
                addType: [
                  {
                    
                    addId: 0,
                    typeDesc: tip
                  }
                ]
              

                   }),
                   headers: {'Content-type': 'application/json',
                             'Accept': 'application/json'
                  }
               }
               ).then(resp => {
                   if (resp.status == 200) {
                    $("#load-oglas").fadeIn().delay(4000).fadeOut();
                    $("#oglasi").fadeOut().delay(4200).fadeIn()
                    $("#forma-novi-oglas").delay(4200).fadeOut();
                    $("#confirm-oglas").delay(4200).fadeIn().delay(2000).fadeOut();
                    $("#novi-oglas-dugme").text("Dodaj oglas");
                    $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');
                    $("#filter-options :radio").each(function () { $(this).prop("disabled", false);});
                    $("input:radio[value="+tip+"]").prop("checked", true);

                    $("#filter-options :radio:checked").click();       
                    }
                   else {
                       console.log("neceeee");
                    $("#load-oglas").fadeIn().delay(4000).fadeOut();
                    $("#oglasi").fadeOut().delay(4200).fadeIn()
                    $("#forma-novi-oglas").delay(4200).fadeOut();
                    $("#novi-oglas-dugme").text("Dodaj oglas");
                    $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');
                    $("#filter-options :radio").each(function () { $(this).prop("disabled", false);});
                     
                   }  
                   $("#textinputNumber").val("");
                 $('#textarea').val("");
                 $('#textinput').val(""); 
              });
        }
        $("#textinputNumber").val("");
                 $('#textarea').val("");
                 $('#textinput').val(""); 
        $("#filter-options").find('radio[value ='+tip+']').attr("checked", "true");


    return false;
});

$("#button2id").click(function () { 
    $("#textinputNumber").val("");
                 $('#textarea').val("");
                 $('#textinput').val(""); 
    $("#forma-novi-oglas").fadeOut();
    $("#novi-oglas-dugme").text("Dodaj oglas");
    $("#novi-oglas-dugme").append('&nbsp;<i class="fas fa-plus"></i>');
    console.log($("#filter-options"));
    //$("#filter-options").each(function () { $(this).removeAttr('disabled');});
    $("#filter-options :radio").each(function () { $(this).prop("disabled", false);});
    return false;
});

//treba da na click uzmes token i posaljes na back i da posaljes podatke zaj sa podacima iz forme 