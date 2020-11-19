import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AddPost.scss";

const AddPost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn btn-modal" onClick={handleShow}>
        <span className="material-icons">edit</span>
      </button>

      {/* ADD MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h5>Create post</h5>{" "}
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={1} placeholder="Description" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option value="">Travel</option>
                <option value="">Lifestyle</option>
                <option value="">Business</option>
                <option value="">Foos</option>
                <option value="">Work</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="image url"
                value="https://source.unsplash.com/random"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="Light" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="default"
              className="btn-submit"
              onClick={handleClose}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddPost;
