# L.A.M.A. Medellín — Gestión de Miembros (React + TS)

## 🚀 Comandos rápidos

```bash
npm create vite@latest lama-members-app -- --template react-ts
cd lama-members-app
npm i
npm run dev
```

## 🔐 Azure AD B2C (social login)
Configura un flujo SignUpSignIn y llena `.env.local`:

```
VITE_API_BASE_URL=http://localhost:5000
VITE_B2C_CLIENT_ID=TU_CLIENT_ID
VITE_B2C_AUTHORITY=https://TU_TENANT.b2clogin.com/TU_TENANT.onmicrosoft.com/B2C_1_signupsignin
VITE_B2C_KNOWN_AUTHORITY=TU_TENANT.b2clogin.com
```

## 🔌 API Backend esperada
- `GET    /miembros`
- `GET    /miembros/:id`
- `POST   /miembros`
- `PUT    /miembros/:id`
- `DELETE /miembros/:id`

Si no hay backend, se usa `localStorage` como **demo**.

## 📦 Importar/Exportar
- Exporta a CSV y reimporta con Papaparse.

## 🧭 Funcionalidad
- Login con B2C (lista para social).
- CRUD de miembros con filtros y búsqueda.
- Dashboard con métricas rápidas.
- Modo demo con seed en `localStorage`.