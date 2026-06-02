import { Location2D } from './Location2D.js';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const render2D:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
let loc:Location2D = new Location2D(0, 0);

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
    loc.x_ += 1;
    loc.y_ += 1;
}

function draw() {
    render2D.clearRect(0, 0, 1280, 720);
    render2D.fillStyle = 'white';
    render2D.fillRect(0, 0, 1280, 720);

    render2D.fillStyle = 'red';
    render2D.fillRect(loc.x_, loc.y_, 100, 100);
}

function release() {

}

init();
loop();