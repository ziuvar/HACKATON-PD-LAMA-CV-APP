import { useEffect, useState } from 'react'
import type { Miembro } from '@/types/miembro'

export default function Dashboard() {
  const [rows, setRows] = useState<Miembro[]>([])
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('lama-members')||'[]') as Miembro[]
    setRows(local)
  }, [])

  const total = rows.length
  const activos = rows.filter(r => r.estatus === 'Activo').length
  const porRango = Object.entries(rows.reduce((acc: Record<string, number>, r) => {
    acc[r.rango||'—'] = (acc[r.rango||'—']||0) + 1
    return acc
  }, {}))

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded p-4"><div className="text-sm text-gray-500">Miembros totales</div><div className="text-3xl font-bold">{total}</div></div>
        <div className="bg-white border rounded p-4"><div className="text-sm text-gray-500">Activos</div><div className="text-3xl font-bold">{activos}</div></div>
        <div className="bg-white border rounded p-4"><div className="text-sm text-gray-500">Inactivos</div><div className="text-3xl font-bold">{rows.filter(r=>r.estatus==='Inactivo').length}</div></div>
      </div>
      <div className="bg-white border rounded p-4">
        <h2 className="font-semibold mb-2">Distribución por rango</h2>
        <ul className="list-disc ml-6">
          {porRango.map(([r, n]) => (<li key={r}>{r}: {n as number}</li>))}
        </ul>
      </div>
    </div>
  )
}