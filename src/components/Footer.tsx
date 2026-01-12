import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container py-8">
        <div className="flex flex-col items-center text-center gap-4">
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
