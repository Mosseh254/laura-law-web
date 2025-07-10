import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>500+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>NYC-Based</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-hero font-serif text-primary mb-6">
            Trusted Legal Guidance for{" "}
            <span className="text-accent">Families</span> and{" "}
            <span className="text-accent">Founders</span>
          </h1>

          {/* Subheading */}
          <p className="text-subheading max-w-4xl mx-auto mb-8">
            Whether you're protecting what you've built or building what's next, 
            I help you navigate estate planning and business law with confidence, 
            compassion, and clarity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cta" size="lg" className="gap-2 text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              Book a Call
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn About Services
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-lg font-medium text-primary">
            Legal Clarity for Life and Business
          </p>
        </div>

        {/* Optional video space placeholder */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-lg p-8 text-center border border-border">
              <h3 className="text-2xl font-semibold mb-4">Welcome Video</h3>
              <p className="text-muted-foreground">
                Optional space for a personal welcome video from Laura
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;