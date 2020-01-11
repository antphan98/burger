$(function () {
    $(".devourbtn").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
       
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log(id);
                location.reload();
            }
        );
    });

});

$("#submit-btn").on("submit", function (event) {
    event.preventDefault();
    console.log("Trying to create a burger.")
    var newBurger = {
        burger_name: $("#burger").val(),
        devoured: 0
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Create new burger");
            location.reload();
        }
    );
});
});

