import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { useEffect, useState } from "react";
import Post from "../post/Post";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("posts/timeline/63eb5a897020965c2b41af1f");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPost();
  }, [username]);
  return (
    <div className="feed">
      <Share/>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
