// Button.jsx
import React from 'react';
import './Button.css';
import { FaArrowRight } from 'react-icons/fa';

const Button = () => {
  return (
    <div className="emailBox">
      <div className="getFunded">
        Get Started <span className="arrow-icon">{">>"}</span>
      </div>
    </div>
  );
};

export default Button;
