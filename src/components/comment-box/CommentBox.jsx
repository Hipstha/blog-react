import React from "react";
import "./CommentBox.scss";

const CommentBox = () => {
  return (
    <div className="comment-box">
      <div className="comment">
        <div className="user-img">
          <p>
            <span className="material-icons">person_pin</span>
          </p>
        </div>
        <div className="comment-body">
          <div className="comment-user">
            <h3>Usuario</h3>
          </div>
          <div className="comment-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto ipsa tempore dignissimos nostrum rem reiciendis dolore
              tenetur, cupiditate eaque autem delectus inventore reprehenderit
              commodi voluptatibus! Velit aut quis molestiae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
