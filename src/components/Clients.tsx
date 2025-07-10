import { Users, Heart, Briefcase, Home } from "lucide-react";

const Clients = () => {
  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-primary mb-6">Who I Work With</h2>
          <p className="text-subheading max-w-3xl mx-auto">
            I specialize in serving NYC-based professionals, families, and entrepreneurs 
            who value thoughtful, personalized legal guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* NYC Families */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-elegant hover-lift border border-border">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">NYC Families</h3>
            <p className="text-muted-foreground leading-relaxed">
              Busy professionals and growing families who need comprehensive estate 
              planning to protect their loved ones and secure their financial future 
              in the complexity of New York law.
            </p>
          </div>

          {/* Women & Couples */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-elegant hover-lift border border-border">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Women & Couples</h3>
            <p className="text-muted-foreground leading-relaxed">
              Individuals and couples prioritizing peace of mind, seeking 
              compassionate guidance through life transitions, wealth building, 
              and family protection strategies.
            </p>
          </div>

          {/* Entrepreneurs & Creatives */}
          <div className="bg-card rounded-2xl p-8 text-center shadow-elegant hover-lift border border-border">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Entrepreneurs & Creatives</h3>
            <p className="text-muted-foreground leading-relaxed">
              Small business owners, startups, and creative professionals who need 
              integrated legal and tax strategies to launch, grow, and protect 
              their ventures while minimizing risk.
            </p>
          </div>
        </div>

        {/* Ideal Client Profile */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold text-center mb-8">You're in the Right Place If...</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p>You value personalized attention over cookie-cutter solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p>You want an advisor who speaks plainly, not in legal jargon</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p>You're looking for integrated legal and tax guidance</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p>You want to work with someone who understands your goals</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p>You prefer building long-term relationships over one-time transactions</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p>You're ready to invest in proper legal protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;