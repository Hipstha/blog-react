import React from "react";

import CategorySelector from "../../components/category-selector/CategorySelector";
import Post from "../../components/post/Post";
import "./Posts.scss";

const Posts = () => {
  return (
    <>
      <CategorySelector />

      <section className="posts-container">
        <div className="post">
          <Post postId={"1"} />
        </div>
        <div className="post">
          <Post postId={"2"} />
        </div>
        <div className="post">
          <Post postId={"3"} />
        </div>
        <div className="post">
          <Post postId={"4"} />
        </div>
      </section>
    </>
  );
};

export default Posts;
