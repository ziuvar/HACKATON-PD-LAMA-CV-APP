import { useEffect, useState } from 'react'
import { createMember, getMember, updateMember } from '@/services/members'
import type { Miembro } from '@/types/miembro'
import MemberForm from '@/components/MemberForm'
import { useNavigate, useParams } from 'react-router-dom'

export default function MemberEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [value, setValue] = useState<Miembro | undefined>()

  useEffect(() => {
    if (id === 'nuevo') return setValue({ nombre: '', apellido: '' } as Miembro)
    if (id) getMember(Number(id)).then(setValue).catch(() => {
      const local = JSON.parse(localStorage.getItem('lama-members')||'[]') as Miembro[]
      const found = local.find(x => x.id === Number(id))
      setValue(found)
    })
  }, [id])

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">{id === 'nuevo' ? 'Crear' : 'Editar'} miembro</h1>
      {value && <MemberForm value={value} onSubmit={async (v) => {
        try {
          if (id === 'nuevo') {
            const res = await createMember(v)
            navigate(`/miembros/${res.id}`)
          } else {
            await updateMember(Number(id), { ...value, ...v })
            navigate('/miembros')
          }
        } catch {
          const current = JSON.parse(localStorage.getItem('lama-members')||'[]') as Miembro[]
          if (id === 'nuevo') {
            const nextId = (Math.max(0, ...current.map(x => x.id||0)) + 1)
            const created = { ...v, id: nextId }
            localStorage.setItem('lama-members', JSON.stringify([...current, created]))
            navigate(`/miembros/${nextId}`)
          } else {
            const updated = current.map(x => x.id === Number(id) ? { ...x, ...v } : x)
            localStorage.setItem('lama-members', JSON.stringify(updated))
            navigate('/miembros')
          }
        }
      }} />}
    </div>
  )
}