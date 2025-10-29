import Papa from 'papaparse'
import type { Miembro } from '@/types/miembro'

export function exportCSV(rows: Miembro[], filename = 'miembros.csv') {
  const csv = Papa.unparse(rows as any)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function importCSV(file: File): Promise<Miembro[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: True,
      skipEmptyLines: True,
      complete: (res) => resolve(res.data as Miembro[]),
      error: (err) => reject(err)
    } as any)
  })
}