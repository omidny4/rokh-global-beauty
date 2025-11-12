import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Truck, Shield, Star } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-smooth"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80`}
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">The Ordinary</p>
              <h1 className="text-4xl font-serif font-bold mb-4">
                Hyaluronic Acid 2% + B5 Serum
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  (128 reviews)
                </span>
              </div>
              <Badge variant="outline" className="mb-4">🇨🇦 Made in Canada</Badge>
            </div>

            <Separator />

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold">$24.99</span>
                <span className="text-xl text-muted-foreground line-through">
                  $29.99
                </span>
                <Badge className="bg-primary text-primary-foreground">
                  -17%
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Tax included</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-smooth"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-border">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-smooth"
                    >
                      +
                    </button>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    In Stock
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 gradient-rosegold hover:opacity-90 transition-smooth">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-primary border-primary" : ""}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-primary" : ""}`}
                  />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Fast Shipping from Turkey</p>
                  <p className="text-sm text-muted-foreground">
                    Delivered in 1-2 weeks worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">100% Authentic</p>
                  <p className="text-sm text-muted-foreground">
                    Guaranteed genuine products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 mt-8">
              <h3 className="text-2xl font-serif font-bold">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                A hydration support formula with ultra-pure, vegan hyaluronic acid. 
                This formula combines low-, medium- and high-molecular weight hyaluronic 
                acid molecules along with a next-generation HA crosspolymer at a combined 
                concentration of 2% for multi-depth hydration. Pro-Vitamin B5 also enhances 
                surface hydration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Ordinary's Hyaluronic Acid 2% + B5 is a water-based serum that targets 
                multiple layers of the skin to improve the appearance of skin smoothness. 
                It can help retain water in the skin and leave skin feeling plump and healthy.
              </p>
            </TabsContent>
            <TabsContent value="ingredients" className="space-y-4 mt-8">
              <h3 className="text-2xl font-serif font-bold">Full Ingredients</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aqua (Water), Sodium Hyaluronate, Pentylene Glycol, Propanediol, 
                Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, 
                Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, 
                Isoceteth-20, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, 
                1,2-Hexanediol, Phenoxyethanol, Caprylyl Glycol.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6 mt-8">
              <h3 className="text-2xl font-serif font-bold">Customer Reviews</h3>
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-border pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-medium mb-1">Amazing product!</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    My skin feels so hydrated and plump. Will definitely repurchase.
                  </p>
                  <p className="text-xs text-muted-foreground">Sarah M. - 2 weeks ago</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
