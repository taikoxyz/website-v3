const loaded: string[] = [];

export function loadImage(
    src: string,
) {
    return new Promise((res, rej) => {
        if(loaded.includes(src)) {
            return res(src);
        }
        const image = document.createElement("img");
        image.src = src;
        image.onload = () => {
            loaded.push(src);
            res(src)
        };
        image.onerror = (error) => rej(error);
    });
}