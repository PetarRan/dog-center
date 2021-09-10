var rateNewReview=1;
var descNewReview;
var avatarNewReview;
var usernameNewReview;
var dateNewReview;

function formazaNovurec(id ){
$(".forma-nova-recenzija"+id).html(
`<div class="container"  ">
    <div class="row" style="margin-top:40px;">
    <div class="col-md-6">
    <div class="well well-sm">
        <div class="text-right">
            <a class="btn btn-dark btn-green open-review-box" id="ostRec_`+id +`" href="#reviews-anchor">Ostavite recenziju <i class="fas fa-plus"></i></a> 
        </div>
    
        <div class="row post-review-box" id="po_`+id +`" style="display:none;" >                                                                         
            <div class="col-md-12">
                <div accept-charset="UTF-8"  >
                    
                    <input class="ratings-hidden" name="rating" type="hidden">                                                          
                    <textarea class="form-control animated new-review" id="desc_`+id +`"  cols="50" name="comment" placeholder="..." rows="5"></textarea>  
    
                    <div class="text-right">
                        <div class="stars starrr text-primary" data-rating="0">
                        <span type="button" class="glyphicon .glyphicon-star-empty glyphicon-star-empty" broj=1></span>
                        <span type="button" class="glyphicon .glyphicon-star-empty glyphicon-star-empty" broj=2></span>
                        <span type="button" class="glyphicon .glyphicon-star-empty glyphicon-star-empty" broj=3></span>
                        <span type="button" class="glyphicon .glyphicon-star-empty glyphicon-star-empty" broj=4></span>
                        <span type="button" class="glyphicon .glyphicon-star-empty glyphicon-star-empty" broj=5></span>
                        </div>
                        <a class="btn btn-danger close-review-box" id="`+ id+`_closeButt" href="#" style=" margin-right: 10px;">                
                        <span class="glyphicon glyphicon-remove"></span></a>
                        <button class="btn btn-success" id="`+ id+`_suceButt" >Sacuvaj</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
     
    </div>
    </div>
</div>`);
 $("#ostRec_"+id).click(function(){
    var toka = localStorage.getItem("tokenLogin");
  
    $("#ostRec_"+id).hide();
    $("#po_"+id).fadeIn();
    $("span[broj]").click(function()
    {
        var br = $(this).attr("broj");
        rateNewReview =br;
        while(br>0){
            $("span[broj="+br+"]").removeClass("glyphicon-star-empty");
            $("span[broj="+br+"]").addClass("glyphicon-star");
            br--;
        }

    });
    $("#"+id+"_suceButt").click(function(){
        
        descNewReview= $("#desc_"+id).val();
        

        var tok = localStorage.getItem("tokenLogin");
      
        usernameNewReview = JSON.parse(tok)['user'];
     
        fetch("https://localhost:5001/DogService/AddServiceReview/"+id + "/"+usernameNewReview ,{
            method:'POST',
            body: JSON.stringify({
                userId : 0,
                rDescription : descNewReview,
                postDate: "7/8/2021",
                 rate: rateNewReview
                }),
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
               }
            }).then(resp => {
                if (resp.status == 200) {
                    resp.json().then(data => {
                        
                        avatarNewReview =data['avatar'];
                        
                        dateNewReview = data['rewpd'];
                        $("#"+id +"_rate").empty();
                        crtajOcenu(document.getElementById(id +"_rate"),data['newAwgRate'],data['newAwgRate']);
                        nacrtajRecenzije(avatarNewReview,usernameNewReview ,dateNewReview,descNewReview,rateNewReview,id);
                        

                        $("#desc_"+id).val("");
                        $("span[broj]").each(function(){
                            if($(this).hasClass("glyphicon-star")){
                                $(this).removeClass("glyphicon-star");
                                $(this).addClass("glyphicon-star-empty");
                            }
                            
                        })
                        $("#po_"+id).fadeOut();
                        $("#ostRec_"+id).fadeIn();
                    
                 
                }); 
            } else {
            //mozda neko obavestenje nema liked services
                }
        });
        
    });

});
}


var listaobjekti;
var reviews;
function uzmiPodatkeObjekati(){

    fetch("https://localhost:5001/DogService/GetServices").then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {

                listaObjekti = data;
               
                listaObjekti.forEach(element => {
                    crtajObjekat(element.id,element.type,element.name,element.webLink,element.avgRate,element.address,element.phoneNumber)
                    uzmiPodatkeReviews(element.id);
                    formazaNovurec(element.id );
                    
                 
                }); 
            }); 
        }
        else {
            //mozda neko obavestenje nema liked services
        }
    });
}
function uzmiPodatkeReviews(id){
    fetch("https://localhost:5001/DogService/GetServicessReviews/"+id).then(resp => {

        if (resp.status == 200) {
            resp.json().then(data => {
            
                 data.forEach(el=>{
                   
                    nacrtajRecenzije(el.value['avatar'], el.value['username'],el.value['datumPostavlajnja'],el.value['opis'],el.value['rate'], id,el.value['userId'],el.value['ime'],el.value['email'],el.value['brojOglasa']);
                    
                 })
                

            });
        }
        else {
            //mozda neko obavestenje nema liked services
        }
    });
}

$(document).ready(function () {
    
    uzmiPodatkeObjekati();
    
});

$(".button-recenzija").click(function () {
    
    if ($($(this).parent().parent().siblings(".recenzije")).is(":visible")) {
        $(this).parent().parent().siblings(".recenzije").delay(100).fadeOut();
        $(this).html('<i class="fas fa-plus"></i>');
    }
    else {
        $(this).parent().parent().siblings(".recenzije").delay(100).fadeIn();
        $(this).html('<i class="fas fa-times"></i>');
    }

    return false;

});

$("#sortDugme").click(function(){
    
    ul = $('#objekti-list'); // your parent ul element
    ul.children().each(function(i,li){ul.prepend(li)})

});