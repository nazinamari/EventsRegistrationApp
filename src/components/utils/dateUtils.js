import { format } from 'date-fns';

export const formatTime = timestamp => {
    const date = new Date(timestamp * 1000);
    return format(date, 'MMMM d, yyyy');
};
