export default function CTASection() {
  return (
    <section
      id="inscricao"
      className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Pronto para <span className="text-yellow-300">transformar</span> sua
          carreira?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Junte-se a mais de 10.000 profissionais que já mudaram suas vidas
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
          <div className="text-3xl font-bold mb-4">
            Oferta por tempo limitado!
          </div>
          <div className="text-6xl font-bold mb-2 text-yellow-300">R$ 497</div>
          <div className="text-xl opacity-75 line-through mb-4">
            De R$ 1.997
          </div>
          <div className="text-lg">Apenas hoje: 75% de desconto!</div>
        </div>
        <a
          href="#"
          className="glow-button text-xl px-12 py-6 bg-white text-purple-600 hover:bg-gray-100"
        >
          🚀 Quero me inscrever agora!
        </a>
        <p className="mt-4 text-sm opacity-75">
          ✅ Garantia de 30 dias • ✅ Acesso vitalício • ✅ Suporte completo
        </p>
      </div>
    </section>
  );
}
