import React from 'react';
import NextImage from 'next/image';
import { GetComponentProps } from 'shared/lib/utils/typescript';

type ImageProps = GetComponentProps<typeof NextImage> & {
    isWebp?: boolean;
};

const wrapSrc = (src: string) =>
    src;

// eslint-disable-next-line react/display-name
const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ src, quality = 90, isWebp = true, ...props }, ref) => {
        const source =
            `${wrapSrc(src.toString())}?q=${quality}` +
            (isWebp ? '&fm=webp' : '');
        return <NextImage {...props} ref={ref} src={source} />;
    }
);

const ImageDefault = React.forwardRef<
    HTMLImageElement,
    React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
>((props, ref) => {
    // const src = (props.src || "").replace(/\/\//, '/');
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} src={props.src} ref={ref} />;
});

export default Object.assign(Image, { Default: ImageDefault });
