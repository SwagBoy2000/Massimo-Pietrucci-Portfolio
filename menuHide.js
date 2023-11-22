            var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    let menu = document.getElementById("menu");
    if (!(menu.classList.contains("active")) 
    //&& window.innerWidth < 768
    ){
        console.log("scrolling")
        if (prevScrollpos > currentScrollPos) {
            menu.style.opacity = "1";
        } else {
            document.getElementById("menu").style.opacity = "0";
        } 
        prevScrollpos = currentScrollPos;
    } else {
        console.log("not scrolling")

    }
}