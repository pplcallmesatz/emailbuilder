var clickable = $(".clickable"),
    parentDiv = $(".parent-div"),
    
    //Layout action
    dragHandle = $(".drag-handle"),
    deleteHandle = $(".delete-handle"),
    layerHover = $(".layerHover"),
    
    //Layout empty content
    emptyContent = $(".empty-content"),
    layoutAction = $(".layoutAction"),
    clickedThis = $(".clickedThis"),

    rightMenu = $(".right-menu"),
    topNav = $(".topnav");
var currentClick = "";




deleteFunction = function(e) {
    $(e).parent().remove();
}

function dismissBlock(){
    console.log("dkgf");
    tabposition("layouts");
     $("#cards > .parent-div").each(function(){
         $(this).removeClass("currentActive , alreadyClicked");
     });
    removeLayoutSettingElementSupport();
                                    
}

 function removeLayoutSettingElement(e) {
     
     if ($(e).hasClass("currentActive")) {
        
    }
     else{
       $(e).find('.layoutAction').remove();
     $(e).removeClass("layout-hover");  
     }
}
function removeLayoutSettingElementSupport(e){
    $("#cards > .parent-div").each(function(){
    
        if ($(this).hasClass("currentActive")){
            
        }
        else {
            $(this).find('.layoutAction').remove();
     $(this).removeClass("layout-hover");
        }
             });
}

function addLayoutSettingElement(e) {
     var  str = "<div class=\"layoutAction\"><div class=\"drag-handle\"><img src=\"assets/img/move.svg\"></div><div class=\"delete-handle\"  onclick=\"deleteLayout($(this))\"><img src=\"assets/img/trash.svg\"></div></div>",
                     html = $.parseHTML( str );
            $(e).append(html);
    
    $(e).addClass("layout-hover");
    
    
}

function deleteLayout(e){
     var s= $(e).parent().parent().remove();
    pageEmptyContent();
    
    tabposition("layouts");
}



//Edit delete functionality
function addContentSettings(e){
    var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"> </div><div class=\"editData\" onClick=\"editData($(this))\"><img src=\"assets/img/edit.svg\" alt=\"delete\"></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
    html = $.parseHTML( str );
     $(e).append(html);
}
function removeContentSettings(e){
    $(e).find(".contentAction").remove();
}






   
// Right side menu
function tabposition(e){
    if (e == "layouts"){
        topNav.attr("data-position","layouts");
        rightMenuTab(e)
    }
    else if (e == "settings"){
        topNav.attr("data-position","settings");
        rightMenuTab(e)
    }
     else if (e == "blocks"){
        topNav.attr("data-position","blocks");
         rightMenuTab(e)
    }
}
 function rightMenuTab(e){
         var activeTab=$(e).attr("data-tab");
        $(e).parent().parent().attr("data-position", activeTab);
        

//            blocks
             if(((activeTab != "layouts") && (activeTab === "blocks"))   || (e === "blocks")) {
                 
//                  console.log(e);
                      $("[data-target=\"blocks\"]").addClass("in");
                      
                          $("[data-target=\"settings\"]").removeClass("in");
             }            
            
              else if ((activeTab != "layouts") && (activeTab === "settings") || (e == "settings")) {
                $("[data-target=\"settings\"]").addClass("in");
            }
          
                  
                 else {
                     $("[data-target=\"blocks\"]").removeClass("in");
                     $("[data-target=\"settings\"]").removeClass("in");
                 }
        }


//Show the content menu
function showContentMenu(e){
    $(".currentAdding").each(function(){
        $(this).removeClass("currentAdding");
    })
    $(e).parent().addClass("currentAdding");
    tabposition("blocks");
    clickableParent(e);
    removeLayoutSettingElementSupport(); 
    $("#cards").attr("data-content", "block");
//    textEdit(e, "samp");
}



//Clickable class to parent-div
function clickableParent(e){
    console.log($("#cards > .parent-div").length);
//   console.log($(e).parent().attr);
    $(".parent-div").each(function(){
        
        $(this).removeClass("currentActive").addClass("alreadyClicked");
    });
    var d = $(e).parents().eq(4).addClass("currentActive").removeClass("alreadyClicked");
    
}
//Clickable class to parent-div
function clickableParentEdit(e){
    console.log($("#cards > .parent-div").length);
//   console.log($(e).parent().attr);
    $(".parent-div").each(function(){
        
        $(this).removeClass("currentActive").addClass("alreadyClicked");
    });
    var d = $(e).parents().eq(6).addClass("currentActive").removeClass("alreadyClicked");
    
}

function backToBlock(e){
    if (e === "text"){
        $(".block-body-text").removeClass("in");
    }
}



