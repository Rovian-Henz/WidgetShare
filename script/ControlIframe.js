var target = document.querySelector("#widgetShare");
target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false);

function mOver() {
    target.classList.add("active");
}

function mOut() {
    target.classList.remove("active");
}