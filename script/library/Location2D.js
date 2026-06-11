export class Location2D {
    x_ = 0.0;
    y_ = 0.0;
    constructor(x, y) {
        this.x_ = x;
        this.y_ = y;
    }
    distance(loc) {
        const dX = this.x_ - loc.x_;
        const dY = this.y_ - loc.y_;
        return Math.sqrt(dX * dX + dY * dY);
    }
}
