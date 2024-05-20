import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './EventCard.module.css';

export default function EventCard({ data: { title, description, id } }) {
    return (
        <div className={css.card}>
            <Link to={`/events/${id}`} className={css.item__link}>
                <p>{title}</p>
                <p>{description}</p>
            </Link>

            <ul className={css.list__additional}>
                <div className={css.linkWrap}>
                    <li>
                        <NavLink
                            className={css.link}
                            to={`/events/${id}/register`}
                        >
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={css.link} to={`/events/${id}/view`}>
                            View
                        </NavLink>
                    </li>
                </div>
            </ul>
        </div>
    );
}
