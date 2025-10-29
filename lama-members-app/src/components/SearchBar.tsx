import { useForm } from 'react-hook-form'

type Props = { onChange: (v: any) => void }
export default function SearchBar({ onChange }: Props) {
  const { register, watch, reset } = useForm({ defaultValues: { q: '', rango: '', estatus: '', ciudad: '' } })
  watch((v) => onChange(v))
  return (
    <div className="bg-white p-4 rounded-lg border flex flex-wrap gap-3 items-end">
      <div>
        <label className="block text-sm">Buscar</label>
        <input className="border rounded px-3 py-2" placeholder="Nombre, correo, placa…" {...register('q')} />
      </div>
      <div>
        <label className="block text-sm">Rango</label>
        <select className="border rounded px-3 py-2" {...register('rango')}>
          <option value="">Todos</option>
          <option>Full Color</option>
          <option>Rockets</option>
          <option>Prospect</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Estatus</label>
        <select className="border rounded px-3 py-2" {...register('estatus')}>
          <option value="">Todos</option>
          <option>Activo</option>
          <option>Inactivo</option>
          <option>Suspendido</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Ciudad</label>
        <input className="border rounded px-3 py-2" placeholder="Ciudad" {...register('ciudad')} />
      </div>
      <button type="button" onClick={() => reset()} className="ml-auto px-3 py-2 rounded bg-gray-100">Limpiar</button>
    </div>
  )
}