import type { InputHTMLAttributes } from 'react'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  id: string
  label?: string
  error?: string
  helpText?: string
}

export default function Input({
  label,
  type = 'text',
  error,
  helpText,
  id,
  className,
  disabled,
  ...props
}: InputProps) {
  const describedBy = error
    ? `${id}-error`
    : helpText
      ? `${id}-help`
      : undefined

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        disabled={disabled}
        aria-describedby={describedBy}
        className={[
          'w-full rounded-lg border px-3 py-2 transition-colors focus:outline-none focus:ring-2',
          'text-gray-900 dark:text-gray-100',
          disabled ? 'cursor-not-allowed bg-gray-100' : 'bg-white dark:bg-gray-800',
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}

      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  )
}

