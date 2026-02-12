import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import DiscoButton from "../ui/button";

/* ===================== IN VIEW HOOK ===================== */
function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

/* ===================== DATA ===================== */
const stats = [
  { label: "Events Created", value: 50000, suffix: "+" },
  { label: "Happy Organizers", value: 25000, suffix: "+" },
  { label: "Tickets Sold", value: 10000000, suffix: "+" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    image: "bg-gradient-to-br from-pink-400 to-rose-400",
    text:
      "EventFlow transformed how I manage events. The interface is intuitive and the features are exactly what we needed.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Conference Director",
    image: "bg-gradient-to-br from-blue-400 to-cyan-400",
    text:
      "Managing 5000+ attendees has never been easier. The analytics dashboard gives us insights we never had before.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Festival Coordinator",
    image: "bg-gradient-to-br from-purple-400 to-pink-400",
    text:
      "The team collaboration features saved us hundreds of hours. This is a must-have tool for any event professional.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Workshop Creator",
    image: "bg-gradient-to-br from-green-400 to-emerald-400",
    text:
      "Customer support is outstanding and the platform is incredibly reliable. Highly recommend EventFlow!",
    rating: 5,
  },
];

/* ===================== COUNTER ===================== */
function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = value === 10000000 ? 10 : value;
    const steps = 80;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {value === 10000000 ? `${count.toFixed(0)}M` : count.toLocaleString()}
      {suffix}
    </>
  );
}

/* ===================== COMPONENT ===================== */
export default function TrustIndicators() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, inView } = useInView();

  const next = () =>
    setCurrentTestimonial((p) => (p + 1) % testimonials.length);

  const prev = () =>
    setCurrentTestimonial(
      (p) => (p - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="
      relative overflow-hidden
  py-20 sm:py-32
  bg-gradient-to-tr
  from-pink-50 via-orange-50 to-yellow-50
  dark:from-pink-950 dark:via-orange-950 dark:to-yellow-950
    ">
      {/* Decorative glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===================== STATS ===================== */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              data-visible={inView}
              className="
                text-center rounded-2xl
                bg-card/60 backdrop-blur
                border border-border p-8
                transition-all duration-700 ease-out
                hover:-translate-y-2 hover:shadow-xl hover:border-primary
                opacity-0 translate-y-6
                data-[visible=true]:opacity-100
                data-[visible=true]:translate-y-0
              "
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="text-5xl sm:text-6xl font-bold text-primary mb-4">
                {inView && (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ===================== TESTIMONIALS ===================== */}
        <div className="border-t border-border pt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            What Our Users Say
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="
              p-8 sm:p-12 rounded-2xl
              bg-gradient-to-br from-card via-card/90 to-card
              border-2 border-border
              shadow-xl hover:border-primary
              transition-all
            ">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-full ${testimonials[currentTestimonial].image}`}
                />
                <div>
                  <h3 className="font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  )
                )}
              </div>

              <p className="text-lg italic leading-relaxed relative text-foreground/90">
                <span className="absolute -top-6 -left-4 text-6xl text-primary/20">
                  “
                </span>
                {testimonials[currentTestimonial].text}
              </p>
            </div>

            {/* Navigation */}
            <div
              className="
    mt-8
    flex flex-col items-center gap-4
    md:flex-row md:items-center md:justify-between
  "
            >
              {/* Left – Arrows */}
              <div className="flex gap-3 md:justify-start">
                <button onClick={prev} className="p-0">
                  <DiscoButton
                    name={<ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />}
                  />
                </button>

                <button onClick={next} className="p-0">
                  <DiscoButton
                    name={<ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />}
                  />
                </button>
              </div>

              {/* Center – Dots */}
              <div className="flex gap-2 justify-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`
          h-2 rounded-full relative transition-all duration-300
          ${idx === currentTestimonial % testimonials.length
                        ? "bg-primary w-6 md:w-8 shadow-md"
                        : "bg-white w-2 hover:bg-muted-foreground"
                      }
        `}
                  >
                    {idx === currentTestimonial % testimonials.length && (
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                          backgroundSize: "10px 10px",
                          animation: "dotShimmer 1s linear infinite",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Right – Counter */}
              <p className="text-muted-foreground text-sm text-center md:text-right">
                {currentTestimonial + 1} of {testimonials.length}
              </p>
            </div>

          </div>

          {/* ===================== BRANDS ===================== */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-center text-muted-foreground mb-8 font-medium">
              Trusted by companies worldwide
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
              {["Google", "Microsoft", "Stripe", "Slack", "GitHub"].map(
                (brand) => (
                  <div
                    key={brand}
                    className="
                      w-32 h-12 rounded-lg
                      bg-card/80 backdrop-blur
                      border border-border
                      flex items-center justify-center
                      hover:border-primary hover:scale-105
                      transition-all
                    "
                  >
                    <span className="font-bold text-foreground/60 text-sm">
                      {brand}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
