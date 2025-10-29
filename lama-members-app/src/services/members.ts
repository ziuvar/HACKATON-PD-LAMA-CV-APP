import api from './api'
import type { Miembro } from '@/types/miembro'

const path = '/miembros'

export async function listMembers(params?: Partial<{ q: string; rango: string; estatus: string; ciudad: string }>): Promise<Miembro[]> {
  const r = await api.get<Miembro[]>(path, { params })
  return r.data
}
export async function getMember(id: number): Promise<Miembro> {
  const r = await api.get<Miembro>(`${path}/${id}`)
  return r.data
}
export async function createMember(m: Miembro): Promise<Miembro> {
  const r = await api.post<Miembro>(path, m)
  return r.data
}
export async function updateMember(id: number, m: Miembro): Promise<void> {
  await api.put(`${path}/${id}`, m)
}
export async function deleteMember(id: number): Promise<void> {
  await api.delete(`${path}/${id}`)
}

// Fallback demo local (para hackatón si no hay backend):
export async function demoSeedIfNeeded() {
  const key = 'lama-demo-seed'
  if (!localStorage.getItem(key)) {
    const demo: Miembro[] = [
      { id: 1, nombre: 'Ana', apellido: 'López', rango: 'Full Color', estatus: 'Activo', ciudad: 'Medellín', moto: 'FZ25', marca: 'Yamaha', cilindrajeCC: 250 },
      { id: 2, nombre: 'Bruno', apellido: 'Gómez', rango: 'Prospect', estatus: 'Activo', ciudad: 'Envigado', moto: 'Dominar', marca: 'Bajaj', cilindrajeCC: 400 },
      { id: 3, nombre: 'Carla', apellido: 'Ríos', rango: 'Rockets', estatus: 'Inactivo', ciudad: 'Bello', moto: 'CBR', marca: 'Honda', cilindrajeCC: 600 }
    ]
    localStorage.setItem('lama-members', JSON.stringify(demo))
    localStorage.setItem(key, '1')
  }
}