$(document).ready(function(){
    $("#switch").click(function () {
        if ($("#page").hasClass("night")) {
            $("#page").removeClass("night");
            $("#switch").removeClass("switched");
        }
        else {
            $("#page").addClass("night");
            $("#switch").addClass("switched");

        }
    });
});