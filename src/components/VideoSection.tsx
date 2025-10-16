export default function VideoSection() {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja como funciona o{" "}
            <span className="gradient-text">GlowUp Course</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Assista ao vídeo e entenda como você pode transformar sua carreira
            em apenas 30 dias
          </p>
          <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 hover-lift">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold">Vídeo de Demonstração</p>
                <p className="text-sm opacity-90">Clique para reproduzir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
