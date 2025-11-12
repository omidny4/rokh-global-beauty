import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Sparkles, Droplet, Flower2, Wind } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Makeup",
      description: "Premium cosmetics for every look",
      icon: Sparkles,
      href: "/products?category=makeup",
      gradient: "bg-gradient-to-br from-pink-100 to-rose-100",
    },
    {
      title: "Skincare",
      description: "Nourish and protect your skin",
      icon: Droplet,
      href: "/products?category=skincare",
      gradient: "bg-gradient-to-br from-blue-100 to-cyan-100",
    },
    {
      title: "Haircare",
      description: "Beautiful hair starts here",
      icon: Flower2,
      href: "/products?category=haircare",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      title: "Fragrances",
      description: "Signature scents from around the world",
      icon: Wind,
      href: "/products?category=fragrances",
      gradient: "bg-gradient-to-br from-amber-100 to-orange-100",
    },
  ];

  const featuredProducts = [
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
      inStock: false,
      origin: "🇺🇸 USA",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of authentic beauty products from trusted international brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">
                Handpicked bestsellers loved by our customers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Why Choose ROKH?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold mb-2">100% Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  All products are genuine and sourced directly from official distributors
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Delivered from Turkey to your door in just 1-2 weeks
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our beauty experts are here to help via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
