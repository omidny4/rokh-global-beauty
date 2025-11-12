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
                محصولات زیبایی اصل بین‌المللی
              </p>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
                کشف محصولات زیبایی درجه یک از سراسر جهان
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                مجموعه‌ای منتخب از لوازم آرایشی و بهداشتی اصل از برندهای معتبر اروپا، کره و آمریکا. ارسال مستقیم از ترکیه به در خانه شما در ۱ تا ۲ هفته.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="gradient-rosegold shadow-elegant hover:opacity-90 transition-smooth">
                  خرید کنید
                </Button>
              </Link>
              <Link to="/products?discount=true">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-secondary/50 transition-smooth">
                  تخفیف‌های ویژه
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <p className="text-2xl font-bold text-foreground">۱۰۰٪</p>
                <p className="text-sm text-muted-foreground">محصولات اصل</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">۱ تا ۲ هفته</p>
                <p className="text-sm text-muted-foreground">زمان تحویل</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">سراسر جهان</p>
                <p className="text-sm text-muted-foreground">ارسال</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="محصولات زیبایی درجه یک"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elegant">
              <p className="text-sm text-muted-foreground mb-1">ارسال از</p>
              <p className="text-xl font-serif font-bold gradient-rosegold bg-clip-text text-transparent">
                ترکیه 🇹🇷
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
