import React from "react";

function ProcessStep(props) {
  return (
    <div className="process-step__container">
      <div className="process-step__icon">{props.icon}</div>
      <h3 className="process-step__title">{props.title}</h3>
      <p className="process-step__description">{props.description}</p>
    </div>
  );
}

export default ProcessStep;