$(document).ready(function () {
    $(".links .link").on("click", function () {
        let href = $(this).attr("href");

        $("html, body").animate(
            {
                scrollTop: $(href).offset().top,
            },
            "300"
        );
    });
});
