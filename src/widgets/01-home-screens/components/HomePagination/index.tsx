import React from "react";
import clsx from "clsx";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./HomePagination.module.scss";

const HomePagination: React.FC = () => {
    const [scrollProgress, setScrollProgress] = React.useState(0);

    const nav = React.useMemo(() => Object.values(HOME_PAG), []);

    const handleHref = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const id = (event.target as HTMLAnchorElement).dataset.href;
        if(id) {
            const element = document.getElementById(id);
            if(element) {
                element.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        }
    };

    const checkScrollProgress = () => {
        const elements: HTMLElement[] = [];
        nav.forEach((id) => {
            const section = document.getElementById(id);
            if(section) {
                elements.push(section);
            }
        });
        let progress = 0;

        const currentScrollPosY = window.pageYOffset;
        const offset = window.innerHeight * 0.15;

        for(let i = elements.length - 1; i >= 0; i--) {
            const section = elements[i];
            const sectionPosY = section.getBoundingClientRect().top + window.pageYOffset;
            if((sectionPosY - offset) <= currentScrollPosY) {
                progress = i;
                break;
            }
        }

        setScrollProgress(progress);
    };

    React.useEffect(() => {
        checkScrollProgress();
    }, []);

    React.useEffect(() => {
        window.addEventListener("scroll", checkScrollProgress);
        return () => window.removeEventListener("scroll", checkScrollProgress);
    });

    return (
        <nav className={css.nav}>
            {nav.map((item, id) => (
                <a
                    className={clsx(
                        css.nav_item, 
                        id <= scrollProgress && css._active
                    )}
                    key={item}
                    onClick={handleHref}
                    href={`#${item}`}
                    data-href={item}
                />
            ))}
        </nav>
    );
};

export default HomePagination;
