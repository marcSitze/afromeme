"use strict";
$(function () {
    $('#colapseBtn').on('click', function () {
        $('#navbarResponsive').slideToggle();
    });
});
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: '.pop-img',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
// hide and show scroll to top
$(function () {
    //const position = window.scrollTop();
    $(window).scroll(function () {
        var position = $(window).scrollTop();
        console.log(position);
        // $("#bact-to-top").fadeIn();
        // $("#bact-to-top").hide();
        if (position > 50) {
            $("#back-to-top").removeClass('d-none');
            $("#back-to-top").fadeIn();
        }
        else {
            $("#back-to-top").fadeOut();
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
$(document).ready(function () {
    $('.input').focus(function () {
        $(this).parent().find(".label-txt").addClass('label-active');
    });
    $(".input").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".label-txt").removeClass('label-active');
        }
        ;
    });
});
// show name of image on form
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
$(function () {
    $('.comment').on('click', function () {
        $('.comment-input').toggle();
    });
});
