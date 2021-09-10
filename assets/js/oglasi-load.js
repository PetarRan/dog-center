$( document ).ready(function() {
    $('#forma-novi-oglas').hide();
    $('#confirm-oglas').hide();
    $('#load-oglas').hide();
    initLoad();
    $(':radio:checked').triggerHandler('click');
})