import { X, Phone, Instagram, MapPin, ExternalLink } from "lucide-react";
import { Business } from "@/data/businesses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BusinessModalProps {
  business: Business | null;
  onClose: () => void;
}

export function BusinessModal({ business, onClose }: BusinessModalProps) {
  if (!business) return null;

  const whatsappNumber = business.phone.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/55${whatsappNumber}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-2xl max-h-[90vh] overflow-auto",
          "bg-gradient-card rounded-2xl",
          "border border-border shadow-hover",
          "animate-scale-in"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative h-72 md:h-80">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute bottom-4 left-6">
            <span className="px-4 py-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-full shadow-gold">
              {business.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
            {business.name}
          </h2>

          <p className="text-muted-foreground mb-6">
            {business.description}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-foreground mb-3">Produtos/Serviços:</h4>
            <div className="flex flex-wrap gap-2">
              {business.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg border border-border"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            {business.phone && (
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>{business.phone}</span>
              </div>
            )}
            {business.instagram && (
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <span>{business.instagram}</span>
              </div>
            )}
            {business.address && (
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>{business.address}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          {business.phone && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg shadow-gold transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Entrar em Contato
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
