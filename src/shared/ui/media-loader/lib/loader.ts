type IFunction = () => any; 

interface CallbackType {
    src: string;
    cb?: IFunction;
    timeout?: number;
    priority?: number;
}

const loadImage = (src: string, successCb: IFunction, errCb?: IFunction) => {
    const img = document.createElement('img');
    img.src = src;

    img.onload = () => successCb();
    img.onerror = () => errCb && errCb();

    img.remove();
};

const loadVideo = (src: string, successCb: IFunction) => {
    const video = document.createElement('video');

    video.oncanplaythrough = () => successCb();

    video.src = src;
    video.load();

    video.remove();
};

const Loader = () => {
    const callbacks: CallbackType[] = [];
    let inWork = false;

    const next = () => {
        callbacks.sort((a, b) => (a.priority || 1) - (b.priority || 1));
        const current = callbacks.shift();
        if (!current) return;

        inWork = true;

        const { timeout, cb, src } = current;

        let done = false;

        const callback = () => {
            if (!done) {
                if(cb) {
                    cb();
                }
                inWork = false;
                done = true;
                next();
            }
        };

        if(timeout) {
            setTimeout(callback, timeout);
        }

        if (/\.(webp|jpe?g|png)$/g.test(src)) loadImage(src, callback, callback);

        if (/\.(mp4|avi|webm)$/g.test(src)) loadVideo(src, callback);
    };

    return {
        push(src: string, cb?: IFunction, timeout?: number, priority?: number) {
            callbacks.push({ src, cb, timeout, priority });
            if (!inWork) next();
        },
    };
};

export default Loader();
