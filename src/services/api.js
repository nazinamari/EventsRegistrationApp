import axios from 'axios';

axios.defaults.baseURL = 'https://664a6f96a300e8795d41fa52.mockapi.io/';

export const fetchAllEvents = async () => {
    const response = await axios.get('/events');
    return response.data;
};

export const getEventById = async eventId => {
    const response = await axios.get(`/events/${eventId}`);
    return response.data;
};
