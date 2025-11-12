import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  origin: string;
}

const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  category,
  inStock,
  origin,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth">
      {/* Image Container */}
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {discount > 0 && (
              <Badge className="bg-primary text-primary-foreground">
                -{discount}%
              </Badge>
            )}
            {!inStock && (
              <Badge variant="secondary" className="bg-muted text-muted-foreground">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-smooth"
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-primary text-primary" : "text-muted-foreground"
              }`}
            />
          </button>

          {/* Origin Badge */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
              {origin}
            </Badge>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        <Link to={`/product/${id}`}>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{brand}</p>
            <h3 className="font-semibold line-clamp-2 hover:text-primary transition-smooth">
              {name}
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
          </div>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            size="icon"
            disabled={!inStock}
            className="gradient-rosegold hover:opacity-90 transition-smooth"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
