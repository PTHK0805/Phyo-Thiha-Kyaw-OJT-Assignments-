$(document).ready(function () {
    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            //$('.gnav').css('right','0')
            $(".gnav").animate({
                right: "0",
            })
        }

        else {
            //$('.gnav').css('right','-300px')
            $(".gnav").animate({
                right: "-300px"
            })
        }
    });
})
