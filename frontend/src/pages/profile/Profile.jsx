import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchInfo = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUserInfo(res.data);
    };
    fetchInfo();
  }, [username]);

  const PF = "http://localhost:3000/assets/";

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  (userInfo.coverPicture && PF + userInfo.coverPicture) ||
                  PF + "/person/noCover.png"
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  (userInfo.profilePicture && PF + userInfo.profilePicture) ||
                  PF + "/person/noAvatar.png"
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{userInfo.username}</h4>
              <span className="profileInfoDesc">{userInfo.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={userInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
