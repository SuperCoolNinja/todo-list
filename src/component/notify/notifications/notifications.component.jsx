import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./notifications.module.css";
import cn from "classnames";

let timeToDelete = 100 * 30;

export const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

export const Notifications = ({
  color = Color.info,
  autoClose = true,
  onDelete,
  children,
}) => {
  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(onDelete, timeToDelete);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [onDelete, autoClose]);

  return createPortal(
    <div className={cn([styles.notification, styles[color]])}>{children}</div>,
    document.getElementById("notifyContainer")
  );
};

Notification.propTypes = {
  notificationType: PropTypes.oneOf(Object.keys(Color)),
  children: PropTypes.element,
};
