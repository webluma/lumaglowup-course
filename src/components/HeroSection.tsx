export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            <span className="gradient-text">Aprenda Marketing Digital</span>
            <br />
            <span className="text-gray-800">e Transforme sua Carreira</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 fade-in-up">
            Domine as estratégias que os profissionais mais bem-sucedidos usam
            para
            <span className="font-semibold text-purple-600">
              {" "}
              aumentar vendas
            </span>{" "}
            e
            <span className="font-semibold text-blue-600">
              {" "}
              construir presença digital
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
            <a href="#inscricao" className="glow-button text-lg px-8 py-4">
              🚀 Quero me inscrever agora!
            </a>
            <a
              href="#video"
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              ▶️ Ver demonstração
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-purple-600">10.000+</div>
              <div className="text-gray-600">Alunos transformados</div>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">Taxa de satisfação</div>
            </div>
            <div className="fade-in-up">
              <div className="text-3xl font-bold text-pink-600">R$ 5.000+</div>
              <div className="text-gray-600">Ganho médio mensal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
