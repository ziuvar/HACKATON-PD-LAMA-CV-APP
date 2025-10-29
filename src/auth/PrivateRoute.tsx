import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { Navigate, useLocation } from 'react-router-dom'
import React from 'react'

export const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isAuth = useIsAuthenticated()
  const { instance } = useMsal()
  const loc = useLocation()

  if (!isAuth) {
    instance.loginRedirect()
    return <Navigate to="/" state={{ from: loc }} replace />
  }
  return <>{children}</>
}