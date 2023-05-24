document.addEventListener("DOMContentLoaded", function() {
    const sphere = document.getElementById("sphere");

    document.addEventListener("mousemove", function(e) {
        const x = e.clientX;
        const y = e.clientY;
        sphere.style.left = x + "px";
        sphere.style.top = y + "px";
    });

    document.addEventListener("click", function() {
        const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sphere.style.background = randomColor;
    });
});
