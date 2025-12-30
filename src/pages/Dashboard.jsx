import React from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Welcome Section */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-white/50 relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-2 text-primary">Welcome back, Jane! 👋</h1>
                    <p className="text-xl text-gray-500 mb-6">Let's continue your onboarding journey.</p>

                    <div className="inline-block bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
                        <span className="font-semibold text-primary">Company Motto:</span>
                        <span className="text-secondary ml-2">"Innovate with Passion, Grow with Purpose"</span>
                    </div>
                </div>

                {/* Decorative Background Blob */}
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Progress & Stats */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-white/50">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <CheckCircle className="text-secondary" />
                            Your Progress
                        </h2>

                        <div className="flex flex-col gap-6">
                            <div className="bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-accent">
                                <NavLink to="/setup" className="block">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">Account & IT Setup</h3>
                                        <span className="text-xs font-bold bg-green-100 text-green-600 px-2 py-1 rounded">2/5 Tasks</span>
                                    </div>
                                    <ProgressBar value={40} label="Completion" />
                                </NavLink>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-accent">
                                <NavLink to="/flashcards" className="block">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">Jargon Flashcards</h3>
                                        <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded">Novice</span>
                                    </div>
                                    <ProgressBar value={15} label="Mastery" color="var(--color-primary)" />
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-3xl text-white shadow-lg">
                            <Clock className="mb-4 opacity-80" size={32} />
                            <h3 className="text-3xl font-bold mb-1">3 Days</h3>
                            <p className="text-white/70">Until First Check-in</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-white/50 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl">🔥</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">3 Day Streak!</h3>
                            <p className="text-gray-500 text-sm">Keep it up!</p>
                        </div>
                    </div>
                </div>

                {/* Badges / Motivation */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-white/50 flex flex-col">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Award className="text-yellow-500" />
                        Achievements
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help" title="Locked">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center">🏆</div>
                            <span className="font-semibold text-center text-sm">Onboarding Master</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-purple-50 rounded-2xl border border-purple-100">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mb-3 flex items-center justify-center text-2xl">⚡️</div>
                            <span className="font-semibold text-center text-sm text-primary">Fast Starter</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center">📚</div>
                            <span className="font-semibold text-center text-sm">Jargon Ninja</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center">🤝</div>
                            <span className="font-semibold text-center text-sm">Social Butterfly</span>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 text-center">
                        <p className="text-sm text-gray-400">Complete tasks to unlock badges!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
