import { Suspense } from 'react';
import css from './EventCard.module.css';
// import { formatTime } from '../utils/dateUtils';
import { NavLink, Outlet } from 'react-router-dom';

export default function Event({
    data: { title, description, date, organizer },
}) {
    return (
        <div className={css.card}>
            <p>{title}</p>
            <p>{description}</p>
            {/* <p>Event date: {formatTime(date)}</p>
            <p>{organizer}</p> */}
            <ul className={css.list__additional}>
                <div className={css.linkWrap}>
                    <li>
                        <NavLink className={css.link} to="register">
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={css.link} to="view">
                            View
                        </NavLink>
                    </li>
                </div>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </ul>
        </div>
    );
}
