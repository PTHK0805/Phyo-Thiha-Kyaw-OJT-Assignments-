$(document).ready(function () {
    $(".hide").click(function () {
        $(".content").hide();
    });

    $(".show").click(function () {
        $(".content").show();
    });

    $(".doubleClick").dblclick(function () {
        $(".doubleClick").css({ "background-color": "#000", "color": "#fff" });
    });

    $(".fade").mouseenter(function () {
        $(".box3").fadeOut("slow");
        $(".box2").fadeIn(1000);
        $(".box1").fadeToggle();

    });

    $(".mouseleave").mouseleave(function () {
        $(".box3").slideToggle("slow");
        $(".box4").slideUp(1000);
        $(".box5").slideDown(1000);
    });

    $(".mousedown").mousedown(function () {
        $(".box").animate({
            left: '350px',
            top: "100px",
            "font-size": "20px",
            padding: "60px",
            opacity: ".5"
        });
    });

    $(".mouseup").mouseup(function () {
        $(".box").animate({
            left: '500px',
            bottom: "100px",
            "font-size": "20px",
            padding: "60px",
            opacity: ".5"
        });
    });

    $(".hover").hover(
        function () {
            $(".box").css("background-color", "#ebd321");
        },
        function () {
            $(".box").css("background-color", "#21ebda");
        });

    $(".on").on({
        mouseleave: function () {
            $(".box3").slideToggle("slow");
            $(".box4").slideUp(1000)
            $(".box5").slideDown(1000);
        },

        mousedown: function () {
            $(".box").animate({
                left: '350px',
                top: "100px",
                "font-size": "20px",
                padding: "60px",
                opacity: ".5"
            });
        },

        mouseup: function () {
            $(".box").animate({
                left: '500px',
                bottom: "100px",
                "font-size": "20px",
                padding: "60px",
                opacity: ".5"
            });
        }

    });

    $("input").focus(function () {
        $(this).css("box-shadow", "0 0 15px 5px #21ebda");
    });

    $("input").blur(function () {
        $(this).css("background-color", "#de8328");
    });

    $(".append").click(function () {
        $("p").append("<i> Bye... </i>")
    });

    $(".prepend").click(function () {
        $("p").prepend("<b> Hello </b>")
    });

    $(".before").click(function () {
        $("img").before("<i> Hello... </i>")
    });

    $(".after").click(function () {
        $("img").after("<b> ...Bye </b>")
    });


    $(".remove").dblclick(function () {
        $(".img-div").remove()
    });

    $(".empty").dblclick(function () {
        $(".img-div").empty()
    });

    $(".addClass").click(function () {
        $("h3").addClass("heading")
    });

    $(".removeClass").click(function () {
        $("h3").removeClass("heading")
    });

    $(".toggleClass").click(function () {
        $("h3").toggleClass("heading2")
    });

    $(".showtext").click(function () {
        alert($(".gettext").text());
    });

    $(".showhtml").click(function () {
        alert($(".gettext").html());
    });

    $(".showvalue").click(function () {
        alert($(".input-text").val());
    });

    $(".settext").click(function () {
        $(".firstParagraph").text("Hello World");
    });

    $(".sethtml").click(function () {
        $(".secondParagraph").html("<b>Hello World!!!</b>");
    });

    $(".setvalue").click(function () {
        $(".input-text2").val("This is text");
    });

});