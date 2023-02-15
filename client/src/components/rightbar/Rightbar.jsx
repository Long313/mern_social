import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  const { user: currentUser, dispatch } = useContext(AuthContext);
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id));
  }, [currentUser, user.id]);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  const handleCLick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthDayText">
            <b>Pola Foster</b> and <b>3 other</b> friends have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}ad.png`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user, index) => (
            <Online key={index} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleCLick}>
            {followed ? (
              <>
                <span>"Unfollow"</span>
                <GrFormSubtract />
              </>
            ) : (
              <>
                <span>"Follow"</span>
                <IoMdAdd />
              </>
            )}
          </button>
        )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfor">
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">City:</span>
            <span className="rightbarInforValue">{user.city}</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">From:</span>
            <span className="rightbarInforValue">{user.from}</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">Relationship:</span>
            <span className="rightbarInforValue">
              {user.relationship === 1 ? "Single" : "Married"}
            </span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            {friends.map((friend) => (
              <Link to={`/profile/${friend.username}`}>
                <div className="rightbarFollowing" key={friend._id}>
                  <img
                    className="rightbarFollowingImg"
                    src={
                      friend.profilePicture
                        ? PF + friend.profilePicture
                        : PF + "/person/noAvatar.png"
                    }
                    alt=""
                  />
                  <span className="rigthbarFollowingName">
                    {friend.username}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
