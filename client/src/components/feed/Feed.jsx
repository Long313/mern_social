import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { useEffect, useState } from "react";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/timeline/63ea2628320e9bfc43d26d96");
      console.log(res.status);
    };
    fetchPost();
  }, []);
  return (
    <div className="feed">
      <Share />
      {/* {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
    </div>
  );
};

export default Feed;
