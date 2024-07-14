import './Typewriter.css';
import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, delay = 0) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const startTyping = () => {
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);
        };

        const delayTimeout = setTimeout(startTyping, delay);

        return () => {
            clearInterval(delayTimeout);
        };
    }, [text, speed, delay]);

    return displayText;
};

    const Typewriter = ({ text, speed, delay, id, className}) => {
        const displayText = useTypewriter(text, speed, delay);
    
        return <div id={id} className="typeWriteText">{displayText}</div>;
    };

export default Typewriter;