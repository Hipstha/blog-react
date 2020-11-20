import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { DatabaseContext } from "../../context/Database";

import CommentBox from "../../components/comment-box/CommentBox";
import "./PostDetail.scss";

const PostDetail = () => {
  const { postId } = useParams();
  const { database } = useContext(DatabaseContext);

  let thisDatabase = database.filter((data) => data.id === Number(postId))[0];
  const { title, summary, img, comments } = thisDatabase;

  const [comment, setComment] = useState({
    user: "Joe Doew",
    comment: "",
  });

  const getFormData = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const submitedForm = async (e) => {
    e.preventDefault();
    document.getElementById("comment-input").value = "";
    setComment({
      user: "Joe Doew",
      comment: "",
    });
  };

  let backImg = {
    backgroundImage: `url('${img}')`,
  };
  return (
    <section>
      <article className="post-header" style={backImg}>
        <div className="post-header-container">
          <div className="return-options">
            <Link to="/posts">
              <span className="material-icons">arrow_back_ios</span> View Posts
            </Link>
          </div>
          <div className="post-header-title">
            <h2>{title}</h2>
          </div>
        </div>
      </article>
      <article className="post-summary">
        <div className="post-summary-container">
          <div className="summary">
            <p>{summary}</p>
          </div>
        </div>
      </article>
      <article className="post-comments">
        <div className="post-comments-title">
          <h3>Comments</h3>
        </div>
        <div className="comments-section">
          {comments.map((comment, idx) => (
            <div key={idx} className="this-comment-box">
              <CommentBox commentData={comment} />
            </div>
          ))}
        </div>
        <div className="comment-form">
          <form>
            <div className="form-col">
              <textarea
                name="comment"
                id="comment-input"
                rows="0"
                placeholder="Write a comment"
                onChange={getFormData}
              ></textarea>
            </div>
            <div className="form-col">
              <button
                onClick={(e) => submitedForm(e)}
                type="button"
                className="submit-button"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PostDetail;
