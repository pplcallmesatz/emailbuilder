//var clickable = $(".clickable"),
//    parentDiv = $(".parent-div"),
//    
//    //Layout action
//    dragHandle = $(".drag-handle"),
//    deleteHandle = $(".delete-handle"),
//    layerHover = $(".layerHover"),
//    
//    //Layout empty content
//    emptyContent = $(".empty-content"),
//    layoutAction = $(".layoutAction"),
//    clickedThis = $(".clickedThis"),
//
//    rightMenu = $(".right-menu"),
//    topNav = $(".topnav");
//var currentClick = "";
//
//
//
//
//
//
//tinymce.init({
//    selector: 'div.editor',
//    inline: true,
//    menubar: false,
//    plugins: [
//    " autolink link image lists   hr  pagebreak",
//    "contextmenu textcolor paste textcolor colorpicker textpattern"
//  ],
//
//    toolbar1: "bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect  fontselect fontsizeselect",
//    toolbar2: "bullist numlist | outdent indent blockquote | undo redo | link unlink | forecolor backcolorhr | subscript superscript",
//    content_css: [],
//    init_instance_callback: function (editor) {
//        console.log("Editor: " + editor.id + " is now initialized.");
//    },
//    setup: function (editor) {
//        editor.on('change', function (e) {
//
//            //        console.log(e)
//
//            //        var hm = $(".editor").html();
//            //        console.log(hm);
//            //        $("[data-text=\"newEdit\"]").html(hm);
//
//            console.log("change");
//            change();
//        });
//    }
//
//
//});
//
//
//
////Text
//function textEdit(e, samp){
//    var dataContent = $("#cards").attr("data-content");
//    dataEditor("true");
//    
//    if (dataContent === "none"){
//        console.log(true);  
//    }
//    else {
//           $(".editor").html("Enter your content");
//   $(".currentAdding").append("<div class=\"indiText\"><div class=\"textContent\" data-text=\"newEdit\">Enter your content</div></div>");
//      
//        $(".currentAdding .empty-content").remove();
//    $(".block-body-text").addClass("in");
//        
//            $(".currentAdding").each(function(){
//        $(this).removeClass("currentAdding");
//    })
//    $(e).parent().addClass("currentAdding");
//        
//    }
// 
//         
//}
//
//
//
//$(".editor").keyup(function(){
//    
//    var htmll = $(this).html();
//    console.log(htmll);
//    $(".textContent").html(htmll);
//});
//
////Make clickable 
//
//function change(){
//    console.log("changecalled");
//    var hm = $(".editor").html();
//    $(".textContent").html(hm);
//}
//
//
//
//
//
//function editData(e){
//// var ddd= $(e).parent().addClass("currentEditing").find(".textContent").attr("data-text");
//    var dddd = $(e).parent().prev().addClass("textContent");
//    var ddddd = $(e).parent().prev().attr("class");
//    console.log(ddddd);
//    var rr = $(".textContent").attr("data-text");
//    console.log(rr);
//    tabposition("blocks");
//        $(".block-body-text").addClass("in");
//    if(rr === "edited"){
//        
//        dataEditor("true");
//        
//       var hhttmmll  = $(e).parent().parent().addClass("currentEditing").find(".textContent").html();
//        var cacheData = cacheStorage(hhttmmll);
//        $(".editor").html(hhttmmll);
//        $(e).parent().addClass("currentEditing")
//    }
//    
//    clickableParentEdit(e);
//    
//    
//}
