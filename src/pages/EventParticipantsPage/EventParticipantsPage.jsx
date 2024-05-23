import React, { useEffect, useState } from 'react';
import { getEventById } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './EventParticipantsPage.module.css';

export default function EventParticipantsPage() {
    const { eventId } = useParams();
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getEvents = async () => {
            setLoading(true);
            try {
                const response = await getEventById(eventId);
                setEvent(response);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getEvents();
    }, [eventId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>Error loading event participants. Please try again later.</div>
        );
    }

    return (
        <div className={css.participants__container}>
            <h2>"Awesome Event" participants</h2>
            <div className={css.participants__grid}>
                <p>{event.participant}</p>
            </div>
        </div>
    );
}
