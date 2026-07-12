import './App.css'
import Header from '../Components/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    <footer>
    </footer>

    </>
  )
}

export default App
