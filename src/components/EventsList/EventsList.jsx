import Event from '../EventCard/EventCard';
import css from './EventsList.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function EventsList({ events }) {
    const location = useLocation();

    return (
        <div>
            <ul className={css.list}>
                {events.map(event => (
                    <li key={event.id}>
                        <Link
                            to={`/events/${event.id}`}
                            state={location}
                            className={css.item__link}
                        >
                            <Event data={event} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
