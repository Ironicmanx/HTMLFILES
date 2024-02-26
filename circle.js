console.log('circle loaded successfully');

// circle.js
import { Shapes } from "./shapes.js";

export class Circle extends Shapes {
    #radius;

    constructor(x, y, radius) {
        super(x, y, 1);
        this.#radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this.#radius, 0, 2 * Math.PI);
        ctx.lineWidth = this._lineWidth;
        ctx.strokeStyle = this._color;
        ctx.stroke();
    }
}
