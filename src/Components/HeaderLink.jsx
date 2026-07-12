import { Link } from 'react-router';

export default function HeaderLink ({ title, href }) {
    return (
        <Link to={href}>
            {title}
        </Link>
    )
}