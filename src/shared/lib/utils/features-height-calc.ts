export const featuresHeightCalc = (className = ".features-item") => {
    const featuresOdd = Array.from(
        document.querySelectorAll(`${className}:nth-child(odd)`)
    ) as HTMLElement[];
    const featuresEven = Array.from(
        document.querySelectorAll(`${className}:nth-child(even)`)
    ) as HTMLElement[];

    const getMaxHeight = (elements: HTMLElement[]) => {
        let h = 0;
        elements.forEach((el) => {
            el.style.height = "";
            el.style.marginTop = "";
            if (el.offsetHeight > h) {
                h = el.offsetHeight;
            }
        });
        return h;
    };

    const feO = getMaxHeight(featuresOdd);
    const feE = getMaxHeight(featuresEven);

    if (window.innerWidth > 991) {
        featuresOdd.forEach((el) => (el.style.height = `${feO}px`));
        featuresEven.forEach((el) => (el.style.height = `${feE}px`));

        if (featuresOdd[1]) {
            featuresOdd[2].style.marginTop = feE - feO + "px";
        }
    }
};