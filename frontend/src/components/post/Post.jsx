import "./post.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(0);
  const [user, setUser] = useState({});
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
      console.log(post.likes.length);
    };
    fetchUser();
  }, []);

  const PF = "http://localhost:3000/assets/";

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  (user.profilePicture && PF + user.profilePicture) ||
                  PF + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <AiOutlineMenu className="menuIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postDesc">{post.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="likeIcon"
              onClick={handleLike}
            />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postComment">{post.comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
