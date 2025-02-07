import React from "react";
import clsx from "clsx";
import Image from "shared/ui/image";
import "./BothWorlds.scss";

interface Props {
    className?: string;
}

export const BothWorlds: React.FC<Props> = ({
    className
}) => {
    return (
        <div className={clsx("bothWorlds", className)}>
            <Image.Default 
                className={"bothWorlds_up"}
                src="/img/alethia/both-worlds-up.svg"
                alt=""
            />
            <Image.Default 
                className={"bothWorlds_down"}
                src="/img/alethia/both-worlds-down.svg"
                alt=""
            />
        </div>
    );
};