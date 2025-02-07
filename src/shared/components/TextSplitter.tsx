import React from "react";

interface Props {
    text: string;
    tagName?: keyof JSX.IntrinsicElements;
    className?: string;
    splitter?: string;
}

export const TextSplitter: React.FC<Props> = ({
    text,
    className,
    tagName: Tag = 'p',
    splitter = ''
}) => {
    return (
        <Tag className={className}>
            {text.split(splitter).map((letter, id) => (
                <span 
                    dangerouslySetInnerHTML={{ __html: letter + splitter }} 
                    key={letter + id} 
                />
            ))}
        </Tag>
    );
};