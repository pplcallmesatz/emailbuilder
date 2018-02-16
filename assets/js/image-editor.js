// Image
function imageEdit(e, samp){
    var dataContent = $("#cards").attr("data-content");
    resetEditable(e, "image");
    
    if (dataContent === "none"){
//        console.log(true); 
           alert("Please select the element in the left to add contents.")  
    }
    else {
        dataEditor("true");
           $(".addedEditables").attr("style","");
        $(".addedEditables").attr("onClick","");
        $(".addedEditables").addClass("indiImage").removeClass("empty-content").html("<img src=\"https://getuikit.com/v2/docs/images/placeholder_600x400.svg\" class=\"image-content\"  style=\"max-width:100%\" id=\"imageData\" alt=\"image\">")
        $(".currentAdding .empty-content").remove();
    $(".block-body-image").addClass("in");
        
            $(".currentAdding").each(function(){
        $(this).removeClass("currentAdding");
    })
    $(e).parent().addClass("currentAdding");
        
    }
 
         
}




//Image upload


function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("imageData").src       = e.target.result;
//      document.getElementsByClassName("image-content").innerHTML = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  
}

document.getElementById("inp").addEventListener("change", readFile);



function imgPlacement(placement , e){
    if(placement === "left"){
       
        imgPlacementActiveToggler(e);
        $(".addedEditables").css("text-align", "left").find("img").css({
            "display": "inline-block",
            "width": "auto",
        });
         $(e).addClass("active"); 
    }
    else if(placement === "right"){
        imgPlacementActiveToggler(e);

        $(".addedEditables").css("text-align", "right").find("img").css({
            "display": "inline-block",
            "width": "auto"
        });
        $(e).addClass("active"); 
    }
     else if(placement === "center"){
         imgPlacementActiveToggler(e);
        $(".addedEditables").css("text-align", "center").find("img").css({
            "display": "inline-block",
            "width": "auto"
        });
         $(e).addClass("active"); 
    }
     else if(placement === "block"){
         imgPlacementActiveToggler(e);
        $(".addedEditables").css("text-align", "center").find("img").css({
            "display": "block",
            "width": "100%"
        });
         $(e).addClass("active"); 
    }
}


function imgPlacementActiveToggler(){
     $(".imgPlacement").each(function(){
          $(this).removeClass("active");
        })
     
}

$(".img-url").on("keyup , change", function(){
var urlValue = $(this).val();
    $(".imageUrl").attr("href", urlValue);
    
    if ($(".addedEditables").find("a").hasClass("imageUrl")){
        
    }
    else{
    moveToLink();
        }
});


function moveToLink(){
var imgUrlVal = $(".img-url").val();
if (imgUrlVal != ""){
    $(".addedEditables").append("<a href=\"\" class=\"imageUrl\" target=\"_blank\"></a>");
      var imageData = $('#imageData').detach();
    $(imageData).appendTo(".imageUrl")
   
}
    }