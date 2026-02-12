import { useEffect, useRef, useState } from "react";

export default function Demo({ children }) {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative h-screen overflow-hidden bg-[#f6fbf4]"
        >
            {/* Animated blobs */}
            <div
                className={`absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-300/40 
        rounded-full blur-3xl transition-all duration-1000
        ${visible ? "animate-blob opacity-100" : "opacity-0"}`}
            />

            <div
                className={`absolute top-20 -right-40 w-[450px] h-[450px] bg-emerald-300/40 
        rounded-full blur-3xl transition-all duration-1000 delay-200
        ${visible ? "animate-blob opacity-100" : "opacity-0"}`}
            />

            <div
                className={`absolute bottom-[-200px] left-1/3 w-[600px] h-[600px] bg-lime-300/30 
        rounded-full blur-3xl transition-all duration-1000 delay-500
        ${visible ? "animate-blob opacity-100" : "opacity-0"}`}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
