import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./notifications.module.css";
import cn from "classnames";

let timeToClose = 700;

export const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

export const Notifications = ({
  color = Color.info,
  autoClose = false,
  children,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), timeToClose);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose]);

  return createPortal(
    <div className={cn([styles.container, { [styles.shrink]: isClosing }])}>
      <div
        className={cn([
          styles.notification,
          styles[color],
          { [styles.in]: !isClosing },
          { [styles.out]: isClosing },
        ])}
      >
        {children}
      </div>
    </div>,
    document.getElementById("notifyContainer")
  );
};

Notification.propTypes = {
  notificationType: PropTypes.oneOf(Object.keys(Color)),
  children: PropTypes.element,
};
