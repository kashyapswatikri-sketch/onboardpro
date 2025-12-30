import React, { useState } from 'react';
import { Mail, Shield, Lock, Monitor, Wifi, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const AccountSetup = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Corporate Email', description: 'Configure Outlook credentials', icon: <Mail size={20} />, completed: true },
        { id: 2, title: 'VPN Access', description: 'Install GlobalProtect', icon: <Shield size={20} />, completed: true },
        { id: 3, title: 'Password Manager', description: 'Setup 1Password vault', icon: <Lock size={20} />, completed: false },
        { id: 4, title: 'Slack Profile', description: 'Upload photo & status', icon: <Monitor size={20} />, completed: false },
        { id: 5, title: 'Office WiFi', description: 'Install security certs', icon: <Wifi size={20} />, completed: false },
    ]);

    const toggleTask = (id) => {
        const task = tasks.find(t => t.id === id);
        if (!task.completed) {
            confetti({
                particleCount: 150,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#190482', '#8B2BE2', '#B7B5E5']
            });
        }
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Liquid Progress Header */}
            <div className="glass-panel p-8 mb-8 relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-end">
                    <div>
                        <h2 className="text-secondary font-bold text-lg mb-1">Your Setup Journey</h2>
                        <span className="text-5xl font-bold text-primary dark:text-white">{progress}%</span>
                    </div>

                    {progress === 100 ? (
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-xl font-bold border border-green-200 dark:border-green-800 flex items-center gap-2">
                            <Check size={20} /> All Systems Go!
                        </div>
                    ) : (
                        <div className="hidden sm:block text-right">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{tasks.length - tasks.filter(t => t.completed).length} tasks remaining</p>
                        </div>
                    )}
                </div>

                {/* Liquid Progress Bar Background */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-100 dark:bg-white/10">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-in-out relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-white opacity-20 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`glass-card p-6 cursor-pointer group transition-all duration-300 relative overflow-hidden ${task.completed
                                ? 'opacity-80'
                                : 'hover:bg-white/30 dark:hover:bg-white/10 hover:shadow-lg hover:-translate-y-1'
                            }`}
                    >
                        <div className="flex items-start gap-4 reltive z-10">
                            {/* Checkbox Circle */}
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${task.completed
                                    ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-500 text-white scale-110'
                                    : 'border-gray-300 dark:border-gray-600 text-transparent group-hover:border-secondary'
                                }`}>
                                <Check size={14} strokeWidth={4} />
                            </div>

                            <div className="flex-1">
                                <h3 className={`font-bold text-lg transition-colors ${task.completed ? 'text-gray-500 dark:text-gray-500 line-through' : 'text-gray-800 dark:text-white'
                                    }`}>
                                    {task.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{task.description}</p>
                            </div>

                            <div className={`p-3 rounded-xl transition-colors ${task.completed
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                                    : 'bg-primary/5 dark:bg-white/5 text-primary dark:text-white group-hover:bg-secondary group-hover:text-white'
                                }`}>
                                {task.icon}
                            </div>
                        </div>

                        {/* Completion Overlay Effect */}
                        {task.completed && (
                            <div className="absolute inset-0 bg-green-50/10 pointer-events-none"></div>
                        )}
                    </div>
                ))}

                {/* Help Card */}
                <div className="glass-card p-6 border-dashed border-2 border-gray-300 dark:border-gray-700 bg-transparent flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-3">
                        <AlertCircle className="text-gray-500" />
                    </div>
                    <h3 className="font-semibold text-sm">Need Access?</h3>
                    <p className="text-xs text-gray-400 mt-1">Request specialized software</p>
                </div>
            </div>
        </div>
    );
};

export default AccountSetup;
