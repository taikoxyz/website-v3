import { useEffect, useRef, useState } from "react";
import { animateOnScroll } from "../utils/aos";

interface Props {
    offset?: number | string;
}

export function useAos({
    offset
}: Props = {
    offset: '30%'
}) {
    const [inView, setInView] = useState(false);
    const ref = useRef<any>(null);

    useEffect(() => {
        if(ref.current) {
            const animate = animateOnScroll({
                offset,
                triggerClass: ref.current,
                onUpdate: (_, active) => setInView(active || false)
            });

            return () => animate.destroy();
        }
    });

    return {
        inView,
        ref: (node: any) => (ref as any).current = node
    };
}