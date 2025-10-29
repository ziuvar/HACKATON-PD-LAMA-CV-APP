import { useMsal } from '@azure/msal-react'

export default function Profile(){
  const { accounts } = useMsal()
  const acc = accounts[0]
  return (
    <div className="bg-white border rounded p-4">
      <h1 className="text-xl font-semibold mb-2">Perfil</h1>
      <pre className="text-sm overflow-auto">{JSON.stringify(acc, null, 2)}</pre>
    </div>
  )
}