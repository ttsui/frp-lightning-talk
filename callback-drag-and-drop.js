
(function() {
    var isDragging = false,
        dragStart,
        draggable = document.querySelectorAll(".draggable")[0];

    draggable.addEventListener("mousedown", function (event) {
        isDragging = true;
        dragStart = event;
    });

    document.addEventListener("mousemove", function (event) {
        if (isDragging) {
            draggable.style.left = event.clientX - dragStart.offsetX + "px";
            draggable.style.top = event.clientY - dragStart.offsetY + "px";
        }
    });

    draggable.addEventListener("mouseup", function () {
        isDragging = false;
    });
})();