(function() {
    var dragStart,
        draggable = document.querySelectorAll(".draggable")[0],
        mouseUp = Rx.Observable.fromEvent(draggable, "mouseup"),
        mouseDown = Rx.Observable.fromEvent(draggable, "mousedown"),
        mouseMove = Rx.Observable.fromEvent(document, "mousemove");

    var mouseDrags = mouseDown.concatMap(function(ev) {
        dragStart = ev;
        return mouseMove.takeUntil(mouseUp);
    });

    mouseDrags.forEach(function(event) {
        draggable.style.left = event.clientX - dragStart.offsetX + "px";
        draggable.style.top = event.clientY - dragStart.offsetY + "px";
    });
})();