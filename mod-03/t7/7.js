document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById("target");
    const trigger = document.getElementById("trigger")

    trigger.addEventListener("mouseover", function() {
        target.src = "img/picB.jpg";
    });

    trigger.addEventListener("mouseout", function() {
        target.src = "img/picA.jpg";
    });
});