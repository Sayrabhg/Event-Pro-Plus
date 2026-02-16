
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Header from "../components/Header";
import HeroBanner from "../components/sections/HeroBanner";
import CategoryShowcase from "../components/sections/CategoryShowcase";
import FeaturedEvents from "../components/sections/FeaturedEvents";
import TimeBuckets from "../components/sections/TimeBuckets";
import SearchResults from "../components/sections/SearchResults";
import TrustIndicators from "../components/sections/TrustIndicators";
import HowItWorks from "../components/sections/HowItWorks";
import FooterCTA from "../components/sections/FooterCTA";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedEvents />
      <TimeBuckets />
      <SearchResults />
      <TrustIndicators />
      <HowItWorks />
      <FooterCTA />

      {/* Footer */}
      <footer className="bg-lightgreen text-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Calendar className="w-6 h-6" />
                Zest Activation
              </div>
              <p className="text-sm leading-relaxed">
                Making event management effortless for organizers and attendees worldwide.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  support@Zest Activation.io
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Zest Activation. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
