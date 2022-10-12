import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sidebarListItem">
        <img src={user.profilePic} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}