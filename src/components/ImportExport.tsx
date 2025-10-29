import { exportCSV, importCSV } from '@/utils/csv'
import type { Miembro } from '@/types/miembro'

export default function ImportExport({ rows, onImported }: { rows: Miembro[]; onImported: (rows: Miembro[]) => void }) {
  return (
    <div className="flex gap-3">
      <button className="px-3 py-2 rounded bg-gray-100 border" onClick={() => exportCSV(rows)}>Exportar CSV</button>
      <label className="px-3 py-2 rounded bg-gray-100 border cursor-pointer">
        Importar CSV
        <input type="file" className="hidden" accept=".csv" onChange={async (e) => {
          const f = e.target.files?.[0]
          if (f) {
            const data = await importCSV(f)
            onImported(data)
          }
        }} />
      </label>
    </div>
  )
}