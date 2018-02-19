    // Image
    function imageEdit(e, samp){
        var dataContent = $("#cards").attr("data-content");
        resetEditable(e, "image");

        if (dataContent === "none"){
    //        console.log(true); 
               alert("Please select the element in the left to add contents.")  
        }
        else {
            dataEditor("true");
               $(".addedEditables").attr("style","");
            $(".addedEditables").attr("onClick","");
            $(".addedEditables").addClass("indiImage").removeClass("empty-content").html("<img src=\"https://getuikit.com/v2/docs/images/placeholder_600x400.svg\" class=\"image-content\"  style=\"max-width:100%\" id=\"imageData\" alt=\"image\">")
            $(".currentAdding .empty-content").remove();
        $(".block-body-image").addClass("in");

                $(".currentAdding").each(function(){
            $(this).removeClass("currentAdding");
        })
        $(e).parent().addClass("currentAdding");

        }

    moveToLink();
    moveOutToLink();

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

    var imageData= ""

    function editImage(e){
        var imgCnt = $(".image-content");
          tabposition("blocks");
            $(".block-body-image").addClass("in");
        $(e).parent().parent().addClass("addedEditables");
            resetEditable(e, "image");
        dataEditor("true");
         var btnPosition =  $(".addedEditables").attr("data-position");
            imgPlacement(btnPosition);
          clickableParentEdit(e);
        if ($(e).parent().prev().is("a")){
                 $(e).parent().prev().addClass("imageUrl").find(".image-content").attr("id","imageData");
                var imageLink = $(".imageUrl").attr("href");
                var imageSrc = $(".imageUrl").find("#imageData").attr("src");
            $(".contentAction").remove();
            imageData = $(".addedEditables").html();
            $(".img-url").val(imageLink);


        }
        else {
            $(e).parent().prev().attr("id","imageData");
             var imageSrc = $("#imageData").attr("src");
            $(".contentAction").remove();
             imageData = $(".addedEditables").html();

        }


    }


    function imgPlacement(placement){
        if(placement === "left"){

            imgPlacementActiveToggler("left");
            $(".addedEditables").css("text-align", "left").find("img").css({
                "display": "inline-block",
                "width": "auto",
            });
            $(".addedEditables").attr("data-position", "left"); 
        }
        else if(placement === "right"){
            imgPlacementActiveToggler("right");

            $(".addedEditables").css("text-align", "right").find("img").css({
                "display": "inline-block",
                "width": "auto"
            });
            $(".addedEditables").attr("data-position", "right");
        }
         else if(placement === "center"){
             imgPlacementActiveToggler("center");
            $(".addedEditables").css("text-align", "center").find("img").css({
                "display": "inline-block",
                "width": "auto"
            });
             $(".addedEditables").attr("data-position", "center"); 
        }
         else if(placement === "block"){
             imgPlacementActiveToggler("block");
            $(".addedEditables").css("text-align", "center").find("img").css({
                "display": "block",
                "width": "100%"
            });
             $(".addedEditables").attr("data-position", "block");         
        }
    }


    function imgPlacementActiveToggler(e){
         $(".imgPlacement").each(function(){
              $(this).removeClass("active");
            })

        if(e === "left"){

                $(".iLeft").addClass("active");
            }
            else if (e === "right"){

                $(".iRight").addClass("active");
            } 
            else if (e === "center"){

                $(".iCenter").addClass("active");
            }
            else if (e === "block"){

                $(".iBlock").addClass("active");
            }

    }





    $(".img-url").on("keyup , change, blur", function(e){
    var urlValue = $(this).val();
        $(".imageUrl").attr("href", urlValue);

        if ($(".addedEditables").find("a").hasClass("imageUrl")){
            moveOutToLink(e);
        }
        else{
        moveToLink(e);
            }
    });


    //     $(".img-url").on("blur",function() {
    //    var input = $(this);
    //    var val = input.val();
    //    alert(val);
    //    if (val && !val.match(/^.+:\/\/.*/)) {
    //        input.val('http://' + val);
    //    }
    //  });
    //    

    function moveToLink(e){
         var input = $(".img-url");
        var val = input.val();
        if (val && !val.match(/^.+:\/\/.*/)) {
            input.val('http://' + val);
        }

    var imgUrlVal = $(".img-url").val();


    if (imgUrlVal != ""){
        $(".addedEditables").append("<a href=\"\" class=\"imageUrl\" target=\"_blank\"></a>");
          var imageData = $('#imageData').detach();
        $(imageData).appendTo(".imageUrl");



        $(".imageUrl").attr("href", imgUrlVal);
       }
      else{

      }


        }

    function moveOutToLink(){

            var imgUrlVal = $(".img-url").val();

            if (imgUrlVal === ""){

                var imData = $(".imageUrl").html();

                $(imData).appendTo(".addedEditables");
                $(".imageUrl").remove();
            }
            else{}


    }