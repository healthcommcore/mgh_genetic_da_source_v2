import React from "react";
import { connect } from "react-redux";
import { triggerModal } from "../actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

const mapStateToProps = (state) => {
  return {
    showModal: state.navigation.showModal
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerModal: () => {
      dispatch( triggerModal() );
    }
  };
}

const DAModal = ({ triggerModal, showModal, title, children }) => {
  return (
    <Modal show={ showModal } onHide={ triggerModal } centered>
      <Modal.Header>
        <Modal.Title>{ title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{ children }</p>
        <div className="d-flex justify-content-between mt-4">
          <Button onClick={ triggerModal } variant="da rounded-pill">No</Button>
          <Button as={ Link } to="/end" variant="da rounded-pill">Yes</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DAModal);
