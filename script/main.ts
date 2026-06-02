const canvas = document.getElementById('game') as HTMLCanvasElement;
const render2D:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
let x:number = 0.0

canvas.width = 1280;
canvas.height = 720;

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

function init() {
}

function update() {
}

function draw() {
    render2D.clearRect(0, 0, 1280, 720);
    render2D.fillStyle = 'white';
    render2D.fillRect(0, 0, 1280, 720);

    render2D.fillStyle = 'red';
    render2D.fillRect(++x, 10, 100, 100);
}

function release() {

}

init();
loop();