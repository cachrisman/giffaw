var render = function(responseData) {
    var data = responseData.data;
    data.forEach(function(item, i) {
        $("body").append("<img src='" + item.images.fixed_height.url + "'>");
    });
};

$(document).on("ready", function() {
    $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render);
    $('form').on("submit", function(e){
        e.preventDefault();
        var query = $('input').val().toLowerCase().replace(/\s+/g, "-");
        $('img').remove();
        $.get("http://api.giphy.com/v1/gifs/search?q="+query+"&api_key=dc6zaTOxFJmzC", render);
    });
});
