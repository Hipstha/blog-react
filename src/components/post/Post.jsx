import React, { useContext, useState } from "react";
import "./Post.scss";
import { DatabaseContext } from "../../context/Database";
// Module import
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Modal, Button, Form } from "react-bootstrap";
import "../add-post/AddPost.scss";

const Post = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id, title, summary, img, category, comments } = props.postData;
  const summaryShort = summary.substring(0, 150) + "...";

  const [update, setUpdate] = useState({
    id: id,
    title: title,
    summary: summary,
    category: category,
    img: img,
    comments: comments,
  });

  const getFormData = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const { database, setDatabase } = useContext(DatabaseContext);

  const openUpdatePost = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await handleShow();
    document.getElementsByClassName("titleInput")[0].value = title;
    document.getElementsByClassName("summaryUpdate")[0].value = summary;
    document.getElementsByClassName("imgInput")[0].value = img;
  };

  const UpdatePost = () => {
    let newDB = database.map((data) => {
      if (data.id === id) {
        data = update;
      }
      return data;
    });
    setDatabase(newDB);
    handleClose();
    Swal.fire("Success", "Your post have been updated", "success");
  };

  const deletePost = (event) => {
    event.preventDefault();
    event.stopPropagation();
    Swal.fire({
      title: "Are you sure you want to delete this post?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Sucessfully deleted",
          "This post has been deleted",
          "success"
        );
        setDatabase(database.filter((data) => data.id !== id));
      }
    });
  };

  return (
    <>
      <Link to={`/post/${id}`}>
        <article className="post-container">
          <div className="post-image">
            <img src={img} alt="postImage" />
          </div>
          <div className="post-body">
            <div className="post-title">
              <h2>{title}</h2>
            </div>
            <div className="onHover-animation"></div>
            <div className="post-comments-home">
              <p>
                <span>{comments.length} </span> <span>Comments </span>{" "}
                <span className="material-icons">forum</span>
              </p>
            </div>
            <div className="post-description">
              <p>{summaryShort}</p>
            </div>
            <div className="post-footer">
              <div className="post-category">
                <p>{category}</p>
              </div>
              <div className="post-option">
                <p className="pruebaClick">
                  <span
                    className="material-icons"
                    onClick={(event) => openUpdatePost(event)}
                  >
                    edit
                  </span>
                </p>
                <p>
                  <span
                    className="material-icons"
                    onClick={(event) => deletePost(event)}
                  >
                    delete
                  </span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </Link>

      {/* UPDATE MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h5>Update post</h5>{" "}
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Title"
                className="titleInput"
                name="title"
                onChange={getFormData}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Description"
                className="summaryUpdate"
                name="summary"
                onChange={getFormData}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" name="category" onChange={getFormData}>
                <option value="Travel">Travel</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
                <option value="Foos">Food</option>
                <option value="Work">Work</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="image url"
                className="imgInput"
                name="img"
                onChange={getFormData}
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
              onClick={() => UpdatePost()}
            >
              Update post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Post;
