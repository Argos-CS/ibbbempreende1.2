import { Phone, Instagram, MapPin } from "lucide-react";
import { Business } from "@/data/businesses";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  business: Business;
  onClick: () => void;
  index: number;
}

export function BusinessCard({ business, onClick, index }: BusinessCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer",
        "bg-gradient-card rounded-xl overflow-hidden",
        "border border-border/50 hover:border-primary/50",
        "shadow-card hover:shadow-hover",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2",
        "animate-slide-up"
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
            {business.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {business.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {business.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {business.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-md"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {business.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-primary" />
              <span>{business.phone}</span>
            </div>
          )}
          {business.instagram && (
            <div className="flex items-center gap-1">
              <Instagram className="w-3 h-3 text-primary" />
              <span>{business.instagram}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
