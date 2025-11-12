import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Authentic International Beauty
              </p>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Discover Premium Beauty from Around the World
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Curated collection of authentic cosmetics and skincare from Europe, 
                Korea, and USA. Shipped directly from Turkey to your door in 1-2 weeks.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="gradient-rosegold shadow-elegant hover:opacity-90 transition-smooth">
                  Shop Now
                </Button>
              </Link>
              <Link to="/products?discount=true">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary/50 transition-smooth">
                  View Special Offers
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Authentic Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1-2 Weeks</p>
                <p className="text-sm text-muted-foreground">Delivery Time</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Worldwide</p>
                <p className="text-sm text-muted-foreground">Shipping</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Premium beauty products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-elegant">
              <p className="text-sm text-muted-foreground mb-1">Shipped from</p>
              <p className="text-xl font-serif font-bold gradient-rosegold bg-clip-text text-transparent">
                Turkey 🇹🇷
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
