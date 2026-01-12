import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryFilter } from "@/components/CategoryFilter";
import { BusinessCard } from "@/components/BusinessCard";
import { BusinessModal } from "@/components/BusinessModal";
import { businesses, Category, Business } from "@/data/businesses";
import { Search } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const matchesCategory =
        selectedCategory === "Todos" || business.category === selectedCategory;
      const matchesSearch =
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.highlights.some((h) =>
          h.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12 md:py-16">
        {/* Search & Filter Section */}
        <section className="mb-12">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar empreendedor ou produto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">{filteredBusinesses.length}</span>
            {" "}empreendedor{filteredBusinesses.length !== 1 ? "es" : ""} encontrado{filteredBusinesses.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Business Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBusinesses.map((business, index) => (
            <BusinessCard
              key={business.id}
              business={business}
              index={index}
              onClick={() => setSelectedBusiness(business)}
            />
          ))}
        </section>

        {/* Empty State */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-2">
              Nenhum empreendedor encontrado
            </p>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou a busca
            </p>
          </div>
        )}
      </main>

      <Footer />

      {/* Business Modal */}
      <BusinessModal
        business={selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
      />
    </div>
  );
};

export default Index;
