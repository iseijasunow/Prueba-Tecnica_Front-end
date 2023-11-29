import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center h-80 w-full">
      <div className="container flex content-center flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="m-0 text-3xl text-center">404</h1>
        </div>
        <div className="mt-5 flex justify-center">
          <p className="m-0 text-l text-center">Página no encontrada</p>
        </div>
        <div className="mt-5 flex justify-center">
          <p className="m-0 text-l text-center">{error ? error.message : ""}</p>
        </div>
        <div className="mt-5 flex justify-center">
          <button className="button rounded">
            <i className="fa-solid fa-house"></i>
            <Link to="/">Volver al inicio</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
