import { createBrowserRouter } from 'react-router-dom'
import PageShell from '@/components/PageShell'
import MembersList from '@/pages/MembersList'
import MemberEdit from '@/pages/MemberEdit'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/NotFound'
import { PrivateRoute } from '@/auth/PrivateRoute'

export const router = createBrowserRouter([
  { path: '/', element: <PageShell><PrivateRoute><MembersList/></PrivateRoute></PageShell> },
  { path: '/dashboard', element: <PageShell><PrivateRoute><Dashboard/></PrivateRoute></PageShell> },
  { path: '/miembros', element: <PageShell><PrivateRoute><MembersList/></PrivateRoute></PageShell> },
  { path: '/miembros/:id', element: <PageShell><PrivateRoute><MemberEdit/></PrivateRoute></PageShell> },
  { path: '/perfil', element: <PageShell><PrivateRoute><Profile/></PrivateRoute></PageShell> },
  { path: '*', element: <PageShell><NotFound/></PageShell> }
])