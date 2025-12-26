import React, { useState } from 'react';
import './CodeDisplay.css';

export default function CodeDisplay({ code, size = 'medium' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className={`code-display code-display-${size}`}>
            <span className="code-text">{code}</span>
            <button
                onClick={handleCopy}
                className="code-copy-btn"
                title="Copy code"
            >
                {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                )}
            </button>
            {copied && <span className="copy-tooltip">Copied!</span>}
        </div>
    );
}
