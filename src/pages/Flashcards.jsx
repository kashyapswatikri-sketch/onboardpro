import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCw, Sparkles } from 'lucide-react';

const flashcardsData = [
    { id: 1, term: "EOD", definition: "End of Day (Deadline)" },
    { id: 2, term: "LGTM", definition: "Looks Good To Me" },
    { id: 3, term: "KPI", definition: "Key Performance Indicator" },
    { id: 4, term: "OOK", definition: "Out of Office Key (Emergency)" },
    { id: 5, term: "Sync", definition: "Quick meeting/Alignment" },
];

const Flashcards = () => {
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState(0);
    const [completed, setCompleted] = useState(false);

    const currentCard = flashcardsData[index];

    const handleSwipe = (dir) => {
        setDirection(dir);
        setIsFlipped(false); // Reset flip
        setTimeout(() => {
            if (index + 1 < flashcardsData.length) {
                setIndex(index + 1);
                setDirection(0);
            } else {
                setCompleted(true);
            }
        }, 300);
    };

    if (completed) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 glass-panel animate-fade-in">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Check size={48} className="text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-primary dark:text-white">Session Mastered!</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">You are officially 5 words smarter in the corporate dialect.</p>
                <button
                    onClick={() => { setIndex(0); setCompleted(false); }}
                    className="btn-primary"
                >
                    Review Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center max-w-xl mx-auto h-[calc(100vh-180px)] justify-center">

            {/* 3D Card Container */}
            <div className="relative w-full max-w-sm aspect-[3/4] perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentCard.id}
                        initial={{ x: 300, opacity: 0, rotate: 10, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
                        exit={{
                            x: direction === 1 ? 500 : -500,
                            opacity: 0,
                            rotate: direction === 1 ? 40 : -40,
                            scale: 0.8
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-full h-full absolute cursor-pointer"
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        <div
                            className={`w-full h-full relative transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                        >

                            {/* Front Side */}
                            <div className="absolute inset-0 bg-white dark:bg-[#1E1E1E] rounded-3xl shadow-xl border border-white/50 dark:border-white/10 flex flex-col items-center justify-center p-8 backface-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>

                                <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary dark:from-white dark:to-gray-400 mb-4 tracking-tighter">
                                    {currentCard.term}
                                </h2>

                                <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tap to reveal</p>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-primary to-[#000040] rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center justify-center p-8 text-white backface-hidden"
                                style={{ transform: 'rotateY(180deg)' }}
                            >
                                <div className="absolute top-6 right-6 opacity-20">
                                    <Sparkles size={48} />
                                </div>
                                <h3 className="text-2xl font-medium text-center leading-relaxed">
                                    {currentCard.definition}
                                </h3>
                                <div className="mt-8 px-4 py-2 rounded-full bg-white/10 text-xs font-bold tracking-wider">
                                    DEFINITION
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Action Bar */}
            <div className="flex gap-8 mt-12">
                <button
                    onClick={() => handleSwipe(-1)}
                    className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 shadow-lg hover:scale-110 transition-all border-red-100 dark:border-red-900/30"
                    aria-label="Skip"
                >
                    <X size={32} />
                </button>

                <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md transform translate-y-2 hover:rotate-180 transition-all duration-500"
                    aria-label="Flip"
                >
                    <RotateCw size={20} />
                </button>

                <button
                    onClick={() => handleSwipe(1)}
                    className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 shadow-lg hover:scale-110 transition-all border-green-100 dark:border-green-900/30"
                    aria-label="Know it"
                >
                    <Check size={32} />
                </button>
            </div>
        </div>
    );
};

export default Flashcards;
