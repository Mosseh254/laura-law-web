import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes your practice different from other law firms?",
      answer: "As both an attorney and CPA, I provide integrated legal and tax strategies under one roof. This dual expertise means you get comprehensive solutions that save time, reduce costs, and minimize complexity. Plus, I focus on building long-term relationships with personalized attention rather than treating you like a case number."
    },
    {
      question: "Do I really need estate planning if I'm young or don't have much money?",
      answer: "Absolutely! Estate planning isn't just about money—it's about protecting your loved ones and ensuring your wishes are honored. Even young adults need healthcare directives, basic wills, and guardianship designations. The cost of planning ahead is always less than the cost of not planning at all."
    },
    {
      question: "How do you help small businesses and entrepreneurs?",
      answer: "I help entrepreneurs at every stage—from choosing the right business structure and drafting founder agreements to ongoing compliance, contract review, and tax strategy. My CPA background means I can also help with financial planning, tax optimization, and business succession planning as you grow."
    },
    {
      question: "What should I expect during our first consultation?",
      answer: "Our initial consultation is focused on understanding your unique situation and goals. I'll explain how the law applies to your circumstances in plain English, outline your options, and provide a clear roadmap forward. You'll leave with actionable insights, whether or not you decide to work with me."
    },
    {
      question: "How do you charge for your services?",
      answer: "I believe in transparent, fair pricing. For estate planning, I typically use flat fees so you know exactly what to expect. For business matters, I may use flat fees, hourly rates, or retainer arrangements depending on the scope. I'll always discuss fees upfront and provide written estimates."
    },
    {
      question: "Can you help if I live outside of New York?",
      answer: "I'm licensed to practice law in New York State, so I can only provide legal services for New York matters. However, I'm happy to refer you to qualified colleagues in other states. For business clients with multi-state operations, I can coordinate with local counsel as needed."
    },
    {
      question: "How quickly can you help with urgent legal matters?",
      answer: "I understand that legal issues don't always wait for convenient timing. For urgent matters, I offer expedited services and can often accommodate same-day or next-day consultations. I'll work with you to address time-sensitive issues while ensuring quality isn't compromised."
    },
    {
      question: "Do you work with other professionals like financial advisors?",
      answer: "Yes! I regularly collaborate with financial advisors, accountants, insurance professionals, and other specialists to ensure you receive comprehensive guidance. I believe in building strong professional networks that serve my clients' best interests."
    }
  ];

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-primary mb-6">Frequently Asked Questions</h2>
          <p className="text-subheading">
            Get clear, friendly answers to common questions about legal services, 
            processes, and what to expect when working together.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-accent flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? I'm here to help.
          </p>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-md font-semibold transition-colors shadow-lg hover:shadow-xl">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;