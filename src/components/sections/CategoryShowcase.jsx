import { Music, Briefcase, BookOpen, Utensils, Dumbbell, Camera, Gamepad2, Users } from "lucide-react";
import DiscoButton from "../ui/button";

const categories = [
  { name: "Concerts", icon: Music, color: "from-pink-500 to-rose-500", events: "4.2K" },
  { name: "Business", icon: Briefcase, color: "from-blue-500 to-cyan-500", events: "8.1K" },
  { name: "Education", icon: BookOpen, color: "from-amber-500 to-orange-500", events: "5.3K" },
  { name: "Food & Drink", icon: Utensils, color: "from-green-500 to-emerald-500", events: "6.7K" },
  { name: "Sports", icon: Dumbbell, color: "from-violet-500 to-purple-500", events: "3.9K" },
  { name: "Art & Design", icon: Camera, color: "from-indigo-500 to-blue-500", events: "2.8K" },
  { name: "Gaming", icon: Gamepad2, color: "from-red-500 to-pink-500", events: "7.4K" },
  { name: "Networking", icon: Users, color: "from-teal-500 to-cyan-500", events: "9.2K" },
];

export default function CategoryShowcase() {
  return (
    <section id="trust-section" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find events that match your interests and passions
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-white gap-4 sm:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

                {/* Content */}
                <div className="relative p-6 sm:p-8 h-64 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                    <IconComponent className="w-7 h-7 s" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl sm:text-2xl text-white font-bold s mb-2">
                      {category.name}
                    </h3>
                    <p className="s/80 text-white text-sm sm:text-base">
                      {category.events} events
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <DiscoButton name="Explore" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll Hint */}
        <div className="md:hidden mt-8 text-center text-muted-foreground text-sm">
          Swipe to see more categories
        </div>
      </div>
    </section>
  );
}
