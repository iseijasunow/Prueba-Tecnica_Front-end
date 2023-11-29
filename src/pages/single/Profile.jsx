import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const { user } = useLoaderData();

  const { public_repos, avatar_url, followers, following, login, html_url } =
    user;

  return (
    <>
      <div className="profile-background"></div>
      <div className="container px-10 profile-container">
        <div className="">
          <img src={avatar_url} alt="" className="rounded-full profile-img" />
        </div>
        <div className="text-center text-l mt-5">
          <h3 className="m-0">@{login}</h3>
        </div>
        <div className="flex gap align-center mt-5">
          <div>
            <i className="fa-solid fa-user text-unow text-m"></i>
          </div>
          <div>
            <p>Seguidores: {followers}</p>
          </div>
          <div>
            <p>Siguiendo: {following}</p>
          </div>
        </div>
        <div className="flex gap align-center">
          <div>
            <i className="fa-solid fa-code-compare text-unow text-m"></i>
          </div>
          <div>
            <p>Repositorios: {public_repos}</p>
          </div>
        </div>

        <div className="mt-5">
          <a href={html_url}>
            <i className="fa-brands fa-github profile-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
