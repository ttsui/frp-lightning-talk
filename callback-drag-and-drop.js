
(function() {
    var dragTarget = document.querySelectorAll(".callbackDragTarget")[0];

    var dragging = false;
    var contactPoint;
    dragTarget.addEventListener("mousedown", function (ev) {
        dragging = true;
        contactPoint = ev;
    });

    document.addEventListener("mousemove", function (dragPoint) {
        if (dragging) {
            dragTarget.style.left = dragPoint.clientX - contactPoint.offsetX + "px";
            dragTarget.style.top = dragPoint.clientY - contactPoint.offsetY + "px";
        }
    });

    dragTarget.addEventListener("mouseup", function () {
        dragging = false;
    })
})();