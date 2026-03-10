import type { ReactNode } from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled'

export type CardProps = {
  title?: string
  children: ReactNode
  image?: string
  imageAlt?: string
  footer?: ReactNode
  variant?: CardVariant
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
}: CardProps) {
  const variants: Record<CardVariant, string> = {
    elevated: 'bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800',
    outlined:
      'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700',
    filled: 'bg-gray-100 dark:bg-gray-800',
  }

  return (
    <div className={['overflow-hidden rounded-xl', variants[variant]].join(' ')}>
      {image && (
        <img
          src={image}
          alt={imageAlt || ''}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5">
        {title && (
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400">{children}</div>
      </div>

      {footer && (
        <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 dark:border-gray-700 dark:bg-gray-900">
          {footer}
        </div>
      )}
    </div>
  )
}

