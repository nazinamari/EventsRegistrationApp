import { Outlet, useParams } from 'react-router-dom';
import { getEventById } from '../../services/api';
import { Suspense, useEffect, useState } from 'react';

export default function EventPage() {
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

    return (
        <div>
            {event && location.pathname === `/events/${eventId}` && (
                <div>
                    <h1>{event.title}</h1>
                </div>
            )}
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    );
}
