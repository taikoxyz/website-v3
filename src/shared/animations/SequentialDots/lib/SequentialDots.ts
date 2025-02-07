import { SequentialDotsGroup } from "./SequentialDotsGroup";
import { SequentialDotsOptions } from "./types";
import { getRandomBetween } from "shared/lib/utils/numbers";

type CustomSequentialDotsOptions = {
    [K in keyof SequentialDotsOptions]?: SequentialDotsOptions[K];
}

export class SequentialDots {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    options: SequentialDotsOptions;
    group: SequentialDotsGroup[] = [];
    raf: number | null = null;

    canvasWidth: number;
    canvasHeight: number;

    constructor(
        canvas: HTMLCanvasElement,
        options: CustomSequentialDotsOptions = {},
    ) {
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        if(!ctx) {
            throw new Error("Not support 2d context");
        }
        this.ctx = ctx;
        this.options = Object.assign(
            {
                countDots: 4,
                cols: 20,
                dotSize: 6,
                dotDelay: 100,
                dotGapY: 7,
                margin: 30,
                fadeSpeed: 0.02,
                moveSpeed: 0.02,
                colors: ["blue", "red", "greed"]
            } as SequentialDotsOptions, 
            options
        );

        this.canvasWidth = canvas.width = canvas.offsetWidth;
        this.canvasHeight = canvas.height = canvas.offsetHeight;

        this.resize = this.resize.bind(this);
        this.animate = this.animate.bind(this);

        this.resize();
        this.setup();
        this.animate();
    }

    resize() {
        this.canvasWidth = this.canvas.width = this.canvas.offsetWidth;
        this.canvasHeight = this.canvas.height = this.canvas.offsetHeight;
    }

    setup() {
        window.addEventListener("resize", this.resize);

        for(let i = 0; i < this.options.cols; i++) {
            const dotSize = Array.isArray(this.options.dotSize)
                ? this.options.dotSize[getRandomBetween(0, this.options.dotSize.length - 1)]
                : this.options.dotSize;
            const x = i * (dotSize + this.options.margin);
            const color = this.options.colors[
                Math.floor(this.options.colors.length * Math.random())
            ];

            this.group.push(
                new SequentialDotsGroup(
                    this.ctx,
                    this.canvas,
                    {
                        dotsCount: this.options.countDots,
                        dotGapY: this.options.dotGapY,
                        dotSize: dotSize,
                        fadeSpeed: this.options.fadeSpeed,
                        moveSpeed: getRandomBetween(
                            this.options.moveSpeed - 0.15,
                            this.options.moveSpeed + 0.15,
                            10
                        ),
                        color: color,
                        offsetAlpha: -Math.random(),
                        offsetX: x - dotSize,
                        offsetY: Math.random() * this.canvasHeight * -1
                    }
                )
            );
        }
    }

    destroy() {
        this.stop();
        this.group = [];
        this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);

        window.removeEventListener("resize", this.resize);
    }

    draw() {
        this.group.forEach((group) => {
            group.update();
            group.draw();
        });
    }

    animate() {
        this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
        this.draw();
        this.raf = requestAnimationFrame(this.animate);
    }

    stop() {
        if(this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
        }
    }
}