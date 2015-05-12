var render = function(responseData) {
    var data = responseData.data;
    data.forEach(function(item, i) {
        $("body").append("<img src='" + item.images.fixed_height.url + "'>");
    });
};

$(document).on("ready", function() {
    var query = null;
    var limit = 25;
    $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render);
    $('form').on("submit", function(e) {
        e.preventDefault();
        query = $('input').val().toLowerCase().replace(/\s+/g, "+");
        $('img').remove();
        $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC", render);
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            if (query) $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=" + limit, render);
            else $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=" + limit, render);
            limit += 25;
        }
    });
});
