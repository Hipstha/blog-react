import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CommentBox from "../../components/comment-box/CommentBox";
import "./PostDetail.scss";

const PostDetail = () => {
  let { postId } = useParams();
  let backImg = {
    backgroundImage:
      "url('https://cdn.pixabay.com/photo/2016/01/19/17/19/foggy-1149637_960_720.jpg')",
  };
  console.log(postId);
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
            <h2>Prueba título</h2>
          </div>
        </div>
      </article>
      <article className="post-summary">
        <div className="post-summary-container">
          <div className="summary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam eligendi magni nemo accusantium, sequi porro eos ab
              cumque voluptatibus accusamus hic ullam aperiam sit ipsam
              laudantium tenetur beatae ipsa suscipit!
            </p>
          </div>
        </div>
      </article>
      <article className="post-comments">
        <div className="post-comments-title">
          <h3>Comments</h3>
        </div>
        <div className="comments-section">
          <div className="this-comment-box">
            <CommentBox />
          </div>
          <div className="this-comment-box">
            <CommentBox />
          </div>
          <div className="this-comment-box">
            <CommentBox />
          </div>
          <div className="this-comment-box">
            <CommentBox />
          </div>
        </div>
        <div className="comment-form">
          <form action="#">
            <div className="form-col">
              <textarea
                name="comment"
                id="comment-input"
                rows="0"
                placeholder="Write a comment"
              ></textarea>
            </div>
            <div className="form-col">
              <button type="submit" className="submit-button">
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
