const body = document.body

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

let renderFrames = 0
let freshedFrames1 = 0
let freshedFrames2 = 0

function renderInTwoFrame() {
    position2 += 8
    position1 += 4
    renderFrames ++ 
    freshedFrames1 ++
    freshedFrames2 ++
    if (position2 > 1800) {
        position2 = 100
    }

    if (position1 > 1800) {
        position1 = 100
    }
    renderCtx(ctx1, position1, freshedFrames1)
    renderCtx(ctx2, position2, freshedFrames2)
    requestAnimationFrame(() => {
        position1 += 4
        renderFrames ++ 
        freshedFrames1 ++

        if (position1 > 1800) {
            position1 = 100
        }
        renderCtx(ctx1, position1, freshedFrames1)
        renderCtx(ctx2, position2, freshedFrames2)
        requestAnimationFrame(() => {
            renderInTwoFrame()
        })
    })
}

function renderCtx(ctx, position, frames) {
    ctx.clearRect(0, 0, width, height)
    ctx.font = '50px Georgia'
    ctx.fillText(`当前输出到了第${renderFrames}帧，其中重新渲染了${frames}帧`, 100, 50)
    ctx.fillStyle = '#FF0000'
    ctx.fillRect(position, 100, 20, 150)
}

requestAnimationFrame(() => {
    renderInTwoFrame()
})

