import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { DatabaseContext } from "../../context/Database";
import Swal from "sweetalert2";
import "./AddPost.scss";

const AddPost = () => {
  const { database, setDatabase } = useContext(DatabaseContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [create, setCreate] = useState({
    id: 10,
    title: "",
    summary: "",
    category: "Travel",
    img: "https://source.unsplash.com/random",
    comments: [],
  });

  const getFormData = (e) => {
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });
  };

  const createElement = async () => {
    let thisDb = database.map((data) => data);
    create.id = thisDb.length + 1;
    await thisDb.unshift(create);
    setDatabase(thisDb);
    handleClose();
    Swal.fire("Success", "Your post have been updated", "success");
  };

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
              <Form.Control
                onChange={getFormData}
                name="title"
                type="text"
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                onChange={getFormData}
                name="summary"
                as="textarea"
                rows={1}
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control onChange={getFormData} name="category" as="select">
                <option value="Travel">Travel</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
                <option value="Foos">Food</option>
                <option value="Work">Work</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={getFormData}
                name="img"
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
              onClick={createElement}
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
