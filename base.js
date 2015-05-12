var render = function(responseData) {
    var data = responseData.data;
    data.forEach(function(item, i) {
        $("body").append("<img src='" + item.images.fixed_height.url + "'>");
    });
};

$(document).on("ready", function() {
    var query = null;
    $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render);
    $('form').on("submit", function(e) {
        e.preventDefault();
        query = $('input').val().toLowerCase().replace(/\s+/g, "+");
        $('img').remove();
        $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC", render);
    });

    $(window).scroll(function() {
        var limit = 25;
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            // alert("reached bottom!");
            if (query) {
                console.log("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=" + limit);
                $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=" + limit, render);

            } else {
                console.log("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=" + limit);
                $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=" + limit, render);
            }
        }
        // limit += 25;
    });
});
