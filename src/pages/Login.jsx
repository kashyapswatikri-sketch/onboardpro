import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Lock } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email) {
            // Mock login
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-xl z-10">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                        O
                    </div>
                    <h1 className="text-3xl font-bold text-primary">Welcome to OnboardPro</h1>
                    <p className="text-gray-500 mt-2">Sign in to start your journey</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            placeholder="Work Email"
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        />
                    </div>

                    <div className="flex justify-end">
                        <a href="#" className="text-sm text-secondary font-medium hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Start Onboarding
                        <ArrowRight size={20} />
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-500 text-sm">
                    Having trouble? <a href="#" className="text-secondary font-semibold">Contact IT Support</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
