import React, { useEffect } from "react";
import { logout } from "../../services/userServices";

const Logout = () => {
  useEffect(() => {
    logout();
    window.location = "/"; // redirect to homepage
  }, []);

  return null;
};

export default Logout;
