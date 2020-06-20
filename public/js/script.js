$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true 
        }
    });
  
});      
      
// Smooth Scrolling
$(function () { 
 
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault(); 
 
        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");
   
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64 
        }, 1250, "easeInOutExpo");
 
    }); 
 
});     
         
 
// FORM JS     
$(document).ready(function(){ 

    $('.input').focus(function(){ 
      $(this).parent().find(".label-txt").addClass('label-active');
    });
  
    $(".input").focusout(function(){ 
      if ($(this).val() == '') { 
        $(this).parent().find(".label-txt").removeClass('label-active');
      };
    }); 
  
  }); 

// show name of image on form
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  }); 
 
 
     