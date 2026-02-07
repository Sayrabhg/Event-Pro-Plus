import { Link } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import DiscoBallButton from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-3 sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-primary hover:text-primary/90 transition-colors">
            <Calendar className="w-6 h-6" />
            <span className="hidden sm:inline">EventFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Home
            </Link>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Browse
            </a>
            <a href="#create" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Create Event
            </a>
            <DiscoBallButton name="Get Started" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <a href="#features" className="block text-foreground hover:text-primary transition-colors font-medium">
              Browse Events
            </a>
            <a href="#create" className="block text-foreground hover:text-primary transition-colors font-medium">
              Create Event
            </a>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
