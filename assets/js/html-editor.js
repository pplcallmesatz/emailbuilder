// Image
function htmlEdit(e, samp){
    var dataContent = $("#cards").attr("data-content");
    resetEditable(e, "html");
    
    if (dataContent === "none"){
        console.log(true);  
    }
    else {
        dataEditor("true");
 
//            var fileName = input.html();
        $(".addedEditables").attr("style","");
        $(".addedEditables").attr("onClick","");
           $(".addedEditables").addClass("indiHtml").removeClass("empty-content").html("<div data-html=\"newEdit\" class=\"htmlNowEditing\">Your html content here</a>");

    $(".block-body-html").addClass("in");
        
            $(".currentAdding").each(function(){
        $(this).removeClass("currentAdding");
    })
    $(e).parent().addClass("currentAdding");
        
    }
 
         
}
function htmlData(e){
// var ddd= $(e).parent().addClass("currentEditing").find(".textContent").attr("data-text");
    var dddd = $(e).parent().prev().addClass("htmlNowEditing");
    var ddddd = $(e).parent().prev().attr("class");
    CopiedHtmlData = $(".htmlNowEditing").html();
    var rr = $(".htmlNowEditing").attr("data-html");
    console.log(rr);
    tabposition("blocks");
        $(".block-body-html").addClass("in");
    if(rr === "edited"){
        
        dataEditor("true");
        
       var hhttmmll  = $(e).parent().parent().addClass("currentEditing").find(".htmlNowEditing").html();
//        var cacheData = cacheStorage(hhttmmll);
        $(".htmlData").val(hhttmmll);
        $(e).parent().addClass("currentEditing")
    }
    
    clickableParentEdit(e);
    
    
}


$(".htmlData").keyup(function(){
    
    var htmll = $(this).val();
    console.log(htmll);
    $(".htmlNowEditing").html(htmll);
});

//<h1>satheesh</h1>