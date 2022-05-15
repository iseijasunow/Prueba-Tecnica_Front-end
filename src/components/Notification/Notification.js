import { createContext, useState, useContext } from "react";

const Notification = ({ message = "Test", severity }) => {
  // Styles
  const notificationStyles = {
    position: "absolute",
    bottom: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: "auto",
    backgroundColor: severity === "success" ? "#4CAF50" : "#F44336",
    padding: "0.6rem 1.2rem",
    borderRadius: "0.5rem",
    border: "1px solid black",
    color: "white",
    fontSize: "1rem",
    fontWeight: "500",
    letterSpacing: "0.1rem",
  };

  if (message === "") {
    return null;
  }

  return <div style={notificationStyles}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationServicesProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const setNotification = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification message={message} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationServices = () => {
  return useContext(NotificationContext);
};
