import { useState, useEffect } from "react";

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Simple carousel slides
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop",
            title: "Music Festivals",
            subtitle: "Live Performances",
        },
        {
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
            title: "Tech Conferences",
            subtitle: "Industry Leaders",
        },
        {
            image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&h=600&fit=crop",
            title: "Art Exhibitions",
            subtitle: "Creative Works",
        },
        {
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop",
            title: "Food Events",
            subtitle: "Culinary Experiences",
        },
    ];

    // Auto-move carousel every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="absolute min-h-screen bg-gradient-to-br from-primary via-purple-600 to-purple-800 flex items-center justify-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            <div className="relative z-10 w-full">
                    {/* Right Side - Simple Auto Carousel */}
                    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                        <div className="relative w-full h-full overflow-hidden shadow-2xl">
                            {/* Slides */}
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    {/* Image */}
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                    {/* Text */}
                                    {/* <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                            {slide.title}
                                        </h3>
                                        <p className="text-lg text-white/90">
                                            {slide.subtitle}
                                        </p>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
}