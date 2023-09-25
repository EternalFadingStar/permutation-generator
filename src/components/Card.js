import { useState, useRef } from 'react';

function Card() {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const [permutations, setPermutations] = useState([]);
    const [highlightStatus, setHighlightStatus] = useState({});

    const handleInputChange = (e) => {
        const newDigit = e.target.value.slice(-1); // Get the last digit
        // If the digit is already in the set and the new value's length is not less than the current value, return
        if (inputValue.includes(newDigit) && e.target.value.length >= inputValue.length) return;
    
        setInputValue(e.target.value);
        setPermutations(getPermutations(e.target.value));
    };
    
    const handleCardClick = () => {
        inputRef.current.focus(); // Focus the input when the card is clicked
    };

    const getPermutations = (string) => {
        if (string.length === 0) return [];
    
        const sortedString = [...string].sort().join(''); // Sort the string in ascending order
    
        const generateCombinations = (prefix, chars, result) => {
            if (prefix.length === 4) {
                // Check if every digit from the sortedString appears at least once in the prefix
                if ([...sortedString].every(digit => prefix.includes(digit))) {
                    result.add(prefix);
                }
                return;
            }
            for (let i = 0; i < chars.length; i++) {
                generateCombinations(prefix + chars[i], chars, result);
            }
        };
    
        const result = new Set();
        generateCombinations('', sortedString, result);
    
        return [...result];
    };

    const handlePermutationClick = (perm, event) => {
        event.stopPropagation(); // Stop the event from bubbling up
    
        let newStatus = {};
    
        if (event.type === "click" && event.ctrlKey) { // Ctrl + Left click
            newStatus = highlightStatus[perm] === "green" ? "default" : "green";
        } else if (event.type === "click") { // Just Left click
            newStatus = highlightStatus[perm] === "red" ? "default" : "red";
        } else if (event.type === "auxclick") { // Middle click
            setHighlightStatus({}); // Reset all highlights
            return;
        }
    
        setHighlightStatus(prev => ({ ...prev, [perm]: newStatus }));
    };
    
        
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(permutations.join('\n'));
    };

    return (
        <div className="card" onClick={handleCardClick}>
            
            <div className="input-container" data-digit-count={inputValue.length}>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="digit-box">
                        {inputValue[index] || ''}
                    </div>
                ))}    
            </div>
        
            <input
                ref={inputRef}
                className="card-input"
                type="text"
                maxLength={4}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter up to 4 digits"
            />
    
            <div className="permutations-container">
                {permutations.map((perm, index) => (
                    <div
                    key={index}
                    className={`permutation ${highlightStatus[perm] || ''}`}
                    onClick={(e) => handlePermutationClick(perm, e)}
                    onContextMenu={(e) => handlePermutationClick(perm, e)}
                    onAuxClick={(e) => handlePermutationClick(perm, e)}
                >
                    {perm}
                </div>
                
                ))}
            </div>
        </div>
    );    
}

export default Card;
