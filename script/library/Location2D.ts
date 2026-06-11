export class Location2D {
    x_: number = 0.0;
    y_: number = 0.0;

    public constructor(x: number, y: number) {
        this.x_ = x;
        this.y_ = y;
    }

    public distance(loc:Location2D): number {
        const dX = this.x_ - loc.x_;
        const dY = this.y_ - loc.y_;
        return Math.sqrt(dX * dX + dY * dY);
    }
}

