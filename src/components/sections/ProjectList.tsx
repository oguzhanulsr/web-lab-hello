import { useEffect, useMemo, useState } from 'react'
import Card from '../Card'
import { fetchProjects } from '../../services/projectService'
import type { Category, Project, SortField, SortOrder } from '../../types/project'
import { applyFilters } from '../../utils/projectHelpers'
import ProjectFilter from '../forms/ProjectFilter'

export default function ProjectList() {
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
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata oluştu')
      } finally {
        setLoading(false)
      }
    }

    void load()
  }, [])

  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder],
  )

  return (
    <section id="projects" className="px-4 py-16 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Projelerim
        </h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          JSON’dan veri çekip, arama + kategori + sıralama yapıyorum.
        </p>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900/30 dark:bg-red-950/20">
            <p>{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-2 text-sm underline"
            >
              Tekrar dene
            </button>
          </div>
        )}

        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-600 border-b-transparent" />
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-300 py-12">
            Eslesen proje bulunamadi.
          </p>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <Card
                key={project.id}
                variant="elevated"
                title={project.title}
                image={project.image}
                imageAlt={`${project.title} ekran görüntüsü`}
              >
                <div className="space-y-3">
                  <p className="text-sm">{project.description}</p>

                  {project.featured && (
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200">
                      One Cikan
                    </span>
                  )}

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

                  <p className="text-xs text-gray-500">
                    {project.year} · {project.category}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

