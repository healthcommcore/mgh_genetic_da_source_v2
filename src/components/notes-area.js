import React from "react";
import ContentContainer from "./content-container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { setNotes } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    notes: state.user.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch( setNotes(e.target.value));
    }
  }
}

const NotesArea = ({ notes, handleChange }) => {
  const placeholder = "Write your questions or comments here. You will be able to review them later."
  return (
      <ContentContainer className="notes-margin">
        <Card>
          <Card.Header bsPrefix="card-header notes-header">Notes</Card.Header>
          <Card.Body bsPrefix="card-body notes-body">
          <Form.Control 
            as="textarea" 
            rows="7" 
            value={ notes }
            onChange={ handleChange }
            placeholder={ notes ? "" : placeholder }
          />
          </Card.Body>
        </Card>
      </ContentContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesArea);
