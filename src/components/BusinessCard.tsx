import { Phone, Instagram } from "lucide-react";
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
      {/* Image Container - Aspect ratio preservado */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-contain bg-secondary transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Subtle gradient overlay only at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/80 to-transparent" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
