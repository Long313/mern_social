import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";

const Rightbar = ({ profile }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
          {Users.map((user,index) => (
            <Online key={index} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfor">
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">City:</span>
            <span className="rightbarInforValue">New York</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">From:</span>
            <span className="rightbarInforValue">Madrid</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforKey">Relationship:</span>
            <span className="rightbarInforValue">Single</span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={`${PF}person/1.jpeg`}
                alt=""
              />
              <span className="rigthbarFollowingName">John Carter</span>
            </div>

            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={`${PF}person/2.jpeg`}
                alt=""
              />
              <span className="rigthbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={`${PF}person/3.jpeg`}
                alt=""
              />
              <span className="rigthbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={`${PF}person/4.jpeg`}
                alt=""
              />
              <span className="rigthbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={`${PF}person/5.jpeg`}
                alt=""
              />
              <span className="rigthbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src={`${PF}person/6.jpeg`}
                alt=""
              />
              <span className="rigthbarFollowingName">John Carter</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
