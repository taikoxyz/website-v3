import gsap from "gsap";

export function taikoIconAnimation() {
    const getRounds = (r: number) => r * 360;
    const duration = 0.5;

    let active = false;

    const tl = gsap
        .timeline({
            onComplete() {
                if(active) {
                    tl.restart();
                }
            },
            paused: true,
        })
        .to("#s2-taiko-taiko", {
            ease: "power4.in",
            rotate: getRounds(3),
            opacity: 0,
            duration,
            onComplete() {
                gsap.set("#s2-taiko-taiko", { rotate: 0 });
            },
        }, "taikoSpin")
        .to("#s2-taiko-eth", {
            ease: "power4.out",
            rotate: getRounds(3),
            opacity: 1,
            duration,
            onComplete() {
                gsap.set("#s2-taiko-eth", { rotate: 0 });
            },
        }, `taikoSpin+=${duration * 0.8}`)
        .to("body", { 
            duration: 2 
        })
        .to("#s2-taiko-eth", {
            ease: "power4.in",
            rotate: getRounds(3),
            opacity: 0,
            duration,
            onComplete() {
                gsap.set("#s2-taiko-eth", { rotate: 0 });
            },
        }, `taikoSpinOut`)
        .to("#s2-taiko-taiko", {
            ease: "power4.out",
            rotate: getRounds(3),
            opacity: 1,
            duration,
            onComplete() {
                gsap.set("#s2-taiko-taiko", { rotate: 0 });
            },
        }, `taikoSpinOut+=${duration * 0.8}`)
        .to("body", { 
            duration: 2 
        })

    const play = () => {
        if(!active) {
            active = true;
            tl.timeScale(1);
            tl.restart();
        }
    };

    const pause = () => {
        if(active) {
            active = false;
            tl.pause()
        }
    };

    const finish = () => {
        if(active) {
            active = false;
            tl.timeScale(4);
        }
    }

    return { play, pause, finish };
}