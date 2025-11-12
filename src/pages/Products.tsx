import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "Hyaluronic Acid Serum",
      brand: "The Ordinary",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
      category: "Skincare",
      inStock: true,
      origin: "🇨🇦 Canada",
    },
    {
      id: "2",
      name: "Sunset Eyeshadow Palette",
      brand: "Huda Beauty",
      price: 65.0,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80",
      category: "Makeup",
      inStock: true,
      origin: "🇺🇸 USA",
    },
    {
      id: "3",
      name: "Snail Mucin Essence",
      brand: "COSRX",
      price: 18.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80",
      category: "Skincare",
      inStock: true,
      origin: "🇰🇷 Korea",
    },
    {
      id: "4",
      name: "Velvet Matte Lipstick",
      brand: "MAC",
      price: 19.0,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
      category: "Makeup",
      inStock: true,
      origin: "🇺🇸 USA",
    },
    {
      id: "5",
      name: "Moisturizing Hair Mask",
      brand: "Olaplex",
      price: 28.0,
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80",
      category: "Haircare",
      inStock: true,
      origin: "🇺🇸 USA",
    },
    {
      id: "6",
      name: "Floral Eau de Parfum",
      brand: "Chanel",
      price: 135.0,
      originalPrice: 150.0,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
      category: "Fragrances",
      inStock: true,
      origin: "🇫🇷 France",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of authentic international beauty products
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>

          <div className="flex-1" />

          <Select defaultValue="featured">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
