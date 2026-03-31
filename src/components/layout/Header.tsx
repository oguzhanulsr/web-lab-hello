import { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#about', label: 'Hakkımda' },
  { href: '#projects', label: 'Projeler' },
  { href: '#contact', label: 'İletişim' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#hero" className="text-xl font-bold text-blue-600">
          Portfolyo
        </a>

        <ul className="hidden flex-wrap gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden rounded-md p-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="block h-0.5 w-6 bg-gray-600" />
          <span className="block h-0.5 w-6 bg-gray-600" />
          <span className="block h-0.5 w-6 bg-gray-600" />
        </button>
      </nav>

      {menuOpen && (
        <ul className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 text-sm dark:border-gray-800 dark:bg-gray-900 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

