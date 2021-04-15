import React, { useState, useEffect } from 'react';

const ProgressBar = (props) => {
  const { completed } = props;
  const [circleProcent, setCircleProcent] = useState({
    strokeDashoffset: 0,
    fill: '#000',
  });

  useEffect(() => {
    const porcentCircle = (471 - (471 * completed) / 100);
    if (completed <= 50) {
      setCircleProcent({
        strokeDashoffset: porcentCircle,
        stroke: 'red',
      });
    } else if (completed <= 80) {
      setCircleProcent({
        strokeDashoffset: porcentCircle,
        stroke: '#E86330',
      });
    } else {
      setCircleProcent({
        strokeDashoffset: porcentCircle,
        stroke: '#85B300',
      });
    }
  }, []);
  return (
    <div className="porcentaje">
      <svg className="porcentaje__svg">
        <circle cx="100" cy="100" r="75" className="porcentaje__circle">a</circle>
        <circle style={circleProcent} cx="100" cy="100" r="75" className="porcentaje__circle">a</circle>
      </svg>
      <div className="porcentaje__numero">
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
