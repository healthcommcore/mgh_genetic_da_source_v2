import React, { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

const AccordionHeading = ({ heading, subheading, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = currentEventKey === eventKey;
  const iconDisplay = getIconDisplay(isCurrentEventKey);

  return (
    <Card.Header onClick={ decoratedOnClick }>
      <div className="d-flex accordion-header-content">
        <div className="icon-wrapper d-flex align-items-center">
          <div className={ "icon " + iconDisplay.style }>{ iconDisplay.text }</div>
        </div>
        <div className="heading-wrapper">
          <h3>{ heading }</h3>
          { subheading ? <h4>{ subheading }</h4> : "" }
        </div>
      </div>
    </Card.Header>
  );
}

  const getIconDisplay = (isOpen) => {
    return isOpen ?
      { style: "icon-close", text: "less" } :
      { style: "icon-open", text: "more" };
  }

export default AccordionHeading;
