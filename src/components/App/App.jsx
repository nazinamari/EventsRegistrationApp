import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import { Suspense } from 'react';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import EventPage from '../../pages/EventPage/EventPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import EventParticipantsPage from '../../pages/EventParticipantsPage/EventParticipantsPage';

export default function App() {
    return (
        <div>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events/:eventId" element={<EventPage />}>
                        <Route path="register" element={<RegistrationPage />} />
                        <Route
                            path="view"
                            element={<EventParticipantsPage />}
                        />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}
