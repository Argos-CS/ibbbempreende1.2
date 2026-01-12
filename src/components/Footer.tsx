import { Heart, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container py-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a 
              href="tel:21973061745" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>(21) 97306-1745</span>
            </a>
            <a 
              href="mailto:batistaibbb@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>batistaibbb@gmail.com</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Made with love */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>pela comunidade IBBB</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IBBB Empreende. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
