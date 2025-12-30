import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';

const docs = [
    { title: "Employee Handbook", type: "PDF", size: "2.4 MB" },
    { title: "IT Security Policy", type: "PDF", size: "1.2 MB" },
    { title: "Holiday Calendar", type: "PDF", size: "0.8 MB" },
    { title: "Expense Guidelines", type: "Spreadsheet", size: "145 KB" },
    { title: "Remote Work Policy", type: "DOCX", size: "2.1 MB" },
    { title: "Benefits Guide", type: "PDF", size: "5.6 MB" },
];

const Documentation = () => {
    return (
        <div>
            <div className="mb-8">
                <div className="glass-panel p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 border-none">
                    <h2 className="text-lg font-bold text-primary dark:text-white mb-2">Resource Library</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Access all essential documents for your employment.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {docs.map((doc, idx) => (
                    <div key={idx} className="glass-card p-4 group hover:bg-white/40 dark:hover:bg-white/5 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <FileText size={20} />
                            </div>
                            <button className="text-gray-400 hover:text-secondary p-1">
                                <Download size={16} />
                            </button>
                        </div>

                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-primary dark:group-hover:text-white transition-colors">{doc.title}</h3>

                        <div className="flex justify-between items-end mt-4">
                            <span className="text-xs text-gray-400 font-medium bg-gray-50 dark:bg-white/5 px-2 py-1 rounded-md border border-gray-100 dark:border-white/5">{doc.type} • {doc.size}</span>
                            <ArrowRight size={16} className="text-gray-300 group-hover:text-secondary transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documentation;
