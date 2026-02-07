import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import DiscoButton from "../ui/button";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary via-purple-600 to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold s mb-6">
          Ready to Create Your Event?
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl s/90 mb-12 max-w-2xl mx-auto">
          Join thousands of event organizers who've transformed how they create
          and manage events. Get started free today!
        </p>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 s/60" />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/20 s placeholder-white/60 rounded-lg border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 sm:py-4 bg-secondary s rounded-lg font-bold hover:bg-secondary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Start Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-200 text-sm font-medium">{error}</p>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="flex items-center gap-2 justify-center s font-medium">
              <CheckCircle className="w-5 h-5" />
              Great! Check your email for next steps.
            </div>
          )}
        </form>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <DiscoButton name="Create Account" />
          <button className="px-8 py-4 bg-white/20 hover:bg-white/30 s rounded-lg font-bold border border-white/30 transition-all">
            Browse Events
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 s/80 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span>Free forever plan available</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
