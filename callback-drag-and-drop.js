
(function() {
    var dragTarget = document.querySelectorAll(".callbackDragTarget")[0];
    var container = document.querySelectorAll(".callbackContainer")[0];

    var dragging = false;
    var contactPoint;
    dragTarget.addEventListener("mousedown", function (ev) {
        dragging = true;
        contactPoint = ev;
        console.log(ev);
    });

    container.addEventListener("mousemove", function (dragPoint) {
       //console.log(dragPoint)
        //console.log({ pageX: dragPoint.pageX, pageY: dragPoint.pageY })
        if (dragging) {
            dragTarget.style.left = dragPoint.offsetX - contactPoint.offsetX + "px";
            dragTarget.style.top = dragPoint.offsetY - contactPoint.offsetY + "px";
        }
    });

    container.addEventListener("mouseup", function () {
        dragging = false;
    })
})();