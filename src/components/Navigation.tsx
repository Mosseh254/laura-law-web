import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Laura", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Who I Work With", href: "#clients" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Success Stories", href: "#success" },
    { name: "FAQs", href: "#faqs" },
    { name: "Blog + Events", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="font-serif text-2xl font-bold text-primary">
              Laura E. Cowan
            </h2>
            <p className="text-xs text-muted-foreground">Attorney & CPA</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors duration-200 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button variant="cta" size="sm" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;