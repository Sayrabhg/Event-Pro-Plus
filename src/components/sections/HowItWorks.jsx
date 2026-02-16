import { Plus, Zap, TrendingUp, ArrowRight } from "lucide-react";
import DiscoButton from "../ui/button";

const steps = [
  {
    number: "1",
    icon: Plus,
    title: "Create Your Event",
    description: "Set up your event with our intuitive form. Add details, pricing, venue information, and custom branding.",
    features: ["Easy event setup", "Customizable templates", "Rich media support"],
  },
  {
    number: "2",
    icon: Zap,
    title: "Promote & Sell",
    description: "Use built-in marketing tools to reach your audience. Manage tickets, promote across channels, and track sales.",
    features: ["Social sharing", "Email marketing", "Ticket management"],
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Analyze & Grow",
    description: "Get detailed analytics and insights. Understand your audience better and grow your events with data.",
    features: ["Real-time analytics", "Attendee insights", "Performance reports"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 bg-lightgreen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/90">
            Get your event up and running in just three simple steps
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {!isLast && (
                  <div className="hidden md:block absolute top-24 -right-8 w-8 h-1 
      bg-gradient-to-r from-emerald-400 to-lime-400" />
                )}

                {/* Step Card */}
                <div className="group cursor-pointer rounded-3xl p-6 
    bg-emerald-950/60 backdrop-blur-xl 
    border border-white/10 hover:border-emerald-400
    transition-all duration-300 hover:-translate-y-2">

                  {/* Step Number Circle */}
                  <div className="w-16 h-16 mx-auto mb-6 
      bg-gradient-to-br from-emerald-400 to-lime-500
      rounded-full flex items-center justify-center 
      font-bold text-2xl text-emerald-950
      transform group-hover:scale-110 transition-transform shadow-xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl 
        bg-emerald-900/70 border border-emerald-400/30
        flex items-center justify-center 
        group-hover:bg-emerald-400/20 transition-all">
                      <IconComponent className="w-10 h-10 text-emerald-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold group-hover:text-white text-center mb-3 
      text-emerald-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-white/80 text-center mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
                        <span className="text-white/90 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <button className="w-full mt-8 px-6 py-3 rounded-xl
      bg-green-600 hover:bg-green-500
      text-white font-semibold
      transition-all flex items-center justify-center gap-2
      shadow-lg hover:shadow-orange-500/40">
                    Learn More
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            );
          })}
        </div>

        {/* CTA Section */}
        <div className="
            mt-20 p-12 rounded-2xl text-center
    border border-emerald-500/40
    shadow-lg
    backdrop-blur-sm
    transition-all duration-500 ease-out

    hover:-translate-y-1
    hover:border-emerald-400
    hover:shadow-emerald-500/30
    hover:shadow-2xl

    hover:bg-gradient-to-br
    hover:from-emerald-900/20
    hover:to-emerald-700/10
        ">
          <h3 className="text-2xl text-white sm:text-3xl font-bold mb-4">
            Ready to create your first event?
          </h3>

          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Join thousands of event organizers who are already using Zest Activation to bring their events to life.
          </p>

          <DiscoButton name="Start Creating Today" />
        </div>

      </div>
    </section>
  );
}