$(document).ready(function(){
        
        $(".layoutAction").on("click",deleteHandle,function(event){         
            deleteLayout(this);
        });
        
        
                
});
    
    
    // Structure hover
        $(document).on("mouseenter", ".parent-div", function(e) {
             addLayoutSettingElement(this);
              });


  $(document).on("mouseleave", ".parent-div", function(e) {
     removeLayoutSettingElement(this);
  });



// Content hover
        $(document).on("mouseenter", ".indiText", function(e) {
             addContentSettings(this);
              });


  $(document).on("mouseleave", ".indiText", function(e) {
     removeContentSettings(this);
  });




    //Right side menu

    $(".navItem").click(function(){
        rightMenuTab(this);
    });
 

//
//








// Add Functionality

function addData(e){
     var str = "<div class=\"empty-content\" onClick=\"showContentMenu($(this));\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"59\" viewBox=\"0 0 54 59\"><g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"54\" height=\"59\" fill=\"#1B72F8\" rx=\"4\"/><path fill=\"#DDEAFE\" d=\"M31 43h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm12 3.61c0-.107-.012-.244-.036-.408a5.145 5.145 0 0 0-.107-.529 1.403 1.403 0 0 0-.212-.477c-.094-.13-.199-.196-.315-.196a.905.905 0 0 0-.194.02.494.494 0 0 0-.163.067 1.416 1.416 0 0 0-.252.205l-.132.126c-.116.105-.285.185-.506.24-.222.056-.465.09-.73.103-.265.012-.53.021-.797.025s-.534.017-.802.039a3.048 3.048 0 0 0-.647.108 4.27 4.27 0 0 0-.91.407 3.867 3.867 0 0 0-.762.593 2.534 2.534 0 0 0-.531.786 2.33 2.33 0 0 0-.194.937c0 .15.013.299.04.443.006.029.03.091.071.188.042.097.063.15.063.162 0 .054-.046.122-.138.204a3.208 3.208 0 0 1-.304.239c-.11.077-.211.17-.304.28-.092.109-.138.213-.138.312a.244.244 0 0 0 .045.141l.026.047c.051.082.091.142.121.179.03.037.076.07.138.102a.505.505 0 0 0 .228.047c.086 0 .176-.045.268-.136.092-.091.17-.19.234-.299.064-.108.131-.207.201-.298.07-.09.129-.136.176-.136.069 0 .212.052.43.157.216.105.347.165.392.18.41.133.836.2 1.277.2a4.46 4.46 0 0 0 1.955-.46c.652-.31 1.184-.691 1.596-1.143.412-.451.687-.995.824-1.632.06-.278.089-.552.089-.822zm-2.286.845a.256.256 0 0 1-.085.191.281.281 0 0 1-.2.081c-.542 0-1.009.074-1.4.222-.391.148-.79.398-1.199.75-.06.054-.159.148-.299.281-.14.134-.25.234-.33.303a.302.302 0 0 1-.201.08.281.281 0 0 1-.2-.08.256.256 0 0 1-.086-.192c0-.068.029-.132.085-.192a7.294 7.294 0 0 1 1.051-.935c.338-.24.724-.43 1.159-.571.434-.14.908-.211 1.42-.211.077 0 .144.027.2.08a.256.256 0 0 1 .085.193zM8 6h38a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm27 9.222c0-.216-.022-.489-.067-.819-.045-.33-.112-.681-.2-1.056a2.9 2.9 0 0 0-.398-.955c-.176-.261-.373-.392-.59-.392-.135 0-.256.013-.365.038a.896.896 0 0 0-.305.137c-.095.065-.17.122-.226.17a4.7 4.7 0 0 0-.247.239l-.247.251c-.218.21-.534.371-.95.482a6.64 6.64 0 0 1-1.369.204c-.496.026-.994.043-1.494.051-.5.009-1 .035-1.502.077-.503.043-.907.115-1.214.217a7.767 7.767 0 0 0-1.708.814 7.336 7.336 0 0 0-1.427 1.185 5.1 5.1 0 0 0-1.36 3.447c0 .302.025.597.075.887.011.057.056.182.134.375.078.193.117.301.117.324 0 .108-.086.244-.26.409a6.09 6.09 0 0 1-.568.477c-.207.154-.397.34-.57.558-.173.22-.259.428-.259.627a.519.519 0 0 0 .038.196c.008.017.023.045.046.085a3.74 3.74 0 0 0 .276.452.778.778 0 0 0 .26.204c.117.063.259.094.426.094.162 0 .33-.09.503-.273.173-.182.319-.38.439-.596.12-.216.246-.415.377-.597.13-.182.241-.273.33-.273.129 0 .397.105.804.316.407.21.653.33.736.358.77.267 1.569.4 2.394.4 1.25 0 2.473-.307 3.667-.92 1.222-.62 2.22-1.38 2.992-2.284.773-.904 1.288-1.992 1.545-3.265A8.355 8.355 0 0 0 35 15.222zm-4.286 1.687a.529.529 0 0 1-.159.384.51.51 0 0 1-.376.162c-1.016 0-1.89.147-2.625.443-.733.295-1.483.795-2.247 1.5-.112.108-.299.295-.56.562-.263.267-.47.469-.62.605a.548.548 0 0 1-.377.162.51.51 0 0 1-.377-.162.529.529 0 0 1-.159-.383c0-.137.053-.264.16-.384.68-.767 1.337-1.39 1.97-1.87a7.754 7.754 0 0 1 2.173-1.142 8.107 8.107 0 0 1 2.662-.422.51.51 0 0 1 .376.162.529.529 0 0 1 .16.383z\" opacity=\".7\"/><rect width=\"42\" height=\"2\" x=\"6\" y=\"34\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"42\" height=\"2\" x=\"6\" y=\"38\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"43\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"47\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"51\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/></g></svg><p class=\"empty-content\">Click here to add contents</p></div>",
                        html = $.parseHTML( str );
    
    var addingNew = $(e).parent().parent().attr("class");
    console.log(addingNew);
    $(e).parent().parent().parent().append(html);
}

