const btn = document.getElementById("notify");

function newPage() {
    if (document.getElementById("email").value != "WL@gmail.com") {
        window.location="errorPage.html";
    }
    else {
        window.location="firstPage.html"
    }
}

function changeButtonColorMouseEnter () {
    document.getElementById("notify").style.background=("hsl(223, 55%, 24%");   
}

function changeButtonColorMouseLeave () {
    document.getElementById("notify").style.background=("hsl(223, 87%, 63%");   
}


btn.addEventListener("mouseenter", changeButtonColorMouseEnter)
btn.addEventListener("mouseleave", changeButtonColorMouseLeave)

btn.addEventListener("click", newPage);