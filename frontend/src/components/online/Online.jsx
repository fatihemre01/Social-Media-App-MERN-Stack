import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightbarFriendItem">
        <div className="rightbarProfileImgContainer">
        <img src={user.profilePic} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnlineBadge"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
