import { Link } from "react-router-dom"

export default function UserCard(props) {
  return (
    <div className="user-row">
      <img className="avatar" src={props.avatar_url} alt="" />
      <h3 className="login">{props.login}</h3>
      <h3 className="id">{props.id}</h3>
      <Link to={props.login} className="display-details"><p>View Details &#187;</p></Link>
    </div>
  )
}