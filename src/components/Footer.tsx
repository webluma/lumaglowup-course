export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 gradient-text">
            GlowUp Course
          </div>
          <p className="text-gray-400 mb-6">
            Transformando carreiras através do marketing digital
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 GlowUp Course. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
