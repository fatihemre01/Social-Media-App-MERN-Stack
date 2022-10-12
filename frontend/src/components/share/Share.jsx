import "./share.css"
import {BiPhotoAlbum} from "react-icons/bi"
import {AiFillTag} from "react-icons/ai"
import {HiLocationMarker} from "react-icons/hi"
import {BsFillEmojiSmileFill} from "react-icons/bs"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/7.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="What's in your mind?" className="shareInput" />
            </div>
            <hr className="shareHr" />

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <BiPhotoAlbum className="shareOptionIcon"/>
                        <span className="shareOptionText">Photo</span>
                    </div>
                    <div className="shareOption">
                        <AiFillTag className="shareOptionIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <HiLocationMarker className="shareOptionIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <BsFillEmojiSmileFill className="shareOptionIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
