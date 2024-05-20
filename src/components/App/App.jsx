import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import EventPage from '../../pages/EventPage/EventPage';
import RegistrationForm from '../RegistrationForm /RegistrationForm';
import EventView from '../EventView/EventView';
import { Suspense } from 'react';

export default function App() {
    return (
        <div>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/events" element={<HomePage />} />
                    <Route path="/events/:eventId" element={<EventPage />}>
                        <Route path="regester" element={<RegistrationForm />} />
                        <Route path="view" element={<EventView />} />
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}
