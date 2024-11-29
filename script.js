// Leiame kõik elemendid, millel on fadeInEl klass
let elements = document.querySelectorAll(".fadeInEl");

// Paus on selleks, et skript hakkaks alles siis tööle, kui css-is määratud animatsioonid on ära mängitud
// Muidu hakkavad div-id ringi hüppama kui kasutaja alla kerib enne, kui need algsed animatsioonid on läbi
setTimeout(function() {
    window.addEventListener('scroll', fadeIn ); // Funktsioon käivitatakse iga kord, kui lehel üles-alla keritakse
    fadeIn(); 
}, 1300)

function fadeIn() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i] // Võtame ühe elemendi
        var distance = element.getBoundingClientRect().top - window.innerHeight / 1.5; // Kontrollime, kus element ekraanil on
        if (distance < 0) { // Kui on meile sobival kõrgusel, siis laseme sellel elemendil sisse fadeda
            element.classList.add("inViewEl");
        } else {
            element.classList.remove("inViewEl") // Kui enam ei ole, siis element peidetakse
        }
    }
}