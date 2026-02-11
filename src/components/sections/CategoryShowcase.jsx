import { Music, Briefcase, BookOpen, Utensils, Dumbbell, Camera, Gamepad2, Users } from "lucide-react";
import DiscoButton from "../ui/button";
import concert from "../../assets/categories/concert.jpg";
import business from "../../assets/categories/business.png"
import artdesign from "../../assets/categories/art&design.webp"
import education from "../../assets/categories/education.jpg"
import fooddrink from "../../assets/categories/food&drink.webp"
import gaming from "../../assets/categories/gaming.jpeg"
import networking from "../../assets/categories/networking.webp"
import sports from "../../assets/categories/sports.webp"

const categories = [
  { name: "Concerts", icon: Music, image: concert, color: "from-pink-500 to-rose-500", events: "4.2K" },
  { name: "Business", icon: Briefcase, image: business, color: "from-blue-500 to-cyan-500", events: "8.1K" },
  { name: "Education", icon: BookOpen, image: education, color: "from-amber-500 to-orange-500", events: "5.3K" },
  { name: "Food & Drink", icon: Utensils, image: fooddrink, color: "from-green-500 to-emerald-500", events: "6.7K" },
  { name: "Sports", icon: Dumbbell, image: sports, color: "from-violet-500 to-purple-500", events: "3.9K" },
  { name: "Art & Design", icon: Camera, image: artdesign, color: "from-indigo-500 to-blue-500", events: "2.8K" },
  { name: "Gaming", icon: Gamepad2, image: gaming, color: "from-red-500 to-pink-500", events: "7.4K" },
  { name: "Networking", icon: Users, image: networking, color: "from-teal-500 to-cyan-500", events: "9.2K" },
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
                {/* Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors" />

                {/* Content */}
                <div className="relative p-6 sm:p-8 h-64 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white [text-shadow:0_0_8px_rgba(34,197,94,0.8)]">
                      {category.name}
                    </h3>

                    <p className="text-white/80 text-sm sm:text-base">
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
