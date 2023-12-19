class Ring {
    constructor(radius, step) {
        this.originalRadius = radius
        this.radius = radius
        this.step = step
        this.offset = 10
    }

    draw() {
        // let color = map(this.radius, 10, this.originalRadius, 1, 360)
        stroke(255, 255, 255)
        noFill()
        beginShape()
        for (let a = 0; a <= 360; a += 5) {
            let offset = map(noise(this.offset), 0, 1, -10, 10)
            let x = this.radius * cos(a)
            let y = this.radius * sin(a)
            vertex(x, y)
        }
        endShape(CLOSE)

        if (this.radius < 120) {
            this.radius = this.originalRadius
        } else {
            this.radius -= this.step
            this.offset += 0.001
        }
        if (this.offset > 10.1) {
            this.offset = 10
        }
    }
}
