import React from 'react';

const ProgressBar = ({ value, max = 100, label, color = 'var(--color-secondary)' }) => {
    const percentage = Math.round((value / max) * 100);

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-sm font-bold text-secondary">{percentage}%</span>
            </div>
            <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%`, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
