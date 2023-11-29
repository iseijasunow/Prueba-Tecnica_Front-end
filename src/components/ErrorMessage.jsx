/* eslint-disable react/prop-types */
const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message rounded mt-10">
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
