window.addEventListener('scroll', isInViewport);

function isInViewport(e) {
    var elementArray = [document.getElementById("top-image"),
                        document.getElementById("dropdown-div"),
                        document.getElementById("survey-section")];
    var elementPos = [elementArray[0].getBoundingClientRect(),
                      elementArray[1].getBoundingClientRect(),
                      elementArray[2].getBoundingClientRect()];
    var elementOffset = 500;

    for (i = 0; i < elementArray.length; i++){
        if (elementPos[i].bottom + elementOffset < window.scrollY) {
            elementArray[i].style.display = "block";
            elementArray[i].classList.add("slide-fade-right-enter-active");
            //elementArray[i].classList.add("slide-fade-right-leave-active");
            elementArray[i].classList.add("slide-fade-right-enter");
            //elementArray[i].classList.add("slide-fade-right-leave-to");
        }
    }
}