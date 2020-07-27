var trending = document.getElementById("trending-bar");
var logo = document.getElementById("southwest-counseling-logo");
var hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerMenu.onclick = function(event){
    if (logo.style.visibility == "hidden"){
        logo.style.visibility = "visible";
    } else {
        logo.style.visibility = "hidden";
    }
}

if (navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
     trending.style.visibility = "hidden";
     trending.style.display = "none";
}