const canvas = document.querySelector("#clock-canvas")

// setting the dimensions for canvas
dimensionSetter(canvas)

const c_hit = canvas.height
const c_wid = canvas.width

const ctx = canvas.getContext("2d")

let radius = (c_hit / 2) * 0.90

let x = c_wid / 2
let y = c_hit / 2

// translate the origin to the center of canvas
ctx.translate(x, y)

setInterval(() => {
    // draw the clock every 1 second
    drawClock()
}, 1000);


// to draw the clock
function drawClock() {
    drawFace(ctx, radius)
    drawNumbers(ctx, radius)
    drawTime(ctx, radius)
}

// draw the face of the clock
function drawFace(ctx, radius) {
    // draw outer circle
    drawCircle(ctx, radius, "#fff", "#fff")

    // radial gradient
    let grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
    grad.addColorStop(0, "#09a")
    grad.addColorStop(0.5, "#fff")
    grad.addColorStop(1, "#09a")

    ctx.strokeStyle = grad
    ctx.lineWidth = radius * 0.075
    ctx.stroke()

    // draw inner circle
    drawCircle(ctx, radius * 0.065)
}

// draw the numbers in their positions
function drawNumbers(ctx, radius) {
    const noOfHours = 12
    let angle
    let hour = 3
    ctx.font = radius * 0.15 + "px Arial"
    ctx.textBaseline = "middle"
    ctx.textAlign = "center"

    for (hour = 1; hour <= noOfHours; hour++) {
        angle = hour * Math.PI / 6
        ctx.rotate(angle)
        ctx.translate(0, -radius * 0.80)
        ctx.rotate(-angle)
        ctx.fillText(`${hour}`, 0, 0)
        ctx.rotate(angle)
        ctx.translate(0, radius * 0.80)
        ctx.rotate(-angle)
    }
}

// set the time for the hands
function drawTime(ctx, radius) {
    let now = new Date()

    // seconds hand
    let second = now.getSeconds()
        // draw seconds hand
    second = (second * Math.PI / 30)
    drawHand(ctx, second, radius * 0.73, 2, "#333")

    // minutes hand
    let minute = now.getMinutes()
        // draw minutes hand
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
    drawHand(ctx, minute, radius * 0.60, 3.5, "#09a")

    // hours hand
    let hour = now.getHours()
        // draw hours hand
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60) + (second * Math.PI / (6 * 60 * 60)))
    drawHand(ctx, hour, radius * 0.45, 7, "#ff105e")

}


// helper functions

function drawCircle(ctx, radius, fillColor = "#000", strokeColor = "#000") {
    ctx.beginPath()
    ctx.arc(0, 0, radius, 2 * Math.PI, 0 * Math.PI)
    ctx.strokeStyle = strokeColor
    ctx.fillStyle = fillColor
    ctx.fill()
    ctx.stroke()
}

function drawHand(ctx, pos, length, lineWidth = 1, strokeStyle) {
    ctx.beginPath()
    ctx.lineCap = "round"
    ctx.lineWidth = lineWidth
    ctx.moveTo(0, 0)
    ctx.rotate(pos)
    ctx.lineTo(0, -length)
    ctx.strokeStyle = strokeStyle
    ctx.stroke()
    ctx.rotate(-pos)
}

// setting the canvas dimensions to half of window windth and height
function dimensionSetter(canvas) {
    canvas.height = window.innerHeight / 2
    canvas.width = window.innerWidth / 2
}