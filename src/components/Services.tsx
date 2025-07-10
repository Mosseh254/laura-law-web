import { Button } from "@/components/ui/button";
import { Shield, Building, FileText, Users, Heart, Calculator } from "lucide-react";

const Services = () => {
  const estateServices = [
    "Wills & Trusts",
    "Estate Planning",
    "Probate Administration",
    "Asset Protection",
    "Tax Planning",
    "Healthcare Directives"
  ];

  const businessServices = [
    "Business Formation",
    "Contract Drafting",
    "Employment Law",
    "Tax Strategy",
    "Compliance",
    "Business Succession"
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-primary mb-6">Services</h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Comprehensive legal and tax services tailored to protect your family 
            and grow your business with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Estate Planning */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Estate Planning</h3>
                <p className="text-muted-foreground">Protect what matters most</p>
              </div>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">
              Secure your family's future with comprehensive estate planning that 
              reflects your values and protects your legacy for generations to come.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {estateServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              Learn More About Estate Planning
            </Button>
          </div>

          {/* Business Law */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Business Law</h3>
                <p className="text-muted-foreground">Build with confidence</p>
              </div>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">
              From startup to success, navigate the legal landscape with expert 
              guidance that helps your business thrive while staying compliant.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {businessServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              Learn More About Business Law
            </Button>
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-semibold">The Dual Advantage</h3>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            As both an attorney and CPA, I provide integrated legal and tax strategies 
            that save you time, money, and complexity. Get comprehensive solutions 
            from one trusted advisor who understands both sides of your challenges.
          </p>
          <Button variant="cta" size="lg">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;