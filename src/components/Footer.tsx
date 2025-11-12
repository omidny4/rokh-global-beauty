import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold gradient-rosegold bg-clip-text text-transparent mb-4">
              رُخ
            </h3>
            <p className="text-sm text-muted-foreground">
              محصولات زیبایی اصل بین‌المللی از اروپا، کره و آمریکا که با عشق و دقت مستقیماً از ترکیه ارسال می‌شوند.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">فروشگاه</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=makeup" className="text-muted-foreground hover:text-primary transition-smooth">
                  آرایش
                </Link>
              </li>
              <li>
                <Link to="/products?category=skincare" className="text-muted-foreground hover:text-primary transition-smooth">
                  مراقبت از پوست
                </Link>
              </li>
              <li>
                <Link to="/products?category=haircare" className="text-muted-foreground hover:text-primary transition-smooth">
                  مراقبت از مو
                </Link>
              </li>
              <li>
                <Link to="/products?discount=true" className="text-muted-foreground hover:text-primary transition-smooth">
                  تخفیف‌های ویژه
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/track-order" className="text-muted-foreground hover:text-primary transition-smooth">
                  پیگیری سفارش
                </Link>
              </li>
              <li>
                <a href="https://wa.me/989366069847" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                  تماس با ما
                </a>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-smooth">
                  اطلاعات ارسال
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-smooth">
                  بازگشت کالا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">ارتباط با ما</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                ارسال از ترکیه<br />
                زمان تحویل: ۱ تا ۲ هفته
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="mailto:info@rokh.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© ۱۴۰۳ رُخ. تمامی حقوق محفوظ است. زیبایی اصیل، با دقت تحویل داده می‌شود.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
