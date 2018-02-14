// Image
function buttonEdit(e, samp){
    var dataContent = $("#cards").attr("data-content");
    
    
    if (dataContent === "none"){
        console.log(true);  
    }
    else {
        dataEditor("true");
        $(".addedEditables").attr("style","");
        $(".addedEditables").attr("onClick","");
           $(".addedEditables").addClass("indiButton").removeClass("empty-content").html("<a href=\"http://www.google.com\">Button</a>");
//   $(".currentAdding").append("<div class=\"indiImage\"><img src=\"https://getuikit.com/v2/docs/images/placeholder_600x400.svg\" class=\"image-content\"  width=\"100%\" id=\"imageData\" alt=\"image\"></div>");
      
//        $(".currentAdding .empty-content").remove();
    $(".block-body-button").addClass("in");
        
            $(".currentAdding").each(function(){
        $(this).removeClass("currentAdding");
    })
    $(e).parent().addClass("currentAdding");
        
    }
 
         
}

