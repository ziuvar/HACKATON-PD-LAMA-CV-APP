import { PublicClientApplication, type Configuration } from '@azure/msal-browser'

const config: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_B2C_CLIENT_ID,
    authority: import.meta.env.VITE_B2C_AUTHORITY,
    knownAuthorities: [import.meta.env.VITE_B2C_KNOWN_AUTHORITY],
    redirectUri: window.location.origin,
  }
}

export const msalInstance = new PublicClientApplication(config)