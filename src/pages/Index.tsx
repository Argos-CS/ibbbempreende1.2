import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BusinessCard } from "@/components/BusinessCard";
import { BusinessModal } from "@/components/BusinessModal";
import { CategoryFilter } from "@/components/CategoryFilter";
import { businesses, categories, Category, Business } from "@/data/businesses";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  // Filter businesses by search query and category
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const matchesSearch = !searchQuery || 
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.highlights.some((h) =>
          h.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesCategory = selectedCategory === "Todos" || business.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Group businesses by category
  const businessesByCategory = useMemo(() => {
    const grouped: Record<Category, Business[]> = {} as Record<Category, Business[]>;
    
    categories.filter(c => c !== "Todos").forEach(category => {
      grouped[category] = filteredBusinesses.filter(b => b.category === category);
    });
    
    return grouped;
  }, [filteredBusinesses]);

  // Get categories that have businesses
  const activeCategories = useMemo(() => {
    return categories.filter(c => c !== "Todos" && businessesByCategory[c]?.length > 0);
  }, [businessesByCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12 md:py-16">
        {/* Search Section */}
        <section className="mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar empreendedor ou produto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base"
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        {/* Category Sections */}
        {activeCategories.map((category) => (
          <section key={category} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                <span className="text-primary">{category}</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {/* Business Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {businessesByCategory[category].map((business, index) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  index={index}
                  onClick={() => setSelectedBusiness(business)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Empty State */}
        {activeCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-2">
              Nenhum empreendedor encontrado
            </p>
            <p className="text-muted-foreground">
              Tente ajustar a busca ou filtro
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
