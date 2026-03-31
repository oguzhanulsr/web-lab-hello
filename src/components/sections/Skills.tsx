export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Yetenekler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Component Mimari',
              text: 'Tek sorumluluk ve yeniden kullanılabilir parçalar.',
            },
            { title: 'State/Props', text: 'Veri akışı ve kontrolü state ile.' },
            { title: 'Controlled Form', text: 'Validation + gönderim akışı.' },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/40"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

