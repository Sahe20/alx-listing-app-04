import React from "react";

interface PillProps {
    label: string;
    onClick: () => void;
    active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
    return (
        <button
            className={`px-4 py-2 rounded-full border text-sm mr-2 mb-2 transition ${active
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Pill;
