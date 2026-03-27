import { useEffect, useRef } from "react";

export default function useRevealOnScroll() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("active");
                    observer.unobserve(element); // anima só uma vez
                }
            },
            { threshold: 0.2 } // 20% visível já ativa
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return ref;
}
