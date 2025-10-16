interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer:
      "Você tem acesso vitalício ao curso! Pode assistir quantas vezes quiser, quando quiser.",
  },
  {
    question: "Preciso ter experiência em marketing digital?",
    answer:
      "Não! O curso é completo e ensina desde o básico até estratégias avançadas.",
  },
  {
    question: "Há garantia de satisfação?",
    answer:
      "Sim! Oferecemos 30 dias de garantia total. Se não ficar satisfeito, devolvemos seu dinheiro.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Você terá acesso à nossa comunidade exclusiva e suporte direto com nossos especialistas.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover-lift">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
