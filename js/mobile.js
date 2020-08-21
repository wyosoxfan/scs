var trending = document.getElementById("trending-bar");
var logo = document.getElementById("southwest-counseling-logo");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var gettingStartedImg1 = document.getElementById("gettingStartedImg");
var gettingStartedImg2 = document.getElementById("gettingStartedImg2");

hamburgerMenu.onclick = function(event){
    if (logo.style.visibility == "hidden"){
        logo.style.visibility = "visible";
        gettingStartedImg1.style.visibility = "visible";
        gettingStartedImg1.style.display = "";
        gettingStartedImg2.style.visibility = "visible";
        gettingStartedImg2.style.display = "";
    } else {
        logo.style.visibility = "hidden";
        gettingStartedImg1.style.visibility = "hidden";
        gettingStartedImg1.style.display = "none";
        gettingStartedImg2.style.visibility = "hidden";
        gettingStartedImg2.style.display = "none";
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