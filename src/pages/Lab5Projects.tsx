import { useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'
import { fetchProjects } from '../services/projectService'
import type { Category, Project, SortField, SortOrder } from '../types/project'
import { applyFilters } from '../utils/projectHelpers'

export default function Lab5Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata')
      } finally {
        setLoading(false)
      }
    }

    void load()
  }, [])

  const filtered = applyFilters(projects, search, category, sortField, sortOrder)
  const categories: (Category | 'all')[] = ['all', 'frontend', 'fullstack', 'backend']

  return (
    <main className="min-h-screen bg-gray-50 p-4 dark:bg-gray-950 md:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Projelerim</h1>

        {error && (
          <Alert variant="error" title="Hata">
            {error}
          </Alert>
        )}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Input
            id="search"
            placeholder="Proje ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat === 'all' ? 'Tumu' : cat}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
              className="rounded-lg border px-3 py-2 dark:bg-gray-800 dark:text-white"
            >
              <option value="year">Yil</option>
              <option value="title">Baslik</option>
            </select>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'))}
            >
              {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
            </Button>
          </div>
        </div>

        {loading && <p className="text-center text-gray-500">Yukleniyor...</p>}

        {!loading && filtered.length === 0 && (
          <p className="text-center text-gray-500">Eslesen proje bulunamadi.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card
              key={project.id}
              variant="elevated"
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} ekran goruntusu`}
            >
              <p className="mb-3 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-2 text-xs text-gray-400">
                {project.year} - {project.category}
              </p>
            </Card>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          {filtered.length} / {projects.length} proje gosteriliyor
        </p>
      </div>
    </main>
  )
}
