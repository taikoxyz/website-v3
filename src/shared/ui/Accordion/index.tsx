import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useClickOutside } from "shared/lib/hooks/use-click-outside";
import css from "./accordion.module.scss";

/* Children */

enum DisplayNames {
    BUTTON = "ACCORDEON_BUTTON",
    CONTENT = "ACCORDEON_CONTENT",
}

interface SubChildren {
    children: React.ReactNode;
}

const Button: React.FC<SubChildren> = ({ children }) => {
    return children;
};

const Content: React.FC<SubChildren> = ({ children }) => {
    return children;
};

Button.displayName = DisplayNames.BUTTON;
Content.displayName = DisplayNames.CONTENT;

/* Accordion */

type AccordionChildrenProps = {
    active: boolean;
};

type AccordionChildren = ((props: AccordionChildrenProps) => React.ReactNode) | React.ReactNode;

interface AccordionProps {
    children: AccordionChildren;
    initialOpen?: boolean;
    closeOnClickOut?: boolean;
    smooth?: boolean;
    disabled?: boolean;
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
    children,
    initialOpen = false,
    smooth = false,
    disabled = false,
    closeOnClickOut = false,
    className,
}) => {
    const [active, setActive] = useState(initialOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    const rootRef = useClickOutside(() => closeOnClickOut && setActive(false));

    const toggle = () => {
        if (disabled === false) {
            setActive(!active);
        }
    };

    useEffect(() => {
        if (smooth && contentRef.current) {
            const el = contentRef.current;
            el.style.height = `${active ? el.scrollHeight : 0}px`;
        }
    });

    const childrenArray = React.Children.toArray(
        typeof children === "function" ? (children({ active }) as any).props.children : children
    );

    const button = childrenArray.find(
        (child: any) => child.type && child.type.displayName === DisplayNames.BUTTON
    );
    const content = childrenArray.find(
        (child: any) => child.type && child.type.displayName === DisplayNames.CONTENT
    );

    return (
        <div
            className={clsx(
                css.accordion,
                disabled && css.accordion_disabled,
                smooth && css.accordion_smooth,
                className
            )}
            ref={rootRef}
        >
            <div className={css.button} onClick={toggle}>
                {button}
            </div>
            {((!smooth && active) || smooth) && (
                <div className={css.content} ref={contentRef}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Object.assign(Accordion, { Button, Content });
