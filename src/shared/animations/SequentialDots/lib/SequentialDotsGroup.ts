interface DotState {
    x: number;
    y: number;
    alpha: number;
    sideMp: number;
    entry: boolean;
}

interface GroupOptions {
    color: string;
    offsetAlpha: number;
    offsetX: number;
    offsetY: number;
    dotsCount: number;
    dotSize: number;
    dotGapY: number;
    fadeSpeed: number;
    moveSpeed: number;
}

export class SequentialDotsGroup {
    offsetY = 0;
    options: GroupOptions;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    dots: DotState[];

    constructor(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement, 
        options: GroupOptions
    ) {
        this.ctx = context;
        this.options = options;
        this.canvas = canvas;
        this.dots = [];
        this.offsetY = options.offsetY;

        this.setup();
    }

    setup() {
        for (let i = 0; i < this.options.dotsCount; i++) {
            this.dots.push({
                x: this.options.offsetX,
                y: i * (this.options.dotSize + this.options.dotGapY) + this.offsetY,
                alpha: i * this.options.offsetAlpha,
                sideMp: 1,
                entry: false,
            });
        }
    }

    update() {
        const speed = this.options.fadeSpeed;

        for (const dot of this.dots) {
            if (dot.entry) {
                const alpha = dot.alpha + speed * dot.sideMp;
                if (alpha >= 1) dot.sideMp = -1;
                if (alpha <= 0) dot.sideMp = 1;
                dot.alpha = alpha;
                dot.y += this.options.moveSpeed;

                if(dot.y + this.options.dotSize > this.canvas.height) {
                    dot.y = -this.options.dotSize;
                }
            } else {
                dot.alpha += speed;
                dot.y += this.options.moveSpeed;
                dot.entry = dot.alpha >= 0;
            }
        }
    }

    draw() {
        const { ctx, options } = this;

        for (const dot of this.dots) {
            ctx.save();

            ctx.fillStyle = options.color;
            ctx.globalAlpha = Math.max(0, dot.alpha);

            ctx.fillRect(dot.x, dot.y, options.dotSize, options.dotSize);

            ctx.restore();
        }
    }
}
