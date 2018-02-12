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
    tabposition("blocks");
    clickableParent(e);
    removeLayoutSettingElementSupport();
    
}

function textEdit(){
    $(".block-body-text").addClass("in");
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




    //Right side menu

    $(".navItem").click(function(){
        rightMenuTab(this);
    });
 


    

//Make clickable 







//onclick="sample($(this))