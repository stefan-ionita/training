class GenericPaint {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this._lineWidth = 1;
        this._color = "#000";
    }

    set lineWidth(width) {
        this._lineWidth = width;
    }
    get lineWidth() {
        return this._lineWidth;
    }
    set color(mycolor) {
        this._color = mycolor;
    }
    get color() {
        return _color;
    }
    /*metoda mai veche de a face setter si getteri*/
    setLineWidth(width) {
        this._lineWidth = width;
    }
    getLineWidth() {
        return this._lineWidth;
    }

    drawLine(xStart, yStart, xEnd, yEnd) {

    }

    drawCircle(cx, cy, r) {

    }
    drawRectangle(x, y, w, h) {
        //de facut acasa
    }
    clear() {
        //de facut acasa
    }
}