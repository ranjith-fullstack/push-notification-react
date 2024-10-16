// Notification.js
import React from 'react';

const Notification = () => {
  const showNotification = () => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new window.Notification('My Notification', {
        body: 'This is a notification from React!',
        icon: '/path/to/icon.png',
      });
    } else if (Notification.permission !== "denied") {
      window.Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new window.Notification('My Notification', {
            body: 'This is a from React!',
            icon: '/path/to/icon.png',
          });
        }
      });
    }
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
};

export default Notification;
