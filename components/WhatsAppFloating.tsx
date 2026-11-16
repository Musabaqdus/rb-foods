'use client';

import React, { useState, useEffect } from 'react';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-whatsapp-wrap">
      <div className={`whatsapp-tooltip-pill ${showTooltip ? 'show' : ''}`} id="whatsapp-tooltip">
        <span>Need fruit pulp samples? Chat with Export Desk</span>
        <button
          type="button"
          onClick={() => setShowTooltip(false)}
          style={{ fontSize: '1.1rem', lineHeight: 1, color: '#999', marginLeft: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Dismiss tooltip"
        >
          &times;
        </button>
      </div>
      <a
        href="https://wa.me/923000000000?text=Hello%20R%26B%20Foods%20Export%20Desk%2C%20I%20would%20like%20to%20inquire%20about%20your%20fruit%20purees"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp with Export Desk"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
        </svg>
      </a>
    </div>
  );
}
