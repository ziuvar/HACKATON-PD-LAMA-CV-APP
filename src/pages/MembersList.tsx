import { useEffect, useMemo, useState } from 'react'
import { demoSeedIfNeeded, listMembers, deleteMember } from '@/services/members'
import type { Miembro } from '@/types/miembro'
import SearchBar from '@/components/SearchBar'
import MemberTable from '@/components/MemberTable'
import ImportExport from '@/components/ImportExport'
import { Link } from 'react-router-dom'

export default function MembersList() {
  const [rows, setRows] = useState<Miembro[]>([])
  const [filters, setFilters] = useState<any>({})
  const [loading, setLoading] = useState(true)

  async function load() {
    try {
      setLoading(true)
      const data = await listMembers(filters).catch(async () => {
        await demoSeedIfNeeded()
        const local = JSON.parse(localStorage.getItem('lama-members') || '[]')
        return local
      })
      setRows(data)
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [JSON.stringify(filters)])

  const filtered = useMemo(() => {
    if (!Array.isArray(rows)) return []
    const q = (filters.q || '').toLowerCase()
    return rows.filter(m =>
      (!filters.rango || m.rango === filters.rango) &&
      (!filters.estatus || m.estatus === filters.estatus) &&
      (!filters.ciudad || (m.ciudad||'').toLowerCase().includes(filters.ciudad.toLowerCase())) &&
      (!q || `${m.nombre} ${m.apellido} ${m.correoElectronico||''} ${m.placaMatricula||''}`.toLowerCase().includes(q))
    )
  }, [rows, filters])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Miembros</h1>
        <div className="flex gap-2">
          <Link to="/miembros/nuevo" className="px-3 py-2 rounded bg-blue-600 text-white">Nuevo</Link>
          <ImportExport rows={filtered} onImported={(rows) => {
            const current = JSON.parse(localStorage.getItem('lama-members')||'[]')
            const merged = [...current, ...rows.map((r, i) => ({...r, id: (current.length + i + 1)}))]
            localStorage.setItem('lama-members', JSON.stringify(merged))
            setRows(merged)
          }} />
        </div>
      </div>

      <SearchBar onChange={setFilters} />

      {loading ? <p>Cargando…</p> : <MemberTable rows={filtered} onDelete={async (id) => {
        try {
          await deleteMember(id)
        } catch {
          const current = JSON.parse(localStorage.getItem('lama-members')||'[]')
          localStorage.setItem('lama-members', JSON.stringify(current.filter((x: Miembro) => x.id !== id)))
        }
        load()
      }} />}
    </div>
  )
}