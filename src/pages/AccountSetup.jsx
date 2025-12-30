import React, { useState, useEffect } from 'react';
import { Check, Circle, ExternalLink, Monitor, Mail, Lock, Shield, Wifi } from 'lucide-react';
import confetti from 'canvas-confetti';

const AccountSetup = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Set up Corporate Email', description: 'Configure Outlook with your credentials.', icon: <Mail />, completed: true },
        { id: 2, title: 'Configure VPN', description: 'Install GlobalProtect and connect.', icon: <Shield />, completed: true },
        { id: 3, title: 'Password Manager Setup', description: 'Create your account on 1Password.', icon: <Lock />, completed: false },
        { id: 4, title: 'Slack Profile', description: 'Upload a photo and set your status.', icon: <Monitor />, completed: false },
        { id: 5, title: 'Connect to Office WiFi', description: 'Certificates for secure connection.', icon: <Wifi />, completed: false },
    ]);

    const [showCongrats, setShowCongrats] = useState(false);

    const toggleTask = (id) => {
        const task = tasks.find(t => t.id === id);
        if (!task.completed) {
            // Trigger celebration if marking as complete
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setShowCongrats(true);
            setTimeout(() => setShowCongrats(false), 3000);
        }

        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Account & IT Setup</h1>
                <p className="text-gray-500">Complete these essential steps to get your digital workspace ready.</p>
            </div>

            {/* Progress Header */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-white/50 mb-8 sticky top-4 z-20">
                <div className="flex justify-between items-end mb-2">
                    <div>
                        <span className="text-3xl font-bold text-primary">{progress}%</span>
                        <span className="text-gray-400 text-sm ml-2">Completed</span>
                    </div>
                    {progress === 100 && (
                        <span className="text-sm font-bold text-green-500 bg-green-100 px-3 py-1 rounded-full">All Done! 🎉</span>
                    )}
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Task List */}
            <div className="flex flex-col gap-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`group p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${task.completed
                                ? 'bg-primary/5 border-primary/20'
                                : 'bg-white border-white/50 hover:border-secondary shadow-sm hover:shadow-md'
                            }`}
                    >
                        <div className="flex items-start gap-4 z-10 relative">
                            <div className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed
                                    ? 'bg-primary border-primary'
                                    : 'bg-transparent border-gray-300 group-hover:border-secondary'
                                }`}>
                                {task.completed && <Check size={14} className="text-white" />}
                            </div>

                            <div className="flex-1">
                                <h3 className={`font-semibold text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                                    {task.title}
                                </h3>
                                <p className="text-gray-500 text-sm">{task.description}</p>
                            </div>

                            <div className={`p-3 rounded-xl ${task.completed ? 'bg-white/50 text-gray-400' : 'bg-secondary/10 text-secondary'}`}>
                                {task.icon}
                            </div>
                        </div>

                        {/* Visual feedback for completion */}
                        {task.completed && (
                            <div className="absolute inset-0 bg-primary/5 z-0 pointer-events-none"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Congratulations Toast */}
            {showCongrats && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl animate-fade-in z-50 backdrop-blur-md">
                    <span>🌟 Good job! Task completed.</span>
                </div>
            )}
        </div>
    );
};

export default AccountSetup;
