import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCw, HelpCircle } from 'lucide-react';

const flashcardsData = [
    { id: 1, term: "EOD", definition: "End of Day. Used to specify a deadline." },
    { id: 2, term: "Standup", definition: "A daily short meeting to discuss progress and blockers." },
    { id: 3, term: "KPI", definition: "Key Performance Indicator. A measurable value that demonstrates how effectively a company is achieving key business objectives." },
    { id: 4, term: "LGTM", definition: "Looks Good To Me. Commonly used in code reviews." },
    { id: 5, term: "All-Hands", definition: "A regular meeting where all employees of the company gather for updates." },
];

const Flashcards = () => {
    const [index, setIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState(0); // -1 left, 1 right
    const [completed, setCompleted] = useState(false);

    const currentCard = flashcardsData[index];

    const handleSwipe = (dir) => {
        setDirection(dir);
        setIsFlipped(false);

        setTimeout(() => {
            if (index + 1 < flashcardsData.length) {
                setIndex(index + 1);
                setDirection(0);
            } else {
                setCompleted(true);
            }
        }, 200);
    };

    if (completed) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check size={48} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
                <p className="text-gray-500 mb-8">You've reviewed all the jargon for today.</p>
                <button
                    onClick={() => { setIndex(0); setCompleted(false); }}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary/90 transition"
                >
                    Review Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-primary">Jargon Flashcards</h1>
                <p className="text-gray-500">Master the company lingo one card at a time.</p>
            </div>

            <div className="relative w-full max-w-md aspect-[4/5] perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentCard.id}
                        initial={{ x: 300, opacity: 0, rotate: 10 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{
                            x: direction === 1 ? 300 : -300,
                            opacity: 0,
                            rotate: direction === 1 ? 20 : -20
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-full h-full absolute cursor-pointer"
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        <div className={`w-full h-full relative transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

                            {/* Front */}
                            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-white/50 flex flex-col items-center justify-center p-8 backface-hidden">
                                <div className="absolute top-6 right-6 text-gray-300">
                                    <HelpCircle />
                                </div>
                                <h2 className="text-5xl font-bold text-center text-primary mb-4">{currentCard.term}</h2>
                                <p className="text-gray-400 text-sm uppercase tracking-widest mt-4">Tap to reveal</p>
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 bg-primary rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-white backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                                <h3 className="text-2xl font-semibold text-center leading-relaxed">{currentCard.definition}</h3>
                                <div className="mt-8 text-white/50 text-sm">Tap to flip back</div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex gap-6 mt-10">
                <button
                    onClick={() => handleSwipe(-1)}
                    className="w-16 h-16 rounded-full bg-white text-red-500 shadow-md flex items-center justify-center hover:bg-red-50 hover:scale-110 transition-all"
                >
                    <X size={28} />
                </button>

                <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 shadow-sm flex items-center justify-center hover:bg-gray-200 mt-2"
                >
                    <RotateCw size={20} />
                </button>

                <button
                    onClick={() => handleSwipe(1)}
                    className="w-16 h-16 rounded-full bg-white text-green-500 shadow-md flex items-center justify-center hover:bg-green-50 hover:scale-110 transition-all"
                >
                    <Check size={28} />
                </button>
            </div>

            <div className="mt-6 text-gray-400 font-medium">
                Card {index + 1} of {flashcardsData.length}
            </div>
        </div>
    );
};

export default Flashcards;
