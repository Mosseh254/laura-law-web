import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Laura E. Cowan</h3>
            <p className="text-lg mb-4">Attorney & CPA</p>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Providing trusted legal guidance for families and founders in New York City. 
              Thoughtful, compassionate, and results-driven legal solutions for estate 
              planning and business law.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Legal Clarity for Life and Business
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>laura@lauraecowanlaw.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p>123 Legal Avenue</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-primary-foreground/60">
                    Evening appointments available
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium mb-2">Quick Links</h5>
              <a href="#services" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Services
              </a>
              <a href="#testimonials" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Testimonials
              </a>
              <a href="#faqs" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                FAQs
              </a>
              <a href="#blog" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Laura E. Cowan Law. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Attorney Advertising
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;