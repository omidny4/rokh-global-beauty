import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useShippingRates } from "@/hooks/useShippingRates";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Cart = () => {
  const { data: shippingRates, isLoading: isLoadingRates } = useShippingRates();
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [shippingCost, setShippingCost] = useState<number>(0);

  const cartItems = [
    {
      id: "1",
      name: "سرم هیالورونیک اسید",
      brand: "The Ordinary",
      price: 24.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80",
    },
    {
      id: "2",
      name: "اسانس موسین حلزون",
      brand: "COSRX",
      price: 18.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  const provinces = Array.from(
    new Set(shippingRates?.map((rate) => rate.province) || [])
  );

  useEffect(() => {
    if (selectedProvince && shippingRates) {
      const rate = shippingRates.find((r) => r.province === selectedProvince);
      if (rate) {
        setShippingCost(rate.rate);
      }
    }
  }, [selectedProvince, shippingRates]);

  const handleWhatsAppOrder = () => {
    if (!selectedProvince) {
      alert("لطفا استان خود را انتخاب کنید");
      return;
    }

    const orderDetails = cartItems.map(item => 
      `${item.name} (${item.brand}) - تعداد: ${item.quantity}`
    ).join('\n');
    
    const message = `سلام، می‌خواهم این محصولات را سفارش دهم:\n\n${orderDetails}\n\nاستان: ${selectedProvince}\nهزینه ارسال: ${shippingCost.toLocaleString('fa-IR')} تومان\n\nجمع کل: ${total.toFixed(2)}$`;
    const whatsappNumber = "905526862929";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-12">سبد خرید</h1>

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
                          {(item.price * item.quantity).toFixed(2)}$
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
              <h2 className="text-2xl font-serif font-bold mb-6">خلاصه سفارش</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">جمع جزء</span>
                  <span className="font-medium">{subtotal.toFixed(2)}$</span>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">انتخاب استان</label>
                  <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="استان خود را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      {isLoadingRates ? (
                        <SelectItem value="loading" disabled>در حال بارگذاری...</SelectItem>
                      ) : (
                        provinces.map((province) => (
                          <SelectItem key={province} value={province}>
                            {province}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">هزینه ارسال</span>
                  <span className="font-medium">
                    {shippingCost > 0 
                      ? `${shippingCost.toLocaleString('fa-IR')} تومان` 
                      : "انتخاب کنید"}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg">
                  <span className="font-semibold">جمع کل</span>
                  <span className="font-bold">{total.toFixed(2)}$</span>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppOrder}
                className="w-full mt-6 gradient-rosegold hover:opacity-90 transition-smooth" 
                size="lg"
              >
                ثبت سفارش از طریق واتساپ
              </Button>

              <Link to="/products">
                <Button variant="outline" className="w-full mt-4" size="lg">
                  ادامه خرید
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-secondary/30 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  🚚 زمان تحویل تقریبی: ۱ تا ۲ هفته از ترکیه
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
