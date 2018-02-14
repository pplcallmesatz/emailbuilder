// Image
function imageEdit(e, samp){
    var dataContent = $("#cards").attr("data-content");
    
    
    if (dataContent === "none"){
        console.log(true);  
    }
    else {
        dataEditor("true");
           $(".editor").html("Enter your content");
   $(".currentAdding").append("<div class=\"indiImage\"><img src=\"https://getuikit.com/v2/docs/images/placeholder_600x400.svg\" class=\"image-content\"  width=\"100%\" id=\"imageData\" alt=\"image\"></div>");
      
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




