import { Heart, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappMessage = encodeURIComponent("Olá! Desejo postar um anúncio no IBBB Empreende.");
  const whatsappLink = `https://wa.me/5521973061745?text=${whatsappMessage}`;

  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container py-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* CTA to advertise */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-4">
            <p className="text-foreground font-medium mb-2">Quer anunciar seu negócio?</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale conosco no WhatsApp</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
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
