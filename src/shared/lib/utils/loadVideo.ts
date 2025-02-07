const loaded: string[] = [];

export function loadVideo(src: string) {
    return new Promise((res) => {
        if(loaded.includes(src)) {
            return res(src);
        }
        const video = document.createElement("video");
        video.src = src;
        video.playsInline = true;
        video.muted = true;
        video.load();
        video.addEventListener("canplaythrough", () => {
            loaded.push(src);
            res(src);
        }, {  once: true });
    });
}