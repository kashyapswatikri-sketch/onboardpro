import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Home,
    Settings,
    FileText,
    Users,
    GraduationCap,
    BrainCircuit
} from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: <Settings size={20} />, label: 'Account Setup', path: '/setup' },
        { icon: <FileText size={20} />, label: 'Documentation', path: '/docs' },
        { icon: <Users size={20} />, label: 'Meet your Buddy', path: '/buddy' },
        { icon: <GraduationCap size={20} />, label: 'Trainings', path: '/trainings' },
        { icon: <BrainCircuit size={20} />, label: 'Flashcards', path: '/flashcards' },
    ];

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col h-screen sticky top-0 py-6 pl-6">
            <div className="glass-panel h-full flex flex-col overflow-hidden">
                {/* Logo Area */}
                <div className="p-6 pb-2">
                    <NavLink to="/" className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#190482] to-[#8B2BE2] flex items-center justify-center shadow-lg text-white font-bold text-xl">
                            OP
                        </div>
                        <span className="font-bold text-xl tracking-tight text-primary dark:text-white">OnboardPro</span>
                    </NavLink>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 overflow-y-auto space-y-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-primary/10 dark:bg-white/10 text-primary dark:text-white font-semibold'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white'
                            }`
                        }
                    >
                        <Home size={20} />
                        <span>Dashboard</span>
                    </NavLink>

                    <div className="my-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Your Journey
                    </div>

                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-primary/10 dark:bg-white/10 text-primary dark:text-white font-semibold'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white'
                                }`
                            }
                        >
                            <div className={`transition-transform duration-200 ${item.path === '/flashcards' ? 'group-hover:rotate-12' : ''}`}>
                                {item.icon}
                            </div>
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Footer/Motto */}
                <div className="p-6 mt-auto">
                    <div className="glass-card p-4 text-center">
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            "Innovate with Passion"
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
