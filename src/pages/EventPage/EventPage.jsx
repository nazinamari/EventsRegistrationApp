import { useParams } from 'react-router-dom';
import { getEventById } from '../../services/api';
import { useEffect, useState } from 'react';

export default function EventPage() {
    const { eventId } = useParams();
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getEvents = async () => {
            setLoading(true);
            try {
                const response = await getEventById(eventId);
                setParticipants(response);
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
            {participants && (
                <div>
                    <p>{participants.title}</p>
                </div>
            )}
        </div>
    );
}
