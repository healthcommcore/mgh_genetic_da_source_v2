import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { ucFirst } from "../helpers";

const LanguageSwitcher = ({ englishPath, spanishPath }) => {
  const languages = {
    en: "english",
    es: "spanish"
  }
  return (
    <div className="language-switcher d-flex justify-content-end">
      <ToggleButtonGroup
        type="radio"
        className=""
        name="language-switcher"
      >
      { Object.keys(languages).map( (langCode) => {
        return (
          <ToggleButton
            id={`lang-${languages[langCode]}`}
            value={ langCode }
          >
            { ucFirst(languages[langCode]) }
          </ToggleButton>
        );
      })}
      </ToggleButtonGroup>
    </div>
  );
}

export default LanguageSwitcher;
