import {
  Search,
  MapPin,
  Calendar,
  ArrowRight,
  ChevronDown,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DiscoBallButton from "../ui/button";

const categories = [
  "Music Events",
  "Corporate Events",
  "Weddings",
  "Birthday Parties",
  "DJ & Nightlife",
  "Exhibitions",
  "Workshops",
];


// import banner01 from "../../assets/banner01.jpg";
// import banner02 from "../../assets/banner02.jpg";
import banner03 from "../../assets/banner03.jpg";
import banner04 from "../../assets/banner04.jpg";

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const slides = [
    // { image: banner01, title: "Music Festivals" },
    // { image: banner02, title: "Tech Conferences" },
    { image: banner03, title: "Art Exhibitions" },
    { image: banner04, title: "Food Events" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchQuery, location, date });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* ===== Background Carousel ===== */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 🎨 Color Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-400/20"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 0%, 0 100%)",
          }}
        />


        {/* ✨ Soft Neon Glow */}
        {/* <div className="absolute top-24 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-24 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000" /> */}
      </div>


      {/* ===== Animated Blobs ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
          Discover Events
          <br className="hidden sm:block" />
          <span className="text-lprimary"> Near You</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Find and book amazing experiences happening around you.
        </p>

        {/* ===== Search Form ===== */}
        <form
          onSubmit={handleSearch}
          className="mb-12 bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 text-white placeholder-white/60 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
              <input
                type="text"
                placeholder="Location or city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 text-white placeholder-white/60 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>

            {/* Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="
                relative overflow-hidden
                flex-1 px-6 py-3
                bg-orange-600/90
                rounded-lg font-semibold text-white
                flex items-center justify-center gap-2

                transition-all duration-300 ease-out
                hover:bg-orange-500/80
                hover:backdrop-blur-md
                hover:shadow-lg hover:shadow-orange-500/30
                hover:scale-95

                before:absolute before:inset-0
                before:-translate-x-full
                before:bg-gradient-to-r
                before:from-transparent
                before:via-white/30
                before:to-transparent
                before:transition-transform
                before:duration-700
                hover:before:translate-x-full
              "
            >
              Search Events <ArrowRight className="w-5 h-5" />
            </button>


            <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                flex-1 sm:flex-none px-6 py-3
                bg-white/20 rounded-lg font-semibold text-white
                border border-white/30
                hover:bg-white/30 transition
              "
            >
              Browse All
            </button>

          </div>
        </form>

        {/* ===== CTA ===== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <DiscoBallButton name="Create Event" />
          <button className="px-8 py-4 bg-black/60 rounded-lg font-bold border border-white/30">
            Learn More
          </button>
        </div>

        {/* Scroll */}
        <button
          onClick={() => {
            document
              .getElementById("trust-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            group flex justify-self-center justify-center gap-2
            px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/20
            text-white/70 hover:text-white
            hover:bg-white/20
            animate-bounce
            transition-all
          "
        >
          <span className="text-sm font-semibold">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>

      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div
            ref={ref}
            className="
              relative z-10
              w-[90%] max-w-lg
              rounded-2xl
              bg-white/15 backdrop-blur-xl
              border border-white/30
              shadow-2xl
              p-6
              animate-in fade-in zoom-in-95
              text-white
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-primary font-bold">Browse Categories</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-0"
              >
                <DiscoBallButton name={<X className="w-6 h-6 stroke-[3]" />} />

              </button>
            </div>

            {/* Categories */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    console.log(item);
                    setOpen(false);
                  }}
                  className="
                    cursor-pointer
                    px-4 py-3
                    rounded-lg
                    bg-white/10
                    border border-white/20
                    hover:bg-white/20
                    transition
                    text-center
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </section>
  );
}
