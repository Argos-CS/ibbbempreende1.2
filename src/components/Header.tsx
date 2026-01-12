import logo from "@/assets/logo-ibbb.jpeg";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-hero hexagon-pattern">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container relative z-10 py-12 md:py-20">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150" />
            <img
              src={logo}
              alt="IBBB Empreende"
              className="relative w-40 h-40 md:w-52 md:h-52 object-contain rounded-2xl shadow-hover"
            />
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">IBBB </span>
            <span className="text-gradient-gold">Empreende</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
            Segunda Feira de Oportunidades e Negócios
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl">
            Conheça os empreendedores da nossa comunidade e apoie negócios locais. 
            Qualidade, dedicação e confiança em cada produto e serviço.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </header>
  );
}
