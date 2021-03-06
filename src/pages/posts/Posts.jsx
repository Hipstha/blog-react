import React, { useContext } from "react";

import { DatabaseContext } from "../../context/Database";

import CategorySelector from "../../components/category-selector/CategorySelector";
import Post from "../../components/post/Post";
import AddPost from "../../components/add-post/AddPost";
import "./Posts.scss";

const Posts = () => {
  const { database, category } = useContext(DatabaseContext);
  return (
    <>
      <CategorySelector />
      <AddPost />
      <section className="posts-container">
        {database.map((post) => {
          if (post.category === category) {
            return (
              <div key={post.id} className="post">
                <Post postData={post} />
              </div>
            );
          } else if (category === "All") {
            return (
              <div key={post.id} className="post">
                <Post postData={post} />
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default Posts;
