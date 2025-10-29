import { useMsal, useIsAuthenticated } from '@azure/msal-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const { instance, accounts } = useMsal()
  const isAuth = useIsAuthenticated()
  const name = accounts[0]?.name || 'Invitado'

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container h-14 flex items-center justify-between">
        <Link to="/" className="font-bold">L.A.M.A. Medellín</Link>
        <div className="flex items-center gap-4">
          <NavLink to="/miembros" className={({isActive}) => isActive? 'font-semibold' : ''}>Miembros</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive? 'font-semibold' : ''}>Dashboard</NavLink>
          {isAuth ? (
            <>
              <span className="text-sm text-gray-600">{name}</span>
              <button className="px-3 py-1 rounded bg-gray-100" onClick={() => instance.logoutRedirect()}>Salir</button>
            </>
          ) : (
            <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={() => instance.loginRedirect()}>Iniciar sesión</button>
          )}
        </div>
      </div>
    </nav>
  )
}