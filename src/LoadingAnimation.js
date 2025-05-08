import React, { useState, useEffect } from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandBall, setExpandBall] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpandBall(true); 
    }, 1500);

    setTimeout(() => {
      setIsLoading(false); 
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="loading-wrapper">
          <div className={`ball ${expandBall ? "expanded" : ""}`}></div>
        </div>
      )}
      {!isLoading && <div className="content">Website Content Loaded</div>}
    </div>
  );
};

export default LoadingAnimation;
