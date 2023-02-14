import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

function Post ({ post }) {
const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);
const [user, setUser] = useState(false);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect(() => {
  const fetchUser = async () => {
   const res = await axios.get(`users/${post.userId}`)
   setUser(res.data);
  }
  fetchUser();
},[])

const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={PF + user.profilePicture}
              alt="avatar"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="topImg" src={PF + post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} alt="" onClick={handleLike}/>
            <img className="likeIcon" src={`${PF}heart.png`} alt="" onClick={handleLike}/>
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
