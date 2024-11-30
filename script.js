let elements = document.querySelectorAll(".fadeInEl");
let buttonContainer = document.querySelector(".buttonContainer");
let firstInfoBox = document.querySelector("#firstInfoBox")

// adding inViewEl class beforehand because these elements will always be in view when first opening the page
buttonContainer.classList.add("inViewElNoScale");
firstInfoBox.classList.add("inViewEl");


// delay script so it doesn't interfere with initial animations set in css
setTimeout(function() {
    window.addEventListener('scroll', fadeIn);
    fadeIn(); 
}, 1300)

function fadeIn() {
    // the button container requires different logic so it is dealt with separately
    var buttonContainer_distance = buttonContainer.getBoundingClientRect().bottom - window.innerHeight * 0.05;
    if (buttonContainer_distance > 0) {
        buttonContainer.classList.remove("aboveViewEl");
        buttonContainer.classList.add("inViewElNoScale");
    } else {
        buttonContainer.classList.remove("inViewElNoScale");
        buttonContainer.classList.add("aboveViewEl");
    }

    // check every element's position and fade in/out accordingly
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var top_distance = element.getBoundingClientRect().top - window.innerHeight * 0.7 + 50;
        var bottom_distance = element.getBoundingClientRect().bottom - window.innerHeight * 0.3 - 50;
        if (element != buttonContainer) {
            if (top_distance < 0) {
                if (bottom_distance > 0) {
                    element.classList.remove("aboveViewEl");
                    element.classList.add("inViewEl");
                } else {
                    element.classList.remove("inViewEl");
                    element.classList.add("aboveViewEl");
                }
            } else {
                element.classList.remove("inViewEl");
            }
        }
    }
}