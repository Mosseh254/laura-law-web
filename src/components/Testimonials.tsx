import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Small Business Owner",
      rating: 5,
      text: "Laura's dual expertise as both an attorney and CPA saved us countless hours and thousands of dollars. She helped us structure our business properly from the start and continues to provide invaluable guidance as we grow."
    },
    {
      name: "Michael & Jennifer Torres",
      title: "NYC Family",
      rating: 5,
      text: "Working with Laura on our estate plan gave us such peace of mind. She explained everything in terms we could understand and made sure our plan truly reflected our values and goals for our children's future."
    },
    {
      name: "Dr. Amanda Chen",
      title: "Healthcare Professional",
      rating: 5,
      text: "I was overwhelmed by the legal requirements for my practice, but Laura made everything clear and manageable. Her compassionate approach and attention to detail are exactly what busy professionals need."
    },
    {
      name: "David Rodriguez",
      title: "Tech Entrepreneur",
      rating: 5,
      text: "From startup formation to ongoing compliance, Laura has been an incredible partner in building our company. Her integrated legal and tax strategies have been game-changing for our growth."
    },
    {
      name: "Lisa & Robert Kim",
      title: "Expecting Parents",
      rating: 5,
      text: "Laura helped us prepare for our first child with a comprehensive estate plan. Her gentle guidance during such an emotional time was exactly what we needed. We felt completely supported throughout the process."
    },
    {
      name: "Maria Gonzalez",
      title: "Creative Professional",
      rating: 5,
      text: "As a freelance designer, I needed someone who understood both the creative and business sides of my work. Laura's expertise in small business law has been invaluable in protecting and growing my practice."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-primary mb-6">Client Testimonials</h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Hear from the families and business owners who have trusted me with 
            their most important legal matters.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-2xl font-semibold">5.0 out of 5 stars</p>
          <p className="text-muted-foreground">Based on 500+ client reviews</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-elegant hover-lift border border-border relative"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our community of satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-md font-semibold transition-colors shadow-lg hover:shadow-xl">
              Schedule Your Consultation
            </button>
            <button className="border border-border bg-background hover:bg-secondary px-8 py-3 rounded-md font-medium transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;