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



function addLayoutSettingElement(e) {
    if($(e).hasClass("currentActive")){
    
    }
    else {
    var layoutLength = $(".parent-div .layoutAction").length;
    if(layoutLength === 0){
     var  str = "<div class=\"layoutAction\"><div class=\"drag-handle\"><img src=\"assets/img/move.svg\"></div><div class=\"delete-handle\"  onclick=\"deleteLayout($(this))\"><img src=\"assets/img/trash.svg\"></div></div>",
                     html = $.parseHTML( str );
            $(e).append(html);
    
    $(e).addClass("layout-hover");
        }
    }
    
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



function deleteLayout(e){
     var s= $(e).parent().parent().remove();
    pageEmptyContent();
    dismissBlock();
    tabposition("layouts");
    
}



//Edit delete functionality
function addContentSettings(e, data){
     var dataEditor = $("#cards").attr("data-editor")
     
     if ((dataEditor != "true")&&(data === "text")){
         var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"> </div><div class=\"editData\" onClick=\"editData($(this))\"><img src=\"assets/img/edit.svg\" alt=\"edit\"></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
    html = $.parseHTML( str );
     $(e).append(html);
     }
    else if ((dataEditor != "true")&&(data === "image")){
         var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
    html = $.parseHTML( str );
     $(e).append(html);
     }
  if ((dataEditor != "true")&&(data === "button")){
         var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"> </div><div class=\"editData\" onClick=\"buttonEditData($(this))\"><img src=\"assets/img/edit.svg\" alt=\"edit\"></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
    html = $.parseHTML( str );
     $(e).append(html);
     }
    else{
        
    }
    
    
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
                     $(".block-body-text").removeClass("in");
                     $(".block-body-image").removeClass("in");
                     $(".block-body-button").removeClass("in");
                     $(".block-body-html").removeClass("in");
                 }
        }











function backToBlock(e){
    if (e === "text"){
        $(".block-body-text").removeClass("in");
        $(".textContent").removeClass("textContent");
        dataEditor("false");
    }
    else if(e === "image"){
        $(".block-body-image").removeClass("in");
        $(".imageContent").removeClass("imageContent");
        dataEditor("false");
    }
    else if(e === "button"){
        $(".block-body-button").removeClass("in");
        $(".buttonNowEditing").removeClass("buttonNowEditing");
        dataEditor("false");
    }
   
}







//Save data 


function dataContent(e){
    var dataContent = $("#cards");
    dataContent.attr("data-content",e);
}
function dataEditor(e){
    var dataContent = $("#cards");
    dataContent.attr("data-editor",e);
}
//onclick="sample($(this))





//Dismiss Functionality

function dismissBlock(){
    tabposition("layouts"); 
    dataContent("none");
    dataEditor("false");
     $("#cards > .parent-div").each(function(){
         $(this).removeClass("currentActive , alreadyClicked");
     });
    $(".currentAdding").each(function(){
       $(this).removeClass("currentAdding");
    });
    removeLayoutSettingElementSupport();
                                    
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
             addContentSettings(this,"text");
              });


  $(document).on("mouseleave", ".indiText", function(e) {
     removeContentSettings(this,"text");
  });

$(document).on("mouseenter", ".indiImage", function(e) {
             addContentSettings(this, "image");
              });


  $(document).on("mouseleave", ".indiImage", function(e) {
     removeContentSettings(this, "image");
  });

$(document).on("mouseenter", ".indiButton", function(e) {
             addContentSettings(this, "button");
              });


  $(document).on("mouseleave", ".indiButton", function(e) {
     removeContentSettings(this, "button");
  });




    //Right side menu

    $(".navItem").click(function(){
        rightMenuTab(this);
    });
 

//
//

function resetEditable(e, data){
var dddd = $(".addedEditables");
    if (data === "button"){
                dddd.removeClass("indiText");
                dddd.removeClass("indiImage");
                      }
     else if (data === "image"){
       
               dddd.removeClass("indiText");
               dddd.removeClass("indiButton");
              
        }
    else if (data === "text"){
               dddd.removeClass("indiButton");
               dddd.removeClass("indiImage");
               }
    
}

    





