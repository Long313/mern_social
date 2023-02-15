import "./share.css";
import { MdPermMedia, MdLocationPin, MdOutlineCancel } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      // img: file.name
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to="/profile/user1">
            <img
              className="shareProfileImg"
              src={
                user.profilePicture
                  ? PF + "/"+user.profilePicture
                  : PF + "/person/novAvatar.png"
              }
              alt=""
            />
          </Link>
          <input
            placeholder={`What's in your mind ${user.username} ?`}
            type="text"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src="shareImg" src={URL.createObjectURL(file)} alt="" />
            <MdOutlineCancel className="shareCancelImg" onClick={()=> setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MdPermMedia style={{ color: "tomato" }} className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <div className="shareOption">
              <AiFillTags style={{ color: "blue" }} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdLocationPin style={{ color: "green" }} className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsEmojiLaughingFill
                style={{ color: "goldenrod" }}
                className="shareIcon"
              />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
