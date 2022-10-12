import "./topbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FatihSocial</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <AiOutlineSearch className="searchIcon" />
          <input placeholder="Search for anything..." className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill className="rightIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BiMessageDetail className="rightIcon" />
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconItem">
            <IoMdNotifications className="rightIcon" />
            <span className="topbarIconBadge">9</span>
          </div>
        </div>
        <img src="/assets/person/7.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
