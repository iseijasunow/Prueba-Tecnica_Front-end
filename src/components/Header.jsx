import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-center">
        <nav className="container">
          <div>
            <Link to="/">
              <img src="/img/unowLogo.svg" alt="" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
