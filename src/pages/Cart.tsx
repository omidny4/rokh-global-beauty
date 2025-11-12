import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      id: "1",
      name: "Hyaluronic Acid Serum",
      brand: "The Ordinary",
      price: 24.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80",
    },
    {
      id: "2",
      name: "Snail Mucin Essence",
      brand: "COSRX",
      price: 18.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <button className="p-2 hover:bg-muted transition-smooth">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 border-x border-border min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button className="p-2 hover:bg-muted transition-smooth">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <p className="text-xl font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button className="text-muted-foreground hover:text-destructive transition-smooth">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24">
              <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mt-6 gradient-rosegold hover:opacity-90 transition-smooth" size="lg">
                Proceed to Checkout
              </Button>

              <Link to="/products">
                <Button variant="outline" className="w-full mt-4" size="lg">
                  Continue Shopping
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-secondary/30 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  🚚 Estimated delivery: 1-2 weeks from Turkey
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
