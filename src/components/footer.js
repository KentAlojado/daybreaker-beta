import React from "react";
import "font-awesome/css/font-awesome.min.css";
const Footer = () => (
<div className="bg-grey-dark">
    <div className="wrapping split-wrap">	
      <div className="split text-white">
        <a
          href="http://codescholarly.com/"
          className="font-bold no-underline text-white"
        >
          Daybreaker
        </a>. 2018 All Rights Reserved
      </div>
      <div className="split">
        <a href="https://www.facebook.com/codescholarly/" className="font-bold no-underline text-white" target="_blank" rel="noopener noreferrer">Facebook </a>  
        <a href="https://twitter.com/codescholarly?lang=en" className="font-bold no-underline text-white" target="_blank" rel="noopener noreferrer"> Twitter </a> 
        <a href="https://github.com/Codescholarly" className="font-bold no-underline text-white" target="_blank" rel="noopener noreferrer"> GitHub</a>		
      </div>
    </div>
  </div>
);

export default Footer;
