import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Sparkles, Droplet, Flower2, Wind } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "آرایش",
      description: "لوازم آرایشی درجه یک برای هر ظاهری",
      icon: Sparkles,
      href: "/products?category=makeup",
      gradient: "bg-gradient-to-br from-pink-100 to-rose-100",
    },
    {
      title: "مراقبت از پوست",
      description: "تغذیه و محافظت از پوست شما",
      icon: Droplet,
      href: "/products?category=skincare",
      gradient: "bg-gradient-to-br from-blue-100 to-cyan-100",
    },
    {
      title: "مراقبت از مو",
      description: "موهای زیبا از اینجا شروع می‌شود",
      icon: Flower2,
      href: "/products?category=haircare",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      title: "عطر و ادکلن",
      description: "رایحه‌های امضایی از سراسر جهان",
      icon: Wind,
      href: "/products?category=fragrances",
      gradient: "bg-gradient-to-br from-amber-100 to-orange-100",
    },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "سرم هیالورونیک اسید",
      brand: "The Ordinary",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
      category: "مراقبت از پوست",
      inStock: true,
      origin: "🇨🇦 کانادا",
    },
    {
      id: "2",
      name: "پالت سایه چشم غروب",
      brand: "Huda Beauty",
      price: 65.0,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80",
      category: "آرایش",
      inStock: true,
      origin: "🇺🇸 آمریکا",
    },
    {
      id: "3",
      name: "اسانس موسین حلزون",
      brand: "COSRX",
      price: 18.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80",
      category: "مراقبت از پوست",
      inStock: true,
      origin: "🇰🇷 کره",
    },
    {
      id: "4",
      name: "رژ لب مات مخملی",
      brand: "MAC",
      price: 19.0,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
      category: "آرایش",
      inStock: false,
      origin: "🇺🇸 آمریکا",
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
            <h2 className="text-4xl font-serif font-bold mb-4">خرید بر اساس دسته‌بندی</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              مجموعه‌ای منتخب از محصولات زیبایی اصل از برندهای معتبر بین‌المللی
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
              <h2 className="text-4xl font-serif font-bold mb-4">محصولات منتخب</h2>
              <p className="text-muted-foreground">
                پرفروش‌ترین محصولات محبوب مشتریان ما
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
              چرا رُخ را انتخاب کنید؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-semibold mb-2">۱۰۰٪ اصل</h3>
                <p className="text-sm text-muted-foreground">
                  تمامی محصولات اصل و مستقیماً از نمایندگی‌های رسمی تهیه می‌شوند
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">ارسال سریع</h3>
                <p className="text-sm text-muted-foreground">
                  از ترکیه تا در خانه شما فقط در ۱ تا ۲ هفته
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold mb-2">پشتیبانی تخصصی</h3>
                <p className="text-sm text-muted-foreground">
                  کارشناسان زیبایی ما از طریق واتساپ در خدمت شما هستند
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
