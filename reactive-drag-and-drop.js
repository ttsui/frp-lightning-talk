(function() {
    var monkey = document.querySelectorAll(".monkey")[0],
        mouseDown = Rx.Observable.fromEvent(monkey, "mousedown"),
        mouseUp = Rx.Observable.fromEvent(monkey, "mouseup"),
        mouseMove = Rx.Observable.fromEvent(document, "mousemove");

    mouseDown.concatMap(function(mouseDownEvent) {
        return mouseMove
            .map(function(mouseMoveEvent) {
                return {
                    left: mouseMoveEvent.clientX - mouseDownEvent.offsetX,
                    top: mouseMoveEvent.clientY - mouseDownEvent.offsetY
                };
            })
            .takeUntil(mouseUp);
    })
    .forEach(function(mouseDrag) {
        monkey.style.left = mouseDrag.left + "px";
        monkey.style.top = mouseDrag.top + "px";
    });
})();