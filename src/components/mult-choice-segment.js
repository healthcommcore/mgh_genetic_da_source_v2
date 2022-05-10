import React from "react";
import Form from "react-bootstrap/Form";
import { setTestInput } from "../actions";
import { connect } from "react-redux";
import { urlify, toCamelCase } from "../helpers";

const mapStateToProps = (state) => {
  return {
    savedInput: state.user.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTestInput: (e) => {
      dispatch( setTestInput(toCamelCase(e.target.name), e.target.value, e.target.type) );
    }
  }
}

const MultChoiceSegment = ({ content, savedInput, setTestInput }) => {
  const type = content.field_can_choose_multiple ? "checkbox" : "radio";
  const name = urlify(content.relationships.field_relevance.name);
  return (
    <Form>
      { content.field_intro_to_options && <p>{ content.field_intro_to_options }</p> }
      { content.field_option_name.map( (option, i) => {
        let saved = savedInput[toCamelCase(name)];
        return (
          <Form.Check 
            defaultChecked={ Array.isArray(saved) ? saved.includes(option) : saved === option }
            type={ type } 
            label={ option } 
            key={ i } 
            name={ name }
            value={ option }
            onChange={ setTestInput }
          />
        );
      })}
    </Form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MultChoiceSegment);
