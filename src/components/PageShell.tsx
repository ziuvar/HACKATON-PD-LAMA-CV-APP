import React from 'react'
import Navbar from './Navbar'
export default function PageShell({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container py-6">{children}</main>
    </div>
  )
}