import HeaderLink from '../Components/HeaderLink'
import style from './Header.module.css'

export default function Header() {
    return (
        <header>
            <HeaderLink title="shop" href="#shop" />
            <HeaderLink title="cart" href="#cart" />
        </header>
    )
}