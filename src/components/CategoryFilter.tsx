import { Category, categories } from "@/data/businesses";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
            selected === category
              ? "bg-gradient-gold text-primary-foreground shadow-gold"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
