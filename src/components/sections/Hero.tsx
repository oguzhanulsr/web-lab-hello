export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-2xl text-center">
        <p className="mb-2 font-medium text-blue-600 dark:text-blue-400">Merhaba, ben</p>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
          Ad Soyad
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Frontend Developer | React & TypeScript
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  )
}

