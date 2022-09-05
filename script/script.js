let mario = document.getElementsByClassName('mario')[0]
let pipe = document.getElementsByClassName('pipe')[0]
let jump = () => {
    mario.classList.add('jump')



// setTimeout recebe uma função em seguida o tempo determinado
setTimeout(() => {
    mario.classList.remove('jump')
}, 500)
}

let loop = setInterval(() => {
    // offsetLeft verifica o deslocamento na esquerda
    // propriedade offset bottom não existe
    let pipePosition = pipe.offsetLeft;
    let MarioPosition = +window.getComputedStyle(mario).bottom.replace('px', '0')
    if (pipePosition<=120 && pipePosition > 0  && MarioPosition<80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${MarioPosition}px `
        mario.src = 'imagem/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
    }
}, 10);
// keydown a partir do momento que eu precionar qualquer tecla
document.addEventListener('keydown', jump)