import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Title from '../../components/Title/Title';
import { fetchAllEvents } from '../../services/api';
import EventsList from '../../components/EventsList/EventsList';
import css from './HomePage.module.css';

export default function HomePage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getEvents = async () => {
            setLoading(true);
            try {
                const response = await fetchAllEvents();
                setEvents(response);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getEvents();
    }, []);

    return (
        <div className={css.container}>
            {loading && <Loader></Loader>}
            {error && <p>Something went wrong. Please try again later.</p>}
            <Title>Events</Title>
            {events.length > 0 && <EventsList events={events} />}
        </div>
    );
}
