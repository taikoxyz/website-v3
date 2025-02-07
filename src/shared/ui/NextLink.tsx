import React, { HTMLProps } from "react";
import Link, { LinkProps } from "next/link";
import { Url } from "url";

type Props = Omit<LinkProps, "href"> &
    HTMLProps<HTMLAnchorElement> & {
        href?: string | Url;
    };

export const NextLink: React.FC<Props> = (props) => {
    if (props.href) {
        return <Link {...(props as any)} />;
    }
    return <a {...props} />;
};
