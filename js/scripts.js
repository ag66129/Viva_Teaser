var y = document.getElementById("about");
var x = document.getElementById("home");
var h = document.getElementById("check");
var c = document.getElementById("contact");
var f = 0;

function menu() {
    if (f == 0) {
        if (x.style.display === "none") {
            x.style.display = "grid";
        } else {
            x.style.display = "none";
        }
    }

    if (f == 1) {
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    }

    if (f == 2) {
        if (c.style.display === "none") {
            c.style.display = "block";
        } else {
            c.style.display = "none";
        }
    }

}

function openabout() {
    f = 1;
    y.style.display = "block";
    h.checked = false;

}

function openhome() {
    f = 0;
    x.style.display = "grid";
    h.checked = false;

}

function opencontact() {
    f = 2;
    c.style.display = "block";
    h.checked = false;
}