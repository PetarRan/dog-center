$(document).ready(function () {
    $("#search-text").keyup(function () {
        var filter = $(this).val();
        $(".search1").each(function () {

            if ($(this).children('.search-obj').children('a').text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });
    $("#resp-search-dugme").keyup(function () {
        console.log("ggfhjgj");
        var filter = $(this).val();
        $(".search-obj").each(function () {

            if ($(this).children('a').text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });
});
