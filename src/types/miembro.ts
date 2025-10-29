export type Miembro = {
  id?: number
  nombre: string
  apellido: string
  celular?: string
  correoElectronico?: string
  fechaIngreso?: string
  direccion?: string
  member?: number
  cargo?: string
  rango?: string // Full Color, Rockets, Prospect
  estatus?: string
  fechaNacimiento?: string
  cedula?: string
  rh?: string
  eps?: string
  padrino?: string
  foto?: string
  contactoEmergencia?: string // "Nombre / Relación / Teléfono"
  ciudad?: string
  moto?: string
  anoModelo?: number | null
  marca?: string
  cilindrajeCC?: number | null
  placaMatricula?: string
  fechaExpedicionLicenciaConduccion?: string
  fechaExpedicionSOAT?: string
}

export const rangos = ["Full Color", "Rockets", "Prospect"] as const
export const estatuses = ["Activo", "Inactivo", "Suspendido"] as const