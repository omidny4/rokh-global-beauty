import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  const trackingSteps = [
    {
      status: "آماده‌سازی",
      description: "سفارش شما در حال آماده‌سازی است",
      completed: true,
      date: "۲۵ دی ۱۴۰۳",
      icon: Package,
    },
    {
      status: "ارسال از ترکیه",
      description: "بسته از انبار ما در ترکیه خارج شده",
      completed: true,
      date: "۲۷ دی ۱۴۰۳",
      icon: Truck,
    },
    {
      status: "در گمرک",
      description: "بسته در حال بررسی در گمرک است",
      completed: true,
      date: "۳۰ دی ۱۴۰۳",
      icon: MapPin,
    },
    {
      status: "در حال انتقال",
      description: "در مسیر به مقصد شما",
      completed: false,
      date: "تاریخ پیش‌بینی: ۵ بهمن",
      icon: Truck,
    },
    {
      status: "تحویل داده شد",
      description: "بسته به آدرس شما تحویل داده شد",
      completed: false,
      date: "تاریخ پیش‌بینی: ۸ بهمن",
      icon: CheckCircle2,
    },
  ];

  const handleTrack = () => {
    if (trackingNumber) {
      setShowTracking(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-4 text-center">پیگیری سفارش</h1>
          <p className="text-muted-foreground text-center mb-12">
            کد پیگیری خود را وارد کنید تا وضعیت فعلی سفارش را مشاهده کنید
          </p>

          {/* Tracking Input */}
          <div className="bg-card rounded-2xl p-8 shadow-soft mb-12">
            <div className="flex gap-4">
              <Input
                placeholder="کد پیگیری را وارد کنید (مثال: ROKH123456)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleTrack}
                className="gradient-rosegold hover:opacity-90 transition-smooth"
              >
                پیگیری سفارش
              </Button>
            </div>
          </div>

          {/* Tracking Status */}
          {showTracking && (
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-2">
                      سفارش #{trackingNumber || "ROKH123456"}
                    </h2>
                    <p className="text-muted-foreground">
                      تحویل تقریبی: ۸ بهمن ۱۴۰۳
                    </p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    در حال انتقال
                  </Badge>
                </div>

                {/* Timeline */}
                <div className="space-y-8">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="relative flex gap-4">
                        {/* Line */}
                        {index < trackingSteps.length - 1 && (
                          <div className="absolute right-5 top-12 bottom-0 w-0.5 bg-border" />
                        )}

                        {/* Icon */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            step.completed
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-8">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold mb-1">{step.status}</h3>
                              <p className="text-sm text-muted-foreground">
                                {step.description}
                              </p>
                            </div>
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {step.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-serif font-bold mb-4">نیاز به کمک دارید؟</h3>
                <p className="text-muted-foreground mb-6">
                  تیم پشتیبانی ما برای پاسخگویی به سوالات شما در مورد سفارش آماده است
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/989366069847"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      واتساپ: ۰۹۳۶ ۶۰۶ ۹۸۴۷
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/989961205805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      واتساپ: ۰۹۹۶ ۱۲۰ ۵۸۰۵
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackOrder;
