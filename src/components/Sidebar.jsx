import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Home,
    Settings,
    FileText,
    Users,
    GraduationCap,
    BrainCircuit,
    MessageSquare
} from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: <Settings size={20} />, label: 'Account & IT Setup', path: '/setup' },
        { icon: <FileText size={20} />, label: 'Documentation', path: '/docs' },
        { icon: <Users size={20} />, label: 'Meet your Buddy', path: '/buddy' },
        { icon: <GraduationCap size={20} />, label: 'Trainings', path: '/trainings' },
        { icon: <BrainCircuit size={20} />, label: 'Jargon Flashcards', path: '/flashcards' },
    ];

    return (
        <aside className="h-screen w-64 glass-dark flex flex-col fixed left-0 top-0 z-50 transition-all duration-300">
            <div className="p-8 pb-4">
                <NavLink to="/" className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-secondary font-bold text-xl">O</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">OnboardPro</h1>
                </NavLink>

                <div className="h-[1px] bg-white/10 w-full mb-6"></div>
            </div>

            <nav className="flex-1 px-4 overflow-y-auto">
                <ul className="flex flex-col gap-2">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-white text-primary shadow-lg font-medium'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`
                            }
                        >
                            <Home size={20} />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <div className="my-2 px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
                        Journey
                    </div>

                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-white text-primary shadow-lg font-medium'
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`
                                }
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
                        JD
                    </div>
                    <div>
                        <p className="text-white text-sm font-medium">Jane Doe</p>
                        <p className="text-white/60 text-xs">Product Designer</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
