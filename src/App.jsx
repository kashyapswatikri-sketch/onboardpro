import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AccountSetup from './pages/AccountSetup';
import Flashcards from './pages/Flashcards';
import Documentation from './pages/Documentation';
import MeetBuddy from './pages/MeetBuddy';
import Trainings from './pages/Trainings';

function App() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    // Simple mock auth guard: In a real app, check auth state here
    // For this prototype, we'll just allow direct navigation

    if (isLoginPage) {
        return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        );
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/setup" element={<AccountSetup />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/buddy" element={<MeetBuddy />} />
                <Route path="/trainings" element={<Trainings />} />
                {/* Redirect unknown routes to Dashboard */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}

export default App;
