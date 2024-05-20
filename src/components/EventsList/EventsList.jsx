import EventCard from '../EventCard/EventCard';
import css from './EventsList.module.css';

export default function EventsList({ events }) {
    return (
        <div>
            <ul className={css.list}>
                {events.map(event => (
                    <li key={event.id} className={css.item}>
                        <EventCard data={event} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
