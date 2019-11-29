import React from "react";
import { Link } from "react-router-dom";

export const ButtonBackToHome = ({ children }) => {
  return (
    <Link to="/" className="button is-info">
      {children}
    </Link>
  );
};