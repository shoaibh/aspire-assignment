import './App.css'
import { Dashboard } from './components/dashboard/Dashboard'
import { Sidebar } from './components/sidebar/Sidebar'
import { CardContextProvider } from './context/CardContext'

function App() {

  return (
    <CardContextProvider>
      <div className='flex min-h-screen'>
        <Sidebar />
        <Dashboard />
      </div>
      </CardContextProvider>
  )
}

export default App
