import React from "react";
import ValuesScale from "./values-scale";
import ValuesScaleExplanation from "./values-scale-explanation";

const ValuesContent = ({ list }) => {
  return list && (
    <>
      <ValuesScaleExplanation classes="mb-4" />
      { list.map( (item, i) => {
          return (
            <ValuesScale
              num={ i }
              key={ i }
              heading={ item.field_value_heading }
              leftLabel={ item.field_l } 
              rightLabel={ item.field_r } 
            />
          );
        })}
      <ValuesScaleExplanation />
    </>
  );
}

export default ValuesContent;
