import {
  MapPin,
  Users,
  X,
  ChevronDown,
  Grid2X2,
  List,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import DiscoButton from "../ui/button";

/* ----------------------------- DATA ----------------------------- */

const EVENTS = [
  { id: 1, title: "Tech Summit 2024", location: "San Francisco", price: 299, attendees: 2340, category: "Business", image: "bg-blue-500" },
  { id: 2, title: "Jazz Night", location: "New York", price: 85, attendees: 540, category: "Music", image: "bg-pink-500" },
  { id: 3, title: "Yoga Workshop", location: "Los Angeles", price: 45, attendees: 180, category: "Wellness", image: "bg-green-500" },
  { id: 4, title: "Web Dev Bootcamp", location: "Remote", price: 199, attendees: 890, category: "Education", image: "bg-purple-500" },
  { id: 5, title: "Food Festival", location: "Austin", price: 59, attendees: 1200, category: "Food", image: "bg-orange-500" },
  { id: 6, title: "Design Conference", location: "Miami", price: 249, attendees: 670, category: "Design", image: "bg-indigo-500" },
  { id: 7, title: "Networking Mixer", location: "Boston", price: 29, attendees: 420, category: "Business", image: "bg-cyan-500" },
  { id: 8, title: "Photography Walk", location: "Portland", price: 35, attendees: 95, category: "Art", image: "bg-rose-500" },
  { id: 9, title: "Startup Pitch Day", location: "Seattle", price: 0, attendees: 340, category: "Business", image: "bg-violet-500" },
  { id: 10, title: "Music Production", location: "Nashville", price: 179, attendees: 280, category: "Music", image: "bg-red-500" },
];

const FILTERS = ["Business", "Music", "Education", "Food", "Wellness", "Design"];
const SORT_OPTIONS = ["Trending", "Latest", "Price: Low to High", "Price: High to Low"];

/* --------------------------- COMPONENT --------------------------- */

export default function SearchResults() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  const [sortBy, setSortBy] = useState("Trending");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* --------------------------- HELPERS --------------------------- */

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  let filteredEvents =
    selectedFilters.length === 0
      ? [...EVENTS]
      : EVENTS.filter((event) =>
        selectedFilters.includes(event.category)
      );

  /* Sorting logic */
  if (sortBy === "Price: Low to High") {
    filteredEvents.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "Price: High to Low") {
    filteredEvents.sort((a, b) => b.price - a.price);
  }

  /* ---------------------------- JSX ----------------------------- */

  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Browse All Events ({filteredEvents.length})
        </h2>

        {/* Filter Bar */}
        <div className="sticky top-20 bg-white border-b p-4 z-10">
          <div className="flex justify-between items-center gap-4 mb-4">

            {/* -------- SORT DROPDOWN -------- */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg
                           hover:border-primary transition-all"
              >
                <span className="text-sm font-medium">Sort by:</span>
                <span className="text-primary">{sortBy}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${sortOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {sortOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-lg border bg-white shadow-lg z-50">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm
                        hover:bg-muted transition-colors
                        ${sortBy === option
                          ? "bg-primary/10 text-primary font-semibold"
                          : ""}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid"
                  ? "bg-primary text-white"
                  : "border"
                  }`}
              >
                <Grid2X2 />
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list"
                  ? "bg-primary text-white"
                  : "border"
                  }`}
              >
                <List />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full ${selectedFilters.includes(filter)
                  ? "bg-primary text-white"
                  : "bg-muted"
                  }`}
              >
                {filter}
              </button>
            ))}

            {selectedFilters.length > 0 && (
              <button
                onClick={() => setSelectedFilters([])}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-primary"
              >
                Clear
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ------------------------ GRID VIEW ------------------------ */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                {/* Image */}
                <div className={`${event.image} h-40 relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button className="w-full py-2 bg-primary text-white rounded-lg font-semibold">
                      View
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      {event.attendees.toLocaleString()} going
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="font-bold text-primary">
                        {event.price === 0 ? "Free" : `$${event.price}`}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ------------------------ LIST VIEW ------------------------ */}
        {viewMode === "list" && (
          <div className="space-y-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative p-4 rounded-lg border border-border 
                   transition-all duration-300 ease-out
                   hover:-translate-y-1 hover:border-primary
                   hover:bg-muted/60 hover:shadow-lg
                   flex justify-between items-center"
              >
                {/* Left */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Image */}
                  <div
                    className={`${event.image} w-20 h-20 rounded-lg 
                        transition-transform duration-300
                        group-hover:scale-105`}
                  />

                  <div className="flex-1">
                    {/* Title */}
                    <h3
                      className="font-bold transition-all duration-300
                         group-hover:text-primary"
                    >
                      {event.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  {/* Price */}
                  <span className="font-bold text-primary transition-transform group-hover:scale-105">
                    {event.price === 0 ? "Free" : `$${event.price}`}
                  </span>

                  {/* Button */}
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-lg font-semibold
                       transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
                       hover:scale-105"
                  >
                    Details
                  </button>
                </div>

                {/* Subtle Hover Glow Line */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]
                     bg-gradient-to-r from-transparent via-primary to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center my-6">
          <DiscoButton name="Load More Events" />
        </div>
      </div>
    </section>
  );
}
