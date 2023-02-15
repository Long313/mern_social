import Share from "../share/Share";
import axios from "axios";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`posts/timeline/${user._id}`);
      console.log(res.data);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
       {(username || username === user.username) &&  <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
