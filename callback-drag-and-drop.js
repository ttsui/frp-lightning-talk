
(function() {
    var monkey = document.querySelectorAll(".monkey")[0],
        isDragging = false,
        dragStart;

    monkey.addEventListener("mousedown", function(mouseDownEvent) {
        isDragging = true;
        dragStart = mouseDownEvent;
    });

    document.addEventListener("mousemove", function(mouseMoveEvent) {
        if (isDragging) {
            monkey.style.left = mouseMoveEvent.clientX - dragStart.offsetX + "px";
            monkey.style.top = mouseMoveEvent.clientY - dragStart.offsetY + "px";
        }
    });

    monkey.addEventListener("mouseup", function() {
        isDragging = false;
    });
})();