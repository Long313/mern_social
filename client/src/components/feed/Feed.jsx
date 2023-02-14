import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { useEffect, useState } from "react";
import Post from "../post/Post";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
     const res = await axios.get("posts/timeline/63eb554851025889296cb545")
     console.log(res.data);
     setPosts(res.data);
    }
    fetchPost();
  },[])
  return (
    <div className="feed">
      <Share />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
