import React from "react";
import ValuesScaleExplanationSegment from "./values-scale-explanation-segment";

const ValuesScaleExplanation = ({ classes="" }) => {
  const directions = ["left", "right"];
  const className = (classes && " " + classes);
  return (
    <div className={ "values-scale-explanation d-flex" + className }>
      { directions.map( (direction, i) => {
        return (
          <ValuesScaleExplanationSegment
            direction={ direction }
            key={ i }
          />
        )
      })}
    </div>
  );
}

export default ValuesScaleExplanation;
