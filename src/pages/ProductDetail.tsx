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
                alt="محصول"
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
                    alt={`تصویر کوچک ${i}`}
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
                سرم هیالورونیک اسید ۲٪ + B5
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
                  (۱۲۸ نظر)
                </span>
              </div>
              <Badge variant="outline" className="mb-4">🇨🇦 ساخت کانادا</Badge>
            </div>

            <Separator />

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold">۲۴.۹۹$</span>
                <span className="text-xl text-muted-foreground line-through">
                  ۲۹.۹۹$
                </span>
                <Badge className="bg-primary text-primary-foreground">
                  ۱۷٪-
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">شامل مالیات</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  تعداد
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
                    موجود در انبار
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 gradient-rosegold hover:opacity-90 transition-smooth">
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  افزودن به سبد خرید
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
                  <p className="font-medium">ارسال سریع از ترکیه</p>
                  <p className="text-sm text-muted-foreground">
                    تحویل در ۱ تا ۲ هفته به سراسر جهان
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">۱۰۰٪ اصل</p>
                  <p className="text-sm text-muted-foreground">
                    تضمین اصالت محصولات
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
              <TabsTrigger value="description">توضیحات</TabsTrigger>
              <TabsTrigger value="ingredients">مواد تشکیل‌دهنده</TabsTrigger>
              <TabsTrigger value="reviews">نظرات</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 mt-8">
              <h3 className="text-2xl font-serif font-bold">توضیحات محصول</h3>
              <p className="text-muted-foreground leading-relaxed">
                یک فرمول پشتیبانی هیدراتاسیون با هیالورونیک اسید فوق‌العاده خالص و وگان. این فرمول ترکیبی از مولکول‌های هیالورونیک اسید با وزن مولکولی کم، متوسط و بالا را همراه با یک کراس‌پلیمر HA نسل بعدی در غلظت ترکیبی ۲٪ برای هیدراتاسیون چند عمقی ارائه می‌دهد.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                سرم هیالورونیک اسید ۲٪ + B5 اوردینری یک سرم پایه آبی است که چندین لایه پوست را هدف قرار می‌دهد تا ظاهر نرمی پوست را بهبود بخشد و می‌تواند به حفظ آب در پوست کمک کند.
              </p>
            </TabsContent>
            <TabsContent value="ingredients" className="space-y-4 mt-8">
              <h3 className="text-2xl font-serif font-bold">مواد تشکیل‌دهنده کامل</h3>
              <p className="text-muted-foreground leading-relaxed">
                آب، سدیم هیالورونات، پنتیلن گلایکول، پروپاندیول، کراس‌پلیمر سدیم هیالورونات، پانتنول، عصاره آنفلتیا کونسینا، گلیسیرین، تری‌سدیم اتیلن‌دی‌آمین دی‌سوکسینات، اسید سیتریک و سایر مواد.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6 mt-8">
              <h3 className="text-2xl font-serif font-bold">نظرات مشتریان</h3>
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-border pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-medium mb-1">محصول عالی!</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    پوست من خیلی مرطوب و شاداب شده. حتماً دوباره خریداری می‌کنم.
                  </p>
                  <p className="text-xs text-muted-foreground">سارا م. - ۲ هفته پیش</p>
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
