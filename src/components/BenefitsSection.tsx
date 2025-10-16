interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "🎯",
    title: "Estratégias Comprovadas",
    description:
      "Métodos testados e aprovados por mais de 10.000 profissionais",
  },
  {
    icon: "📱",
    title: "Redes Sociais",
    description: "Domine Instagram, Facebook, LinkedIn e todas as plataformas",
  },
  {
    icon: "💰",
    title: "Aumento de Vendas",
    description: "Técnicas para multiplicar suas vendas em até 300%",
  },
  {
    icon: "📊",
    title: "Analytics & Métricas",
    description: "Aprenda a medir e otimizar seus resultados",
  },
  {
    icon: "🎨",
    title: "Criação de Conteúdo",
    description: "Produza conteúdo que engaja e converte",
  },
  {
    icon: "🚀",
    title: "Suporte Vitalício",
    description: "Acesso à comunidade e suporte para sempre",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o{" "}
            <span className="gradient-text">GlowUp Course</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um curso completo que vai te ensinar tudo que você precisa saber
            sobre marketing digital
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover-lift fade-in-up"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
