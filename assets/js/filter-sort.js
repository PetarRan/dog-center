$(document).ready(function () {
    $(".filter_petshop").hide();
    $(".filter_hotel").hide();
    $(".filter_frizer").hide();
});

$("#search-button").click(function () {
    if ($("#optgroup-choice").val() == 11) {
        $(".filter_petshop").hide();
        $(".filter_hotel").hide();
        $(".filter_frizer").hide();
        $(".filter_veterinar").show();
    }
    if ($("#optgroup-choice").val() == 12) {
        $(".filter_veterinar").hide();
        $(".filter_hotel").hide();
        $(".filter_frizer").hide();
        $(".filter_petshop").show();
    }
    if ($("#optgroup-choice").val() == 13) {
        $(".filter_petshop").hide();
        $(".filter_veterinar").hide();
        $(".filter_frizer").hide();
        $(".filter_hotel").show();
    }
    if ($("#optgroup-choice").val() == 14) {
        $(".filter_petshop").hide();
        $(".filter_hotel").hide();
        $(".filter_veterinar").hide();
        $(".filter_frizer").show();
    }

});