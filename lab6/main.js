var vSliders = document.getElementsByClassName("slider");

for (var i = 0; i < vSliders.length; i++) {
    slider_init(vSliders[i]);
}

function slider_init(s) {
    s.marginLeft = 0;
    s.addEventListener('mousedown', e => {
        s.mouseX = e.screenX;
        s.mouseDown = true;
    });
    s.addEventListener('mousemove', e => {
        if (s.mouseDown) {
            var dx = e.screenX - s.mouseX;
            s.mouseX += dx;
            s.marginLeft += dx;
            s.style.marginLeft = `${s.marginLeft}px`
        }
    });
    s.addEventListener('mouseup', e => {
        s.mouseDown = false;
    });
}
