import React from "react";
import clsx from "clsx";
import css from "./MenuLinkGroup.module.scss"; 
import { CardContent } from "shared/components/alert_card/card-content";

export const AlertMenuItem = () => {
    const [active, setActive] = React.useState(false);

    const toggleActive = () => setActive(!active);

    return (
        <div className={clsx(css.group, active && css._active)}>
            <button 
                className={clsx(css.group_btn, active && css._active)}
                onClick={toggleActive}
                aria-expanded={active}
            >
                <span>Alerts</span>
            </button>

            {active && <CardContent menuContent={true} />}
        </div>
    );
};