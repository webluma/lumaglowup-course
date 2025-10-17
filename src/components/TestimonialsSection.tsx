interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Empreendedora",
    image: "👩‍💼",
    content:
      "O GlowUp Course transformou completamente meu negócio. Em 3 meses aumentei minhas vendas em 400%!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Marketing Manager",
    image: "👨‍💻",
    content:
      "As estratégias são incríveis! Consegui uma promoção e hoje ganho 3x mais do que antes.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Freelancer",
    image: "👩‍🎨",
    content:
      "Finalmente entendi como funciona o marketing digital. Meus clientes estão muito mais satisfeitos!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">alunos</span> dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover-lift fade-in-up"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
