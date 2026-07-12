import HeaderLink from '../Components/HeaderLink'
import style from './Header.module.css'
import { Link } from 'react-router'

export default function Header({ cartItems }) {
    return (
        <header>
            <Link to="/" className={style.logoLink}>
                <img src="/hero-img.png" alt="Home" className={style.logo} />
            </Link>
            <HeaderLink title="shop" href="shop" />
            <HeaderLink title="cart" href="cart" />
            <div className={style.count}>{Object.values(cartItems).reduce((sum, curr) => {
                return sum + curr}, 0)}
            </div>
        </header>
    )
}