export default function About() {
  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Hakkımda
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/40">
            <p className="text-gray-700 dark:text-gray-300">
              Merhaba, ben Oğuzhan. Web teknolojileri üzerine çalışıyor; temiz kod
              yazmaya ve erişilebilir tasarım prensiplerine önem veriyorum.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Bu sayfa React + TypeScript ile component mimarisini ve kontrollü formları
              birlikte uygulamak için hazırlandı.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/40">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Çalıştığım alanlar
            </h3>
            <ul className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'API Fetch', 'State/Props'].map(
                (t) => (
                  <li
                    key={t}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

