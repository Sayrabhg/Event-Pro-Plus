import { ChevronLeft, ChevronRight, Star, Flame } from "lucide-react";
import { useState, useEffect } from "react";
import DiscoButton from "../ui/button";

const featuredEvents = [
  {
    id: 1,
    title: "TechConf 2024",
    category: "Business",
    price: "$299",
    rating: 4.9,
    reviews: 1203,
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    hot: true,
    date: "Apr 15-17, 2024",
  },
  {
    id: 2,
    title: "Summer Music Festival",
    category: "Concerts",
    price: "$89",
    rating: 4.8,
    reviews: 2541,
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
    hot: true,
    date: "Jun 21-23, 2024",
  },
  {
    id: 3,
    title: "Design Workshop Series",
    category: "Education",
    price: "$149",
    rating: 4.7,
    reviews: 834,
    image: "bg-gradient-to-br from-purple-500 to-indigo-500",
    hot: false,
    date: "May 5-12, 2024",
  },
  {
    id: 4,
    title: "Foodie Fest 2024",
    category: "Food & Drink",
    price: "$59",
    rating: 4.6,
    reviews: 1567,
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
    hot: true,
    date: "Jul 10-12, 2024",
  },
];

export default function FeaturedEvents() {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % featuredEvents.length);
    setIsAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
    setIsAutoplay(false);
  };

  // Get visible events (3 on desktop, 1 on mobile)
  const visibleCount = 3;
  const visibleEvents = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleEvents.push(featuredEvents[(current + i) % featuredEvents.length]);
  }

  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Featured Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Trending and popular events happening soon
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={prev}
              className="p-0" >
              <DiscoButton name={<ChevronLeft className="w-6 text-white h-6" />}></DiscoButton>
            </button>
            <button
              onClick={next}
              className="p-0"
            >
              <DiscoButton name={<ChevronRight className="w-6 h-6" />}></DiscoButton>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3-column carousel */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visibleEvents.map((event, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-border hover:border-primary transition-all cursor-pointer hover:shadow-2xl"
              >
                {/* Image */}
                <div className={`relative h-48 ${event.image} overflow-hidden flex items-center justify-center`}>
                  {event.hot && (
                    <div className="absolute top-4 right-4 flex text-white items-center gap-1 px-3 py-1 bg-red-500 s rounded-full text-xs font-bold">
                      <Flame className="w-3 h-3" />
                      HOT
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-background">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.date}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(event.rating) ? "fill-secondary text-secondary" : "text-border"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{event.rating}</span>
                    <span className="text-xs text-muted-foreground">({event.reviews})</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{event.price}</span>
                    <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: 1-column carousel */}
          <div className="md:hidden">
            {[featuredEvents[current]].map((event) => (
              <div
                key={event.id}
                className="group rounded-2xl overflow-hidden border border-border hover:border-primary transition-all"
              >
                {/* Image */}
                <div className={`relative h-64 ${event.image} overflow-hidden flex items-center justify-center`}>
                  {event.hot && (
                    <div className="absolute top-4 right-4 text-white flex items-center gap-1 px-3 py-1 bg-red-500 s rounded-full text-xs font-bold">
                      <Flame className="w-3 h-3" />
                      HOT
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.date}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(event.rating) ? "fill-secondary text-secondary" : "text-border"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{event.rating}</span>
                    <span className="text-xs text-muted-foreground">({event.reviews})</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{event.price}</span>
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Mobile */}
          <div className="md:hidden flex gap-2 mt-6 justify-center">
            <button
              onClick={prev}
              className="p-3 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredEvents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setIsAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all relative overflow-hidden
      ${idx === current % featuredEvents.length
                  ? "bg-primary w-8"
                  : "bg-muted w-2 hover:bg-muted"
                }`}
            >
              {/* Optional small shimmer for active dot */}
              {idx === current % featuredEvents.length && (
                <span
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                    backgroundSize: "10px 10px",
                    animation: "dotShimmer 1s linear infinite",
                    borderRadius: "9999px",
                  }}
                />
              )}
            </button>
          ))}

          {/* CSS keyframes for small dot shimmer */}
          <style>{`
  @keyframes dotShimmer {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 10px 10px, -10px -10px; }
  }
`}</style>

        </div>
      </div>
    </section>
  );
}
