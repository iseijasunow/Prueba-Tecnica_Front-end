import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-center">
        <nav className="container">
          <div>
            <Link to="/">
              <h1 className="text-unow">EvansDev ;)</h1>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
