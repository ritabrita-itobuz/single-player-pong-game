var x, y;
var px,py;
px = py =0;

var cursor = document.getElementById("cursor");
var mutex = false;

window.addEventListener("mouseup", function(e) {
    var tmp = document.elementFromPoint(x + px, y + py);
    mutex = true;
    tmp.click();
    cursor.style.left = (px + x) + "px";
    cursor.style.top = (py + y) + "px";
})

window.addEventListener("mousemove", function(e) {
        
    // Gets the x,y position of the mouse cursor
    x = e.clientX;
    y = e.clientY;
    // sets the image cursor to new relative position
    cursor.style.left = (px + x) + "px";
    cursor.style.top = (py + y) + "px";

});