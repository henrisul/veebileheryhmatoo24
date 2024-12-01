// Skript peidab üles-alla kerides elemendid, mis ei ole enam-vähem brauseriakna keskel
// Koodi alus on võetud aadressilt https://codepen.io/bstonedev/pen/MWWZgKz ning täiendatud vastavalt vajadusele Henri Sulbi poolt

let elements = document.querySelectorAll(".fadeInEl");
let buttonContainer = document.querySelector(".buttonContainer");
let firstInfoBox = document.querySelector("#firstInfoBox")

// Kuna need elemendid on lehte avades (üldiselt) kohe nähtaval, siis lisame neile kohe inViewElNoScale/inViewEl klassi
buttonContainer.classList.add("inViewElNoScale");
firstInfoBox.classList.add("inViewEl");

// Ootame, et lehe avamisel toimuvad animatsioonid läbi saaks, enne kui skripti rakendame
setTimeout(function() {
    window.addEventListener('scroll', fadeIn);
    fadeIn(); 
}, 1300)

// Leiame iga elemendi positsiooni brauseri akna suhtes ning vastavalt sellele peidame või toome elemendi välja
function fadeIn() { 
    // Ülemise nupurea peitmise/näitamise teeme eraldi, sest see peab teistest elementidest erinevalt käituma
    var buttonContainer_distance = buttonContainer.getBoundingClientRect().bottom - window.innerHeight * 0.05;
    if (buttonContainer_distance > 0) {
        buttonContainer.classList.remove("aboveViewEl");
        buttonContainer.classList.add("inViewElNoScale");
    } else {
        buttonContainer.classList.remove("inViewElNoScale");
        buttonContainer.classList.add("aboveViewEl");
    }

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var top_distance = element.getBoundingClientRect().top - window.innerHeight * 0.7 + 50; // Arvutame, mis hetkel peaks üles kerides elementi näitama
        var bottom_distance = element.getBoundingClientRect().bottom - window.innerHeight * 0.3 - 50; // Arvutame, mis hetkel peaks alla kerides elementi näitama
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