import React from "react";
import "./Post.scss";
// Module import
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <Link to={`/post/${props.postId}`}>
      <article className="post-container">
        <div className="post-image">
          <img
            src="https://cdn.pixabay.com/photo/2016/01/19/17/19/foggy-1149637_960_720.jpg"
            alt="postImage"
          />
        </div>
        <div className="post-body">
          <div className="post-title">
            <h2>Título</h2>
          </div>
          <div className="onHover-animation"></div>
          <div className="post-comments-home">
            <p>
              <span>3 </span> <span>Comments </span>{" "}
              <span className="material-icons">icon</span>
            </p>
          </div>
          <div className="post-description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              illo, adipisci vel magnam obcaecati recusandae pariatur molestias
              reprehenderit similique commodi minima eligendi hic dolore
              dignissimos perferendis fugit corporis beatae impedit.
            </p>
          </div>
          <div className="post-footer">
            <div className="post-category">
              <p>Travel</p>
            </div>
            <div className="post-option">
              <p className="pruebaClick">
                <span className="material-icons">edit</span>
              </p>
              <p>
                <span className="material-icons">delete</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Post;
