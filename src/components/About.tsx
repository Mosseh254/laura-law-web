import { GraduationCap, Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-primary mb-6">About Laura</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                As both an attorney and CPA, I bring a unique dual perspective to 
                legal challenges. My practice focuses on helping NYC families secure 
                their legacies and entrepreneurs build sustainable businesses.
              </p>
              <p className="text-lg leading-relaxed">
                With over 500 satisfied clients and a consistent 5-star rating, 
                I'm committed to providing thoughtful, compassionate, and 
                results-driven legal guidance that empowers rather than intimidates.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in making complex legal matters clear and accessible, 
                ensuring every client feels confident in their decisions and 
                protected in their future.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">Licensed Attorney</p>
                  <p className="text-sm text-muted-foreground">New York State</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">Certified CPA</p>
                  <p className="text-sm text-muted-foreground">Tax & Financial</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">5-Star Rated</p>
                  <p className="text-sm text-muted-foreground">Client Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold">500+ Clients</p>
                  <p className="text-sm text-muted-foreground">Served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Photo Placeholder */}
          <div className="lg:order-first">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 text-center min-h-[500px] flex items-center justify-center">
              <div>
                <div className="w-32 h-32 bg-accent/30 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-2">Laura E. Cowan</h3>
                <p className="text-muted-foreground">Attorney & CPA</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Professional headshot placeholder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-12">My Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Compassionate</h4>
              <p className="text-muted-foreground">
                Legal matters are personal. I listen with empathy and provide 
                guidance that honors your values and circumstances.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Clear</h4>
              <p className="text-muted-foreground">
                I translate complex legal concepts into plain English, ensuring 
                you understand every step of the process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Results-Driven</h4>
              <p className="text-muted-foreground">
                Your goals become my goals. I work diligently to achieve 
                outcomes that protect and advance your interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;