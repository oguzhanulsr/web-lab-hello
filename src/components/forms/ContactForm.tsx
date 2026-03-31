import { useState, type FormEvent } from 'react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {}

  const trimmedName = data.name.trim()
  if (!trimmedName) {
    newErrors.name = 'Ad soyad zorunludur.'
  } else if (trimmedName.length < 2) {
    newErrors.name = 'Ad soyad en az 2 karakter olmalıdır.'
  }

  const trimmedEmail = data.email.trim()
  if (!trimmedEmail) {
    newErrors.email = 'E-posta zorunludur.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    newErrors.email = 'Geçerli bir e-posta adresi giriniz.'
  }

  if (!data.subject.trim()) {
    newErrors.subject = 'Konu zorunludur.'
  }

  const trimmedMessage = data.message.trim()
  if (!trimmedMessage) {
    newErrors.message = 'Mesaj zorunludur.'
  } else if (trimmedMessage.length < 10) {
    newErrors.message = 'Mesaj en az 10 karakter olmalıdır.'
  }

  return newErrors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      // Simüle edilmiş gönderim (checkpoint için mock)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // eslint-disable-next-line no-console
      console.log('Form verisi:', formData)

      setSubmitSuccess(true)
      setFormData(initialFormData)
      setErrors({})
    } catch {
      alert('Gönderim başarısız. Tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-900/40 dark:bg-green-950/20">
        <p className="text-green-800 font-medium dark:text-green-200">
          Mesajınız başarıyla gönderildi!
        </p>
        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-700 underline dark:text-green-200"
        >
          Yeni mesaj gönder
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-800">
          Ad Soyad
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={[
            'mt-1 w-full rounded-lg border px-3 py-2 outline-none transition-colors',
            errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-blue-500',
            'bg-white dark:bg-gray-900 dark:text-white',
          ].join(' ')}
          placeholder="Adınız Soyadınız"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-800">
          E-posta
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={[
            'mt-1 w-full rounded-lg border px-3 py-2 outline-none transition-colors',
            errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-blue-500',
            'bg-white dark:bg-gray-900 dark:text-white',
          ].join(' ')}
          placeholder="ornek@mail.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-800">
          Konu
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={[
            'mt-1 w-full rounded-lg border px-3 py-2 outline-none transition-colors',
            errors.subject ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-blue-500',
            'bg-white dark:bg-gray-900 dark:text-white',
          ].join(' ')}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş birliği</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-800">
          Mesaj
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={[
            'mt-1 w-full resize-y rounded-lg border px-3 py-2 outline-none transition-colors',
            errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-blue-500',
            'bg-white dark:bg-gray-900 dark:text-white',
          ].join(' ')}
          placeholder="Mesajınızı yazınız..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={[
          'w-full rounded-lg py-2 font-medium transition-colors',
          'bg-blue-600 text-white hover:bg-blue-700',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ].join(' ')}
      >
        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
      </button>
    </form>
  )
}

