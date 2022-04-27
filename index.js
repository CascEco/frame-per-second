const body = document.body

console.log(body)

const canvas1 = document.createElement('canvas')
const canvas2 = document.createElement('canvas')

const height = 500
const width = 1920

canvas1.height = height
canvas1.width = width
canvas2.height = height
canvas2.width = width

const ctx1 = canvas1.getContext('2d')
const ctx2 = canvas2.getContext('2d')

canvas1.style = "width: 100vw; height: 50vh"
canvas2.style = "width: 100vw; height: 50vh"



console.log(height)

body.appendChild(canvas1)
body.appendChild(canvas2)

let position1 = 100
let position2 = 100


function renderInTwoFrame() {
    position2 += 8
    position1 += 4

    if (position2 > 1800) {
        position2 = 100
    }

    if (position1 > 1800) {
        position1 = 100
    }
    renderCtx(ctx1, position1)
    renderCtx(ctx2, position2)
    requestAnimationFrame(() => {
        position1 += 4

        if (position1 > 1800) {
            position1 = 100
        }
        renderCtx(ctx2, position2)
        renderCtx(ctx1, position1)
        requestAnimationFrame(() => {
            renderInTwoFrame()
        })
    })
}

function renderCtx(ctx, position) {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(position, 100, 20, 150)
}

requestAnimationFrame(() => {
    renderInTwoFrame()
})

