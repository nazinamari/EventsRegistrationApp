import axios from 'axios';

axios.defaults.baseURL = 'https://664a6f96a300e8795d41fa52.mockapi.io/';

export default async function fetchAllEvents() {
    const response = await axios.get('/events');
    return response.data;
}
