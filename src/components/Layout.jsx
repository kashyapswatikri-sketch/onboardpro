import React from 'react';
import Sidebar from './Sidebar';
import Chatbot from './Chatbot';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-background text-text-main">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 relative">
                <div className="max-w-7xl mx-auto h-full animate-fade-in">
                    {children}
                </div>
            </main>
            <Chatbot />
        </div>
    );
};

export default Layout;
