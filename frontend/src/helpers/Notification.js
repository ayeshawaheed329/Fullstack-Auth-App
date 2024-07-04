/*
    Notifications Helper
*/

import React from "react";

// Antd
import { notification } from "antd";


// Constants
import { NOTIFICATION_DURATION } from "constants/Common";

// Success
export function successNotification(message, duration = NOTIFICATION_DURATION) {
    const key = "success";
    notification.open({
      key,
      duration,
      description:
        typeof message === "string" ? (
          message || "Notification"
        ) : (
          <div>
            {message?.map((val, index) => {
              return <p key={index}>{val}</p>;
            })}
          </div>
        ),
      className: "notification-success",
    });
  }
  
  // Error
  export function errorNotification(message, duration = NOTIFICATION_DURATION) {
    const key = "error";
    notification.open({
      key,
      duration,
      description:
        typeof message === "string" ? (
          message || "Notification"
        ) : (
          <div>
            {message?.map((val, index) => {
              return <p key={index}>{val}</p>;
            })}
          </div>
        ),
      className: "notification-error",
    });
  }
  