import { useMemo, useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import UIKit from './pages/UIKit'
import profileImage from '../a.png'
import project1Image from '../proje1.png'
import project2Image from '../proje2.jpeg'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.classList.toggle('dark')
        setIsDark(document.documentElement.classList.contains('dark'))
      }}
      className="fixed top-4 right-4 z-50 rounded-full bg-gray-200 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110 dark:bg-gray-700 dark:text-gray-200"
      aria-label="Tema değiştir"
    >
      <span className={isDark ? 'hidden' : ''} aria-hidden="true">
        ☾
      </span>
      <span className={isDark ? '' : 'hidden'} aria-hidden="true">
        ☀
      </span>
    </button>
  )
}

function SkillTag({ children }: { children: string }) {
  return (
    <li className="rounded-full bg-primary px-3 py-1 text-sm text-white">
      {children}
    </li>
  )
}

function App() {
  const [showUiKit, setShowUiKit] = useState(false)
  const [alertOpen, setAlertOpen] = useState(true)

  const projects = useMemo(
    () => [
      {
        title: 'Stok Takip Uygulaması',
        image: project1Image,
        imageAlt: 'Stok takip uygulamasının ekran görüntüsü',
        desc: 'Kullanıcıların stoklarının takibini kontrol ettiği otomasyon.',
        tags: ['C#', 'DevExpress'],
      },
      {
        title: 'Yapay Zeka Destekli Araç Karşılaştırma',
        image: project2Image,
        imageAlt: 'Yapay zeka araç karşılaştırma arayüz ekran görüntüsü',
        desc: 'Veri tabanı yönetim sistemleri ile geliştirilmiş yapay zeka destekli araç karşılaştırma uygulaması.',
        tags: ['HTML', 'CSS'],
      },
    ],
    [],
  )

  if (showUiKit) {
    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <ThemeToggle />
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
            <h1 className="text-xl font-bold text-primary dark:text-blue-300">
              Oğuzhan Ulaşer
            </h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => setShowUiKit(false)}>
                Portföye Dön
              </Button>
            </div>
          </div>
        </header>
        <UIKit />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <ThemeToggle />

      <a
        href="#main-content"
        className="sr-only z-50 bg-primary p-2 text-white focus:not-sr-only focus:absolute focus:top-0 focus:left-0"
      >
        Ana içeriğe atla
      </a>

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
          <h1 className="text-xl font-bold text-primary dark:text-blue-300">
            Oğuzhan Ulaşer
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
                >
                  İletişim
                </a>
              </li>
              <li>
                <Button variant="secondary" size="sm" onClick={() => setShowUiKit(true)}>
                  UI Kit
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {alertOpen && (
          <div className="mx-auto max-w-6xl px-4 pt-6">
            <Alert
              variant="info"
              title="LAB-4"
              dismissible
              onDismiss={() => setAlertOpen(false)}
            >
              Bu sayfa Tailwind CSS ile stillendi. Sağ üstten dark mode aç/kapat.
            </Alert>
          </div>
        )}

        <section id="hakkimda" className="px-4 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start">
            <figure className="shrink-0">
              <img
                src={profileImage}
                alt="Oğuzhan Ulaşer'in vesikalık fotoğrafı"
                className="h-40 w-40 rounded-full object-cover shadow-lg"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
                Yazılım Mühendisliği Öğrencisi
              </figcaption>
            </figure>
            <div>
              <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-left">
                Hakkımda
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                Merhaba, ben Oğuzhan. Web teknolojileri ve nesne yönelimli programlama
                üzerine çalışıyorum. Temiz kod yazmaya ve erişilebilir tasarım
                prensiplerine önem veriyorum.
              </p>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Kullandığım Teknolojiler
              </h3>
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                <SkillTag>HTML5</SkillTag>
                <SkillTag>CSS3</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>Java</SkillTag>
                <SkillTag>C#</SkillTag>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Card
                  key={p.title}
                  variant="elevated"
                  title={p.title}
                  image={p.image}
                  imageAlt={p.imageAlt}
                  footer={
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-primary px-3 py-1 text-xs text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  }
                >
                  <p className="text-sm">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="px-4 py-16">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              İletişim
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                // LAB-4 kapsamı: görsel form + erişilebilir alanlar
              }}
            >
              <Input id="name" label="Ad Soyad" required placeholder="Oğuzhan Ulaşer" />
              <Input
                id="email"
                label="E-posta"
                type="email"
                required
                helpText="Örnek: ad@mail.com"
                placeholder="ad@mail.com"
              />

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>

              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-100 px-4 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        <p>&copy; 2026 Oğuzhan Ulaşer. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
