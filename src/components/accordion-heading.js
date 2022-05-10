import React, { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";

const AccordionHeading = ({ heading, subheading, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = activeEventKey === eventKey;
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
