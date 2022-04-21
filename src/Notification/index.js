import { notification } from "antd";

export const openNotification = (message, description, type) => {
  const key = `open${Date.now()}`;
  const close = () => {
    notification.close(key);
  };
  notification.open({
    type,
    message,
    description,
    onClick: close,
    key,
    duration: 8,
  });
};
