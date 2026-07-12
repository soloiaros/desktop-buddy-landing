import { Link } from 'react-router';
import style from './HeaderLink.module.css'

export default function HeaderLink ({ title, href }) {
    return (
        <Link to={href}>
            {title}
        </Link>
    )
}