window.onload = function() {
    // alert('JavaScript is fully loaded.');

    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

}

$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "data/menu.json",
        dataType: "json",
        success: function(responseData, status) {
            var output = "<div>";

            $.each(responseData.menu, function(i, item) {
                output += '<div class="row"><div class="col-12 col-lg-6 mb-5 mx-auto"><div class="content_box">';
                output += '<h1>' + item.name + '</h1>';
                output += '<img class="centered" src="resources/img/' + item.image + '"></img>';
                output += '<h2>' + item.price + '</h2>';
                output += '<p>Vegan? ' + item.vegan + '</p>';
                output += '<p>Cuisine: ' + item.cuisine + '</p>';
                output += '<p>Description: ' + item.desc + '</p>';
                output += '<p>Ingredients: ' + item.ings + '</p>';
                output += '</div></div></div>';
            });

            output += "</div>";
            $('#projectMenuOutput').html(output);

            // tooltip
            $('.vert_menu li').tooltip();
        },
        error: function(msg) {
            // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.desc);
        }
    });

    $(function() {
        $(document).tooltip();
    });

});