import ContactForm from '../forms/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">
          İletişim
        </h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Controlled form + doğrulama (validation) örneği.
        </p>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

