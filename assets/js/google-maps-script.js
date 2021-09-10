(function() {
    

    var api = `https://www.google.com/maps/embed/v1/search?key=AIzaSyCvXNHsk_YLBRyMVEyYGhyKqISLl84GpVQ&amp;q=${query}&amp;zoom=14` //za potpun api potrebno je da se konkatenira api+query+zoomquery
    var sel = document.getElementById('optgroup-choice');
    var tempEl;
    var googleEl = document.getElementById("google-maps");
    var query;

    function getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    document.getElementById('search-button').onclick = function () {
        tempEl = sel.options[sel.selectedIndex].text;
       
        switch(tempEl){
            case "Veterinar":
                query = "nis+veterinar"
                break;
            case "PetShop":
                query = "nis+petshop"
                break;
            case "Hotel za Pse":
                query = "nis+pansion+za+pse"
                break;
            case "Frizer za Pse":
                query = "nis+sisanjepsa"
                break;
            default:
                break;
        }
        api = `https://www.google.com/maps/embed/v1/search?key=AIzaSyCvXNHsk_YLBRyMVEyYGhyKqISLl84GpVQ&amp;q=${query}&amp;zoom=14`
        //googleEl.src = api
        document.getElementById('map-div').innerHTML = `<iframe allowfullscreen="" frameborder="0" loading="lazy"
        id="google-maps" src=${api}
        width="100%" height="400"></iframe>`

    }
    
}());