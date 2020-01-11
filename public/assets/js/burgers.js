$(function () {
    $(".devourbtn").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const newDevoured = $(this).data("newdevoured");

        const newDevouredState = {
            devoured: newDevoured
        };
       
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
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
    const newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
});

