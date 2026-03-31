import type { Category, SortField, SortOrder } from '../../types/project'

interface ProjectFilterProps {
  search: string
  onSearchChange: (value: string) => void
  category: Category | 'all'
  onCategoryChange: (value: Category | 'all') => void
  sortField: SortField
  onSortFieldChange: (value: SortField) => void
  sortOrder: SortOrder
  onSortOrderChange: (value: SortOrder) => void
  resultCount: number
  totalCount: number
}

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend' },
]

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4 mb-8">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje ara (başlık, açıklama, teknoloji)..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-transparent focus:ring-2 focus:ring-blue-500"
          aria-label="Proje ara"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          &#128269;
        </span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori filtresi">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => onCategoryChange(cat.value)}
              className={[
                'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                category === cat.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
              ].join(' ')}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <select
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            aria-label="Sıralama alanı"
          >
            <option value="year">Yıl</option>
            <option value="title">Başlık</option>
          </select>

          <button
            type="button"
            onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            aria-label={`Sıralama yönü: ${sortOrder === 'asc' ? 'artan' : 'azalan'}`}
          >
            {sortOrder === 'asc' ? '\u2191 Artan' : '\u2193 Azalan'}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {resultCount} / {totalCount} proje gösteriliyor
      </p>
    </div>
  )
}

