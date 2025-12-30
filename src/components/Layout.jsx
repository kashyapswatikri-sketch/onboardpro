import React from 'react';
import Sidebar from './Sidebar';
import Chatbot from './Chatbot';
import ProfilePane from './ProfilePane';
import ThemeToggle from './ThemeToggle';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const titleMap = {
        '/': 'Dashboard',
        '/setup': 'Account Setup',
        '/docs': 'Documentation',
        '/buddy': 'Meet Your Buddy',
        '/trainings': 'Trainings',
        '/flashcards': 'Flashcards'
    };
    const currentTitle = titleMap[location.pathname] || 'OnboardPro';

    return (
        <div className="flex bg-background text-text-main overflow-hidden w-full relative transition-colors duration-300">

            {/* 3-Column Layout */}
            <Sidebar />

            <main className="flex-1 h-screen overflow-y-auto relative scroll-smooth">
                {/* Header */}
                <header className="sticky top-0 z-30 px-8 py-6 w-full flex justify-between items-center backdrop-blur-md bg-background/80 transition-colors duration-300">
                    <div>
                        <h1 className="text-2xl font-bold text-primary dark:text-white tracking-tight">{currentTitle}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Welcome to your personalized workspace</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </header>

                {/* Content Canvas */}
                <div className="px-8 pb-12 max-w-5xl mx-auto animate-fade-in relative z-10">
                    {children}
                </div>

                {/* Background Blobs for Liquid Effect */}
                <div className="fixed top-20 left-[20%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
                <div className="fixed bottom-20 right-[30%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-multiply dark:mix-blend-screen opacity-50"></div>
            </main>

            <ProfilePane />
            <Chatbot />
        </div>
    );
};

export default Layout;
