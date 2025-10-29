import type { Miembro } from '@/types/miembro'
import { Link } from 'react-router-dom'

export default function MemberTable({ rows, onDelete }: { rows: Miembro[]; onDelete: (id: number) => void }) {
  return (
    <div className="overflow-x-auto bg-white border rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">Nombre</th>
            <th className="text-left p-3">Rango</th>
            <th className="text-left p-3">Estatus</th>
            <th className="text-left p-3">Ciudad</th>
            <th className="text-left p-3">Moto</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(m => (
            <tr key={m.id} className="border-t">
              <td className="p-3">{m.nombre} {m.apellido}</td>
              <td className="p-3">{m.rango || '—'}</td>
              <td className="p-3">{m.estatus || '—'}</td>
              <td className="p-3">{m.ciudad || '—'}</td>
              <td className="p-3">{m.moto || '—'}</td>
              <td className="p-3 flex gap-2 justify-center">
                <Link className="px-2 py-1 bg-blue-600 text-white rounded" to={`/miembros/${m.id}`}>Editar</Link>
                {!!m.id && <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => onDelete(m.id!)}>Borrar</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}