class CanvasPaint extends GenericPaint {
    constructor(parent, height, width) {
        super(width, height);
        this._parent = parent;
        this.init();
    }
    init() {
        this._canvas = document.createElement("canvas");
        this._canvas.setAttribute("width", this.width);
        this._canvas.setAttribute("height", this.height);
        this._parent.appendChild(this._canvas);
        this._ctx = this._canvas.getContext("2d");
    }
    drawLine(xStart, yStart, xEnd, yEnd) {
        this._ctx.beginPath();
        this._ctx.lineWidth = this._lineWidth;
        this._ctx.moveTo(xStart, yStart);
        this._ctx.lineTo(xEnd, yEnd);
        this._ctx.strokeStyle = this._color;
        this._ctx.stroke();
        //this._ctx.endPath();
    }
    drawCircle(cx, cy, r) {
        this._ctx.beginPath();
        this._ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
        this._ctx.lineWidth = this._lineWidth;
        this._ctx.strokeStyle = this._color;
        this._ctx.stroke();

    }
	
	drawRectangle(x, y, w, h) {
        this._ctx.beginPath();
        this._ctx.rect(x, y, w, h);
        this._ctx.lineWidth = this._lineWidth;
        this._ctx.strokeStyle = this._color;
        this._ctx.stroke();

    }
}   