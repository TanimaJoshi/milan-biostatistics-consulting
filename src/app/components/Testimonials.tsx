import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Dr. Mangeshkar's expertise in clinical trial design and statistical analysis was instrumental in getting our study approved by the FDA. His attention to detail and clear communication made the process smooth and efficient.",
    author: "Dr. Sarah Chen",
    title: "Research Director",
    organization: "PharmaTech Research"
  },
  {
    quote: "Working with Dr. Mangeshkar has been exceptional. His deep understanding of biostatistics and ability to explain complex concepts in simple terms helped us make informed decisions throughout our research project.",
    author: "Dr. Michael Rodriguez",
    title: "Principal Investigator",
    organization: "Clinical Research Institute"
  },
  {
    quote: "The statistical analysis provided by Dr. Mangeshkar was crucial for our publication in a high-impact journal. His expertise in handling complex datasets and interpreting results added significant value to our research.",
    author: "Dr. Emily Thompson",
    title: "Lead Researcher",
    organization: "Medical Research Center"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="absolute -top-4 left-6 bg-blue-600 rounded-full p-2">
                  <FaQuoteLeft className="w-6 h-6 text-white" />
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-blue-600">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 