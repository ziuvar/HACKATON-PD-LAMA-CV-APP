import { MsalProvider } from '@azure/msal-react'
import { msalInstance } from './msal'
import React from 'react'

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>
}