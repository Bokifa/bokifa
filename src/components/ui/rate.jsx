'use client';

import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
const rates = [1, 2, 3, 4, 5]
export const Rate = ({ onClick, defaultState = 0 }) => {
    const [hovered, setHovered] = useState(null);
    const [selected, setSelected] = useState(null);

    // Initialize selected state from defaultState prop
    useEffect(() => {
		const newState = Math.round(defaultState)
        setSelected(newState);
    }, [defaultState]);

    const handleClick = (star) => {
        setSelected(star);
        if (onClick) {
            onClick(star);
        }
    };

    return (
        <div className="flex space-x-1">
            {rates.map((star) => {
                const isHovered = hovered !== null && star <= hovered;
                const isSelected = selected !== null && star <= selected;

                return (
                    <button
                        key={star}
                        onMouseEnter={() => setHovered(star)}
						tabIndex={1}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => handleClick(star)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleClick(star);
                        }}
                        className="transition-colors cursor-pointer"
                    >
                        {isHovered || isSelected ? (
                            <FaStar className="text-yellow-400" />
                        ) : (
                            <FaRegStar className="text-gray-400" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};
