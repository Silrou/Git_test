$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });
});

var b1 = document.getElementById("btnOUS");
var b2 = document.getElementById("btnchiefdom");
var b3 = document.getElementById("btndistrict");
var b4 = document.getElementById("btnfaciltiy");

b1.onclick = function () {
    document.body.style.background = "white";
}

b2.onclick = function () {
    document.body.style.background = "blue";
}

b3.onclick = function () {
    document.body.style.background = "black";
}
b4.onclick = function () {
    document.body.style.background = "green";
}