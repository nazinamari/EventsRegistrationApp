import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import EventPage from '../../pages/EventPage/EventPage';
import RegistrationForm from '../RegistrationForm /RegistrationForm';
import EventView from '../EventView/EventView';
import { Suspense } from 'react';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
    return (
        <div>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events/:eventId" element={<EventPage />}>
                        <Route path="regester" element={<RegistrationForm />} />
                        <Route path="view" element={<EventView />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}
