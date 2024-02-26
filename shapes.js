
console.log('shapes loaded successfully');
export class Shapes {
    _x;
    _y;
    _lineWidth;
    _color;

    constructor(x, y, lineWidth) {
        this._x = x;
        this._y = y;
        this._lineWidth = lineWidth;
        this._color = 'black';
    }

    set setColor(color) {
        this._color = color;
    }

    set setLineWidth(lineWidth) {
        this._lineWidth = lineWidth;
    }
}
