import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Miembro } from '@/types/miembro'

const schema = z.object({
  nombre: z.string().min(1, 'Requerido'),
  apellido: z.string().min(1, 'Requerido'),
  correoElectronico: z.string().email('Correo inválido').optional().or(z.literal('')),
  rango: z.string().optional(),
  estatus: z.string().optional(),
  ciudad: z.string().optional(),
  moto: z.string().optional(),
  cilindrajeCC: z.coerce.number().int().positive().optional().or(z.nan()),
})

export default function MemberForm({ value, onSubmit }: { value?: Miembro; onSubmit: (v: Miembro) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<Miembro>({
    defaultValues: value,
    resolver: zodResolver(schema as any)
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border rounded-lg">
      <div>
        <label className="block text-sm">Nombre</label>
        <input className="border rounded px-3 py-2 w-full" {...register('nombre')} />
        {errors.nombre && <p className="text-red-600 text-xs">{errors.nombre.message}</p>}
      </div>
      <div>
        <label className="block text-sm">Apellido</label>
        <input className="border rounded px-3 py-2 w-full" {...register('apellido')} />
      </div>
      <div>
        <label className="block text-sm">Correo</label>
        <input className="border rounded px-3 py-2 w-full" type="email" {...register('correoElectronico')} />
      </div>
      <div>
        <label className="block text-sm">Rango</label>
        <select className="border rounded px-3 py-2 w-full" {...register('rango')}>
          <option value="">—</option>
          <option>Full Color</option>
          <option>Rockets</option>
          <option>Prospect</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Estatus</label>
        <select className="border rounded px-3 py-2 w-full" {...register('estatus')}>
          <option value="">—</option>
          <option>Activo</option>
          <option>Inactivo</option>
          <option>Suspendido</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Ciudad</label>
        <input className="border rounded px-3 py-2 w-full" {...register('ciudad')} />
      </div>
      <div>
        <label className="block text-sm">Moto</label>
        <input className="border rounded px-3 py-2 w-full" {...register('moto')} />
      </div>
      <div>
        <label className="block text-sm">Cilindraje (CC)</label>
        <input className="border rounded px-3 py-2 w-full" type="number" {...register('cilindrajeCC')} />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm">Contacto de Emergencia</label>
        <input className="border rounded px-3 py-2 w-full" placeholder="Nombre / Relación / Teléfono" {...register('contactoEmergencia')} />
      </div>
      <div className="col-span-full flex gap-3 justify-end">
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Guardar</button>
      </div>
    </form>
  )
}