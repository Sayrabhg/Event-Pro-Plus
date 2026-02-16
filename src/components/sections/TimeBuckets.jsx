import { MapPin, Users, Clock, ArrowRight } from "lucide-react";

const timeBuckets = [
  {
    name: "Live Now",
    color: "bg-green-900/90 border-red-500/30",
    badge: "LIVE",
    badgeColor: "bg-red-500",
    events: [
      {
        id: 1,
        title: "Spring Product Launch",
        location: "San Francisco, CA",
        attendees: 2410,
        time: "In progress",
      },
      {
        id: 2,
        title: "Web Summit 2024",
        location: "Lisbon, Portugal",
        attendees: 8540,
        time: "3 hrs left",
      },
      {
        id: 3,
        title: "Startup Pitch Event",
        location: "New York, NY",
        attendees: 1240,
        time: "2 hrs left",
      },
    ],
  },
  {
    name: "This Weekend",
    color: "bg-green-900/90 border-amber-500/30",
    badge: "SOON",
    badgeColor: "bg-amber-500",
    events: [
      {
        id: 4,
        title: "Jazz Festival Opening",
        location: "New Orleans, LA",
        attendees: 5320,
        time: "Sat 6:00 PM",
      },
      {
        id: 5,
        title: "Yoga Retreat Workshop",
        location: "Sedona, AZ",
        attendees: 280,
        time: "Sat 9:00 AM",
      },
      {
        id: 6,
        title: "Coding Bootcamp Day 1",
        location: "Remote",
        attendees: 1560,
        time: "Sun 10:00 AM",
      },
    ],
  },
  {
    name: "Next Week",
    color: "bg-green-900/90 border-blue-500/30",
    badge: "UPCOMING",
    badgeColor: "bg-blue-500",
    events: [
      {
        id: 7,
        title: "Marketing Conference",
        location: "Chicago, IL",
        attendees: 3890,
      },
      {
        id: 8,
        title: "AI Workshop",
        location: "Boston, MA",
        attendees: 720,
      },
    ],
  },
];

export default function TimeBuckets() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Events by Timeline
          </h2>
          <p className="text-lg dark:bg-primary max-w-2xl mx-auto">
            Explore what's happening now and what's coming up
          </p>
        </div>

        {/* Time Buckets Grid */}
        <div className="grid text-primary md:grid-cols-3 gap-8">
          {timeBuckets.map((bucket, bucketIdx) => (
            <div key={bucket.name} className={`rounded-2xl border p-8 ${bucket.color} transition-all hover:shadow-lg`}>
              {/* Bucket Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className={`${bucket.badgeColor} s px-3 py-1 rounded-full text-white text-xs font-bold`}>
                  {bucket.badge}
                </span>
                <h3 className="text-2xl font-bold text-foreground">{bucket.name}</h3>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {bucket.events.map((event, eventIdx) => (
                  <div
                    key={event.id}
                    className="group p-4 rounded-xl bg-white/50  dark:bg-white/50 hover:bg-white dark:hover:bg-white transition-all cursor-pointer border border-transparent hover:border-primary/30"
                  >
                    {/* Event Title */}
                    <h4 className="font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h4>

                    {/* Event Details Grid */}
                    <div className="space-y-2 text-sm">
                      {/* Location */}
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>

                      {/* Attendees */}
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>{event.attendees.toLocaleString()} going</span>
                      </div>

                      {/* Time (if available) */}
                      {event.time && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium ">{event.time}</span>
                        </div>
                      )}
                    </div>

                    {/* Hover CTA */}
                    <div className="mt-3 pt-3 border-t border-border/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex items-center dark:text-white gap-2 font-semibold text-sm hover:gap-3 transition-all">
                        View Event
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <button className="w-full mt-6 px-4 py-3 border-2 dark:text-white border-border hover:border-primary hover:text-primary rounded-lg font-semibold transition-all">
                View All in {bucket.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
