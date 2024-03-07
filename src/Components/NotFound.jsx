import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const handleRender = () => {
      const path = window.location.pathname;
      window.location.href = `${window.location.origin}${path}`;
    };

    handleRender();
  }, []);

  return null;
};

export default NotFound;
