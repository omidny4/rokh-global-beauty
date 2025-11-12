import { ShoppingCart, Menu, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const navLinks = [
    { name: "Makeup", href: "/products?category=makeup" },
    { name: "Skincare", href: "/products?category=skincare" },
    { name: "Haircare", href: "/products?category=haircare" },
    { name: "Fragrances", href: "/products?category=fragrances" },
    { name: "Special Offers", href: "/products?discount=true" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-serif font-bold gradient-rosegold bg-clip-text text-transparent">
              ROKH
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* WhatsApp Support Banner */}
      <div className="bg-secondary/30 border-b border-border py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm text-foreground">
          <Phone className="h-4 w-4" />
          <span>Need help? WhatsApp us:</span>
          <a
            href="https://wa.me/989366069847"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            +98 936 606 9847
          </a>
          <span>or</span>
          <a
            href="https://wa.me/989961205805"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            +98 996 120 5805
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
