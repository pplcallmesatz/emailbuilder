var clickable = $(".clickable")
    , parentDiv = $(".parent-div")
    , dragHandle = $(".drag-handle")
    , deleteHandle = $(".delete-handle")
    , layerHover = $(".layerHover")
    , layoutAction = $(".layoutAction");




function removeLayoutSettingElement(e) {
    $(e).find('.layoutAction').remove();
    $(e).removeClass("layout-hover");
}

function addLayoutSettingElement(e) {
    var str = "<div class=\"layoutAction\"><div class=\"drag-handle\"><img src=\"st/icon-drag.png\"></div><a class=\"delete-handle\"  onclick=\"deleteLayout($(this))\"><img src=\"st/icon-drag.png\"></a></div>"
        , html = $.parseHTML(str);
    $(e).append(html);
    $(e).addClass("layout-hover");
}

function deleteLayout(e) {
    var s = $(e).parent().parent().remove();
}



$(document).ready(function () {
    $(".layoutAction").on("click", ".delete-handle", function (event) {
        deleteLayout(this);
    });
    $(".clickable").hover(function () {});
});
// Structure hover

$(document).on("mouseenter", ".clickable", function (e) {
    addLayoutSettingElement(this);
});

$(document).on("mouseleave", ".clickable", function (e) {
    removeLayoutSettingElement(this);
    //      console.log(e.target);
});