// Edit Functionality

function textEdit(e, samp){
    var dataContent = $("#cards").attr("data-content");
    if (dataContent === "none"){
        console.log(true);  
    }
    else {
           $(".editor").html("Enter your content");
   $(".currentAdding").append("<div class=\"indiText\"><div class=\"textContent\" data-text=\"newEdit\">Enter your content</div></div>");
      
        $(".currentAdding .empty-content").remove();
    $(".block-body-text").addClass("in");
    }
 
         
}

function editData(e){
// var ddd= $(e).parent().addClass("currentEditing").find(".textContent").attr("data-text");
    var dddd = $(e).parent().prev().addClass("textContent");
    var ddddd = $(e).parent().prev().attr("class");
    console.log(ddddd);
    var rr = $(".textContent").attr("data-text");
    console.log(rr);
    tabposition("blocks");
        $(".block-body-text").addClass("in");
    if(rr === "edited"){
       var hhttmmll  = $(e).parent().parent().addClass("currentEditing").find(".textContent").html();
        $(".editor").html(hhttmmll);
        $(e).parent().addClass("currentEditing")
    }
    
    clickableParentEdit(e);
    
    
}
$(".editor").keyup(function(){
    
    var htmll = $(this).html();
    console.log(htmll);
    $(".textContent").html(htmll);
});

//Make clickable 

function change(){
    console.log("changecalled");
    var hm = $(".editor").html();
    $(".textContent").html(hm);
}




//Save Functionalities

function saveText(e){
    if (e === "text"){
        $(".block-body-text").removeClass("in");
        $(".testing").removeClass("testing")
        $(".textContent").removeClass("textContent")
       tabposition("layouts");
        $("#cards > .parent-div").each(function(){
           $(this).removeClass("alreadyClicked").removeClass("currentActive");
        });
        $(".currentAdding").removeClass("currentAdding");
        $(".currentEditing").removeClass("currentEditing");
        $("[data-text=\"newEdit\"]").attr("data-text","edited");
        removeLayoutSettingElementSupport();
        $("#cards").attr("data-content", "none");
    }
}




// Delete Functionalities

