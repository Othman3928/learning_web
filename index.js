document.getElementById("ok").onmousemove = function() {
    document.getElementById("myh1").textContent = `hello`
    document.getElementById("ok").hidden = true;
};
document.getElementById("myh1").onmousemove = function () {
    document.getElementById("ok").hidden = false;
    document.getElementById("myh1").onmousemove = function () {
        document.getElementById("ok").hidden = true;
    };
};

