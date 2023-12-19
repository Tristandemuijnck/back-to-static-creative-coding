let rings = []
let ringInterval
let numRings = 3

function setup() {
    // Canvas maken
    createCanvas(600, 600)
    // angleMode instellen op graden
    angleMode(DEGREES)
    // colorMode instellen op RGB
    colorMode(RGB)
    // Interval waar elke x aantal milliseconden een ring wordt toegevoegd met addRing functie
    ringInterval = setInterval(addRing, 2500)
}

function draw() {
    background(0)
    // Centreren
    translate(width / 2, height / 2)
    rings.forEach((ring) => {
        ring.draw()
    })
}

// Ring toevoegen aan array
function addRing() {
    // Als er minder ringen in de array zitten dan numRings, voeg een ring toe
    if (rings.length < numRings) {
        // Nieuwe ring volgens Ring class
        let ring = new Ring(300, 0.4)
        rings.push(ring)
    } else {
        clearInterval(ringInterval)
    }
}