function deleteData(e){
    
     var str = "<div class=\"empty-content\" onClick=\"showContentMenu($(this));\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"59\" viewBox=\"0 0 54 59\"><g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"54\" height=\"59\" fill=\"#1B72F8\" rx=\"4\"/><path fill=\"#DDEAFE\" d=\"M31 43h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm12 3.61c0-.107-.012-.244-.036-.408a5.145 5.145 0 0 0-.107-.529 1.403 1.403 0 0 0-.212-.477c-.094-.13-.199-.196-.315-.196a.905.905 0 0 0-.194.02.494.494 0 0 0-.163.067 1.416 1.416 0 0 0-.252.205l-.132.126c-.116.105-.285.185-.506.24-.222.056-.465.09-.73.103-.265.012-.53.021-.797.025s-.534.017-.802.039a3.048 3.048 0 0 0-.647.108 4.27 4.27 0 0 0-.91.407 3.867 3.867 0 0 0-.762.593 2.534 2.534 0 0 0-.531.786 2.33 2.33 0 0 0-.194.937c0 .15.013.299.04.443.006.029.03.091.071.188.042.097.063.15.063.162 0 .054-.046.122-.138.204a3.208 3.208 0 0 1-.304.239c-.11.077-.211.17-.304.28-.092.109-.138.213-.138.312a.244.244 0 0 0 .045.141l.026.047c.051.082.091.142.121.179.03.037.076.07.138.102a.505.505 0 0 0 .228.047c.086 0 .176-.045.268-.136.092-.091.17-.19.234-.299.064-.108.131-.207.201-.298.07-.09.129-.136.176-.136.069 0 .212.052.43.157.216.105.347.165.392.18.41.133.836.2 1.277.2a4.46 4.46 0 0 0 1.955-.46c.652-.31 1.184-.691 1.596-1.143.412-.451.687-.995.824-1.632.06-.278.089-.552.089-.822zm-2.286.845a.256.256 0 0 1-.085.191.281.281 0 0 1-.2.081c-.542 0-1.009.074-1.4.222-.391.148-.79.398-1.199.75-.06.054-.159.148-.299.281-.14.134-.25.234-.33.303a.302.302 0 0 1-.201.08.281.281 0 0 1-.2-.08.256.256 0 0 1-.086-.192c0-.068.029-.132.085-.192a7.294 7.294 0 0 1 1.051-.935c.338-.24.724-.43 1.159-.571.434-.14.908-.211 1.42-.211.077 0 .144.027.2.08a.256.256 0 0 1 .085.193zM8 6h38a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm27 9.222c0-.216-.022-.489-.067-.819-.045-.33-.112-.681-.2-1.056a2.9 2.9 0 0 0-.398-.955c-.176-.261-.373-.392-.59-.392-.135 0-.256.013-.365.038a.896.896 0 0 0-.305.137c-.095.065-.17.122-.226.17a4.7 4.7 0 0 0-.247.239l-.247.251c-.218.21-.534.371-.95.482a6.64 6.64 0 0 1-1.369.204c-.496.026-.994.043-1.494.051-.5.009-1 .035-1.502.077-.503.043-.907.115-1.214.217a7.767 7.767 0 0 0-1.708.814 7.336 7.336 0 0 0-1.427 1.185 5.1 5.1 0 0 0-1.36 3.447c0 .302.025.597.075.887.011.057.056.182.134.375.078.193.117.301.117.324 0 .108-.086.244-.26.409a6.09 6.09 0 0 1-.568.477c-.207.154-.397.34-.57.558-.173.22-.259.428-.259.627a.519.519 0 0 0 .038.196c.008.017.023.045.046.085a3.74 3.74 0 0 0 .276.452.778.778 0 0 0 .26.204c.117.063.259.094.426.094.162 0 .33-.09.503-.273.173-.182.319-.38.439-.596.12-.216.246-.415.377-.597.13-.182.241-.273.33-.273.129 0 .397.105.804.316.407.21.653.33.736.358.77.267 1.569.4 2.394.4 1.25 0 2.473-.307 3.667-.92 1.222-.62 2.22-1.38 2.992-2.284.773-.904 1.288-1.992 1.545-3.265A8.355 8.355 0 0 0 35 15.222zm-4.286 1.687a.529.529 0 0 1-.159.384.51.51 0 0 1-.376.162c-1.016 0-1.89.147-2.625.443-.733.295-1.483.795-2.247 1.5-.112.108-.299.295-.56.562-.263.267-.47.469-.62.605a.548.548 0 0 1-.377.162.51.51 0 0 1-.377-.162.529.529 0 0 1-.159-.383c0-.137.053-.264.16-.384.68-.767 1.337-1.39 1.97-1.87a7.754 7.754 0 0 1 2.173-1.142 8.107 8.107 0 0 1 2.662-.422.51.51 0 0 1 .376.162.529.529 0 0 1 .16.383z\" opacity=\".7\"/><rect width=\"42\" height=\"2\" x=\"6\" y=\"34\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"42\" height=\"2\" x=\"6\" y=\"38\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"43\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"47\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"51\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/></g></svg><p class=\"empty-content\">Click here to add contents</p></div>",
                        html = $.parseHTML( str );
                        
    var samp = $(e).parent().parent().parent().addClass("deleteData");
    $(e).parent().parent().remove();
    
    var dumil = $(".deleteData").html();
    console.log(dumil);
    if(dumil === ""){
        console.log("true");
               $(".deleteData").append(html)
        $(".deleteData").removeClass("deleteData");
    }
    else{
        console.log("false");
    }
    
    
                   
    
}




function dataContent(e){
    var dataContent = $("#cards");
    dataContent.attr("data-content",e);
}
//onclick="sample($(this))