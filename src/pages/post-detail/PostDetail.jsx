import React from "react";
import { useParams } from "react-router";

const PostDetail = () => {
  let { postId } = useParams();
  console.log(postId);
  return (
    <div>
      <h1>Post detaul</h1>
      <h2>El post Id es: {postId}</h2>
    </div>
  );
};

export default PostDetail;
