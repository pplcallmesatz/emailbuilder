var clickable = $(".clickable"),
    parentDiv = $(".parent-div"),
    
    //Layout action
    dragHandle = $(".drag-handle"),
    deleteHandle = $(".delete-handle"),
    layerHover = $(".layerHover"),
    
    //Layout empty content
    emptyContent = $(".empty-content"),
    layoutAction = $(".layoutAction"),

    rightMenu = $(".right-menu");
    





deleteFunction = function(e) {
    $(e).parent().remove();
}

 function removeLayoutSettingElement(e) {
     $(e).find('.layoutAction').remove();
     $(e).removeClass("layout-hover");
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
}

//Show the content menu
function showContentMenu(e){
    console.log(e.target);
    rightMenu.find(".card-action").addClass("in");
    
}
   








$(document).ready(function(){
        
        $(".layoutAction").on("click",deleteHandle,function(event){         
            deleteLayout(this);
        });
        
        
        $(".clickable").hover(function(){

        });        
});
    
    
    // Structure hover
        $(document).on("mouseenter", ".parent-div", function(e) {
             addLayoutSettingElement(this);
              
            
});

  $(document).on("mouseleave", ".parent-div", function(e) {
     removeLayoutSettingElement(this);
//      console.log(e.target);
      
  });

    
 

 
    






//onclick="sample($(this))