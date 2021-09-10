$(document).ready(function () {
    $("#searchObjekti").keyup(function () {
        var filter = $(this).val();
        $("#objekti-list li").each(function () {

            if ($(this).children('.tajDiv').children('h2').text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });
});
