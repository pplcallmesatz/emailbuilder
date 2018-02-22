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
    var layoutLength = $(e).find(".layoutAction").length;
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
         var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"></div><div class=\"editData\" onClick=\"editImage($(this))\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\"><path fill=\"#FFF\" fill-rule=\"nonzero\" d=\"M15.964 18l1.04-.989-1.363-1.295-1.04.989v.477h.86V18h.503zm3.946-6.136c-.095-.091-.194-.088-.296.008l-3.139 2.983c-.101.097-.104.19-.009.281.096.091.195.088.296-.008l3.14-2.983c.101-.097.104-.19.008-.281zm.718 5.062v1.62c0 .676-.253 1.254-.758 1.734s-1.114.72-1.825.72h-7.462c-.712 0-1.32-.24-1.825-.72C8.253 19.8 8 19.222 8 18.545v-7.09c0-.677.253-1.255.758-1.735A2.555 2.555 0 0 1 10.583 9h7.462c.377 0 .726.071 1.05.213.089.04.143.105.16.196a.257.257 0 0 1-.08.247l-.44.418a.272.272 0 0 1-.287.068 1.674 1.674 0 0 0-.403-.051h-7.462c-.395 0-.732.133-1.013.4a1.281 1.281 0 0 0-.422.964v7.09c0 .375.14.696.422.964.28.267.618.4 1.013.4h7.462c.394 0 .732-.133 1.013-.4.281-.268.422-.589.422-.964v-1.073c0-.074.027-.137.08-.188l.575-.545a.28.28 0 0 1 .313-.06c.12.045.18.128.18.247zm-.861-6.29l2.583 2.455-6.027 5.727H13.74v-2.454l6.027-5.728zm3.982 1.125l-.825.784-2.583-2.454.825-.784a.853.853 0 0 1 .61-.239c.239 0 .442.08.61.239l1.363 1.295a.77.77 0 0 1 .251.58.77.77 0 0 1-.251.58z\"/></svg></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
    html = $.parseHTML( str );
     $(e).append(html);
     }
  if ((dataEditor != "true")&&(data === "button")){
         var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"> </div><div class=\"editData\" onClick=\"buttonEditData($(this))\"><img src=\"assets/img/edit.svg\" alt=\"edit\"></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
    html = $.parseHTML( str );
     $(e).append(html);
     }
        if ((dataEditor != "true")&&(data === "html")){
         var str = "<div class=\"contentAction\"><div class=\"addData\" onClick=\"addData($(this))\"><img src=\"assets/img/plus.svg\" alt=\"add\"> </div><div class=\"editData\" onClick=\"htmlData($(this))\"><img src=\"assets/img/edit.svg\" alt=\"edit\"></div><div class=\"deleteData\" onClick=\"deleteData($(this))\"><img src=\"assets/img/trash.svg\" alt=\"delete\"></div></div>";
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
        $(".textContent").html(CopiedData);
        $(".textContent").removeClass("textContent");
        $(".currentEditing").removeClass("currentEditing");
        dataEditor("false");
        tabposition("layouts");
    }
    else if(e === "image"){
        $(".block-body-image").removeClass("in");
        
        if(imageData === ""){
            $(".addedEditables").addClass("empty-content").attr("onclick","showContentMenu($(this));").css({
                "text-align": "center",
                "padding":"15px 5px"
            }).removeClass("indiImage");
              $(".addedEditables").html("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"59\" viewBox=\"0 0 54 59\"><g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"54\" height=\"59\" fill=\"#1B72F8\" rx=\"4\"/><path fill=\"#DDEAFE\" d=\"M31 43h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm12 3.61c0-.107-.012-.244-.036-.408a5.145 5.145 0 0 0-.107-.529 1.403 1.403 0 0 0-.212-.477c-.094-.13-.199-.196-.315-.196a.905.905 0 0 0-.194.02.494.494 0 0 0-.163.067 1.416 1.416 0 0 0-.252.205l-.132.126c-.116.105-.285.185-.506.24-.222.056-.465.09-.73.103-.265.012-.53.021-.797.025s-.534.017-.802.039a3.048 3.048 0 0 0-.647.108 4.27 4.27 0 0 0-.91.407 3.867 3.867 0 0 0-.762.593 2.534 2.534 0 0 0-.531.786 2.33 2.33 0 0 0-.194.937c0 .15.013.299.04.443.006.029.03.091.071.188.042.097.063.15.063.162 0 .054-.046.122-.138.204a3.208 3.208 0 0 1-.304.239c-.11.077-.211.17-.304.28-.092.109-.138.213-.138.312a.244.244 0 0 0 .045.141l.026.047c.051.082.091.142.121.179.03.037.076.07.138.102a.505.505 0 0 0 .228.047c.086 0 .176-.045.268-.136.092-.091.17-.19.234-.299.064-.108.131-.207.201-.298.07-.09.129-.136.176-.136.069 0 .212.052.43.157.216.105.347.165.392.18.41.133.836.2 1.277.2a4.46 4.46 0 0 0 1.955-.46c.652-.31 1.184-.691 1.596-1.143.412-.451.687-.995.824-1.632.06-.278.089-.552.089-.822zm-2.286.845a.256.256 0 0 1-.085.191.281.281 0 0 1-.2.081c-.542 0-1.009.074-1.4.222-.391.148-.79.398-1.199.75-.06.054-.159.148-.299.281-.14.134-.25.234-.33.303a.302.302 0 0 1-.201.08.281.281 0 0 1-.2-.08.256.256 0 0 1-.086-.192c0-.068.029-.132.085-.192a7.294 7.294 0 0 1 1.051-.935c.338-.24.724-.43 1.159-.571.434-.14.908-.211 1.42-.211.077 0 .144.027.2.08a.256.256 0 0 1 .085.193zM8 6h38a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm27 9.222c0-.216-.022-.489-.067-.819-.045-.33-.112-.681-.2-1.056a2.9 2.9 0 0 0-.398-.955c-.176-.261-.373-.392-.59-.392-.135 0-.256.013-.365.038a.896.896 0 0 0-.305.137c-.095.065-.17.122-.226.17a4.7 4.7 0 0 0-.247.239l-.247.251c-.218.21-.534.371-.95.482a6.64 6.64 0 0 1-1.369.204c-.496.026-.994.043-1.494.051-.5.009-1 .035-1.502.077-.503.043-.907.115-1.214.217a7.767 7.767 0 0 0-1.708.814 7.336 7.336 0 0 0-1.427 1.185 5.1 5.1 0 0 0-1.36 3.447c0 .302.025.597.075.887.011.057.056.182.134.375.078.193.117.301.117.324 0 .108-.086.244-.26.409a6.09 6.09 0 0 1-.568.477c-.207.154-.397.34-.57.558-.173.22-.259.428-.259.627a.519.519 0 0 0 .038.196c.008.017.023.045.046.085a3.74 3.74 0 0 0 .276.452.778.778 0 0 0 .26.204c.117.063.259.094.426.094.162 0 .33-.09.503-.273.173-.182.319-.38.439-.596.12-.216.246-.415.377-.597.13-.182.241-.273.33-.273.129 0 .397.105.804.316.407.21.653.33.736.358.77.267 1.569.4 2.394.4 1.25 0 2.473-.307 3.667-.92 1.222-.62 2.22-1.38 2.992-2.284.773-.904 1.288-1.992 1.545-3.265A8.355 8.355 0 0 0 35 15.222zm-4.286 1.687a.529.529 0 0 1-.159.384.51.51 0 0 1-.376.162c-1.016 0-1.89.147-2.625.443-.733.295-1.483.795-2.247 1.5-.112.108-.299.295-.56.562-.263.267-.47.469-.62.605a.548.548 0 0 1-.377.162.51.51 0 0 1-.377-.162.529.529 0 0 1-.159-.383c0-.137.053-.264.16-.384.68-.767 1.337-1.39 1.97-1.87a7.754 7.754 0 0 1 2.173-1.142 8.107 8.107 0 0 1 2.662-.422.51.51 0 0 1 .376.162.529.529 0 0 1 .16.383z\" opacity=\".7\"/><rect width=\"42\" height=\"2\" x=\"6\" y=\"34\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"42\" height=\"2\" x=\"6\" y=\"38\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"43\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"47\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/><rect width=\"20\" height=\"2\" x=\"6\" y=\"51\" fill=\"#DDEAFE\" opacity=\".7\" rx=\"1\"/></g></svg><p class=\"empty-content\">Click here to add contents</p>");
            dataContent("none");
            $(".addedEditables").removeClass("addedEditables")
            
        }
        else{
            $(".addedEditables").html(imageData);
            $(".addedEditables").removeClass("addedEditables")
        }
        $("#imageData").attr("id","");
        $(".imageUrl").removeClass("imageUrl");
        dataEditor("false");
        tabposition("layouts");
    }
    else if(e === "button"){
        $(".block-body-button").removeClass("in");
        $(".buttonNowEditing").removeClass("buttonNowEditing");
        $(".currentEditing").removeClass("currentEditing");
         $(".addedEditables").removeClass("addedEditables")
        dataEditor("false");
        tabposition("layouts");
    }
    else if(e === "html"){
        $(".block-body-html").removeClass("in");
        var dv = $(".htmlNowEditing").attr("data-html");
        if (dv === "newEdit"){
            var hd = $(".htmlData").val();
            if (hd === ""){
                 $(".htmlNowEditing").html("Your code goes here");
            }
        }
        else {
        $(".htmlNowEditing").html(CopiedHtmlData);
        }
        $(".htmlNowEditing").removeClass("htmlNowEditing");
        dataEditor("false");
        tabposition("layouts");
        $(".currentEditing").removeClass("currentEditing");
         $(".addedEditables").removeClass("addedEditables")
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
    $(".addedEditables").removeClass("addedEditables");
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


$(document).on("mouseenter", ".indiHtml", function(e) {
             addContentSettings(this, "html");
              });


  $(document).on("mouseleave", ".indiHtml", function(e) {
     removeContentSettings(this, "html");
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
                dddd.removeClass("indiHtml");
                      }
     else if (data === "image"){
       
               dddd.removeClass("indiText");
               dddd.removeClass("indiButton");
               dddd.removeClass("indiHtml");
              
        }
    else if (data === "text"){
               dddd.removeClass("indiButton");
               dddd.removeClass("indiImage");
               dddd.removeClass("indiHtml");
               }  
    else if (data === "html"){
               dddd.removeClass("indiButton");
               dddd.removeClass("indiImage");
               dddd.removeClass("indiText");
               }
    
}

    

 $("#textColor").spectrum({
                color: "#f00",
                preferredFormat: "rgb",
                showInput: true
            });
            $("#btnBgColor").spectrum({
                color: "#f00",
                preferredFormat: "rgb",
                showInput: true
            });
            $("#pageBgColor").spectrum({
                color: "rgb(230, 230, 230)",
                preferredFormat: "rgb",
                showInput: true
            });
            $("#cntBg").spectrum({
                color: "rgb(255, 255, 255)",
                preferredFormat: "rgb",
                showInput: true
            });
             pageBgColor();
            contentBg();
            pagePaddingg();
            $("#pageBgColor").on("change", function(){
                pageBgColor();
            })   

            $(".pagePaddingg").on("keyup", function(){
               pagePaddingg();
            })
            $("#cntBg").on("change", function(){
            contentBg();
            });

function pagePaddingg(){
       var pgPad = $(".pagePaddingg").val();
                $("#cards").css("padding",  pgPad + "px");
}
function contentBg(){
        var cntBg = $("#cntBg").val();
                $(".cntBg").val(cntBg);
                $("table").each(function(){
                   $(this).css("background-color", cntBg); 
                });
}

function pageBgColor(){

       var bgCol = $("#pageBgColor").val();
                $(".pageBgColor").val(bgCol);
                $("#cards").css("background-color", bgCol);
}
function resetEmailSetting(){
    var pageBg = "rgb(230, 230, 230)";
    var cntBg = "rgb(255, 255, 255)";
    var pagePad = "10";
    
    $("#cntBg").val(cntBg);
    $(".cntBg").val(cntBg);
     $("table").each(function(){
                   $(this).css("background-color", cntBg); 
                });
    $(".pagePaddingg").val(pagePad);
    $("#cards").css("padding",pagePad+ "px");
    
    $("#pageBgColor").val(pageBg);
    $("#cards").css("background-color", pageBg);
    
}



