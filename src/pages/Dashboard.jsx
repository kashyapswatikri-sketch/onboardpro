import React from 'react';
import { Award, CheckCircle, Clock, Zap } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Welcome Banner */}
            <section className="glass-panel p-8 relative overflow-hidden group">
                <div className="relative z-10 flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-primary dark:text-white">Let's get you settled in! 🚀</h2>
                        <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">You're making great progress, Jane.</p>

                        <div className="inline-flex items-center gap-2 bg-white/40 dark:bg-white/10 px-4 py-2 rounded-full border border-white/50 backdrop-blur-sm">
                            <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold text-primary dark:text-white text-sm">Today's Focus:</span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">Complete IT Setup</span>
                        </div>
                    </div>

                    <div className="hidden lg:block w-32 h-32 bg-gradient-to-br from-secondary to-blue-400 rounded-full blur-2xl opacity-40 absolute -right-4 -top-4 group-hover:scale-110 transition-transform duration-700"></div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Active Journeys */}
                <div className="glass-panel p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-primary dark:text-white">
                            <CheckCircle className="text-secondary" />
                            Your Progress
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <NavLink to="/setup" className="block group">
                            <div className="glass-card p-5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 dark:text-white text-sm">Account & IT Setup</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Essential configuration</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">2/5 Tasks</span>
                                </div>
                                <ProgressBar value={40} label="Completion" color="var(--color-secondary)" />
                            </div>
                        </NavLink>

                        <NavLink to="/flashcards" className="block group">
                            <div className="glass-card p-5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 dark:text-white text-sm">Jargon Flashcards</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Company dictionary</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded">Novice</span>
                                </div>
                                <ProgressBar value={15} label="Mastery" color="#A0C4E0" />
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Stats & Badges */}
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass-panel p-6 bg-gradient-to-br from-[#190482] to-[#8B2BE2] text-white border-0">
                            <div className="flex justify-between items-start mb-4">
                                <Clock className="opacity-70" size={24} />
                                <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">Target</span>
                            </div>
                            <h3 className="text-4xl font-bold mb-1">3</h3>
                            <p className="text-white/70 text-sm">Days Until First Check-in</p>
                        </div>

                        <div className="glass-panel p-6 flex flex-col justify-center items-center text-center">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-3 animate-pulse">
                                <span className="text-xl">🔥</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">3 Days</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Streak maintained!</p>
                        </div>
                    </div>

                    <div className="glass-panel p-6 flex-1">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary dark:text-white">
                            <Award className="text-secondary" />
                            Latest Badges
                        </h2>

                        <div className="flex gap-4">
                            <div className="flex-1 glass-card bg-purple-50/50 dark:bg-purple-900/10 p-4 flex flex-col items-center justify-center border-purple-100 dark:border-purple-800">
                                <div className="text-3xl mb-2">⚡️</div>
                                <span className="text-xs font-bold text-primary dark:text-white">Fast Starter</span>
                                <span className="text-[10px] text-gray-400">Unlocked</span>
                            </div>
                            <div className="flex-1 glass-card p-4 flex flex-col items-center justify-center opacity-60 grayscale">
                                <div className="text-3xl mb-2">🏆</div>
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Master</span>
                                <span className="text-[10px] text-gray-400">Locked</span>
                            </div>
                            <div className="flex-1 glass-card p-4 flex flex-col items-center justify-center opacity-60 grayscale">
                                <div className="text-3xl mb-2">📚</div>
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Scholar</span>
                                <span className="text-[10px] text-gray-400">Locked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
