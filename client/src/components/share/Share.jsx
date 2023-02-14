import './share.css';
import {MdPermMedia, MdLocationPin} from 'react-icons/md';
import {AiFillTags} from 'react-icons/ai';
import {BsEmojiLaughingFill} from 'react-icons/bs';

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt=""/>
                <input placeholder="What's in your mind Long?" type="text" className="shareInput"/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia style={{color: "tomato"}} className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <AiFillTags style={{color: "blue"}} className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdLocationPin style={{color: "green"}} className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <BsEmojiLaughingFill style={{color: "goldenrod"}} className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share