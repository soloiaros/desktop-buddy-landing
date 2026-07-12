import HeaderLink from '../Components/HeaderLink'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <header>
      <HeaderLink title="shop" href="#shop" />
      <HeaderLink title="cart" href="#cart" />
    </header>
    <Outlet />
    <footer>
    </footer>

    </>
  )
}

export default App
