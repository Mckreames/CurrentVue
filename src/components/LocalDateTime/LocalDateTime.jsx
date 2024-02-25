import React, { useState, useEffect } from 'react';
import "./LocalDateTime.css";

const LocalDateTime = () => {
    const [localDateTime, setLocalDateTime] = useState(new Date());

    useEffect(() => {
      const updateDateTime = () => {
        setLocalDateTime(new Date());
      };

      const intervalId = setInterval(updateDateTime, 1000);
      return () => clearInterval(intervalId);
    }, []);
    
    return (
      <div>
        <p className="d-flex justify-content-center">{localDateTime.toLocaleString()}</p>
      </div>
    );
};

export default LocalDateTime
