import React from 'react';
import { Mail, Phone, MapPin, UserCheck, HeartPulse, Building2 } from 'lucide-react';

const ProfilePane = () => {
    return (
        <aside className="w-80 flex-shrink-0 h-screen sticky top-0 py-6 pr-6 hidden xl:block">
            <div className="glass-panel h-full flex flex-col p-6 overflow-y-auto">

                {/* Profile Header */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-[#190482] to-[#8B2BE2] shadow-xl mb-4">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#121212]"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-primary dark:text-white">Jane Doe</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Product Designer</p>
                    <div className="mt-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-200 dark:border-green-800">
                        Active Employee
                    </div>
                </div>

                {/* Details Grid */}
                <div className="space-y-6 flex-1">
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Essentials</h3>

                        <div className="flex items-center gap-3 text-sm group">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-secondary transition-colors">
                                <Building2 size={16} />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-400 text-xs">Employee ID</p>
                                <p className="font-medium text-gray-700 dark:text-gray-200">OP-2024-859</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm group">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-secondary transition-colors">
                                <Mail size={16} />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-gray-400 text-xs">Email</p>
                                <p className="font-medium text-gray-700 dark:text-gray-200 truncate" title="jane.doe@onboardpro.com">jane.doe@onboardpro.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-gray-200 dark:bg-white/10 w-full"></div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Personal</h3>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500">
                                <HeartPulse size={16} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Blood Group</p>
                                <p className="font-medium text-gray-700 dark:text-gray-200">O+</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-500">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Location</p>
                                <p className="font-medium text-gray-700 dark:text-gray-200">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-gray-200 dark:bg-white/10 w-full"></div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Contacts</h3>

                        <div className="glass-card p-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                                JS
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Reporting Manager</p>
                                <p className="text-sm font-bold text-primary dark:text-white">John Smith</p>
                            </div>
                        </div>

                        <div className="glass-card p-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold">
                                HR
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">HR Contact</p>
                                <p className="text-sm font-bold text-primary dark:text-white">Sarah Connor</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View Org Chart CTA */}
                <div className="mt-8">
                    <button className="w-full py-3 rounded-xl border border-primary/20 dark:border-white/20 text-primary dark:text-white font-semibold hover:bg-primary/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm">
                        <UserCheck size={18} />
                        View Org Chart
                    </button>
                </div>

            </div>
        </aside>
    );
};

export default ProfilePane;
