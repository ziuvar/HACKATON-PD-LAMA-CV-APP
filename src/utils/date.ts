export const toISODate = (d?: string | Date | null) => d ? new Date(d).toISOString().slice(0,10) : ''
