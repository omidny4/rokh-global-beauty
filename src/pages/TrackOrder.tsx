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
      status: "Preparing",
      description: "Your order is being prepared",
      completed: true,
      date: "Jan 15, 2024",
      icon: Package,
    },
    {
      status: "Shipped from Turkey",
      description: "Package has left our warehouse in Turkey",
      completed: true,
      date: "Jan 17, 2024",
      icon: Truck,
    },
    {
      status: "In Customs",
      description: "Package is being processed at customs",
      completed: true,
      date: "Jan 20, 2024",
      icon: MapPin,
    },
    {
      status: "In Transit",
      description: "On the way to your location",
      completed: false,
      date: "Expected Jan 25, 2024",
      icon: Truck,
    },
    {
      status: "Delivered",
      description: "Package delivered to your address",
      completed: false,
      date: "Expected Jan 28, 2024",
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
          <h1 className="text-4xl font-serif font-bold mb-4 text-center">Track Your Order</h1>
          <p className="text-muted-foreground text-center mb-12">
            Enter your tracking number to see the current status of your order
          </p>

          {/* Tracking Input */}
          <div className="bg-card rounded-2xl p-8 shadow-soft mb-12">
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number (e.g., ROKH123456)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleTrack}
                className="gradient-rosegold hover:opacity-90 transition-smooth"
              >
                Track Order
              </Button>
            </div>
          </div>

          {/* Tracking Status (shown after entering tracking number) */}
          {showTracking && (
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-2">
                      Order #{trackingNumber || "ROKH123456"}
                    </h2>
                    <p className="text-muted-foreground">
                      Estimated delivery: Jan 28, 2024
                    </p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    In Transit
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
                          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
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
                <h3 className="text-xl font-serif font-bold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-6">
                  Our support team is here to assist you with any questions about your order
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/989366069847"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      WhatsApp: +98 936 606 9847
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/989961205805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      WhatsApp: +98 996 120 5805
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
