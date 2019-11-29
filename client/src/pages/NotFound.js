import React from "react";
import { ButtonBackToHome } from "../elements/ButtonBackToHome";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h3 className="not-found__title">404 Error</h3>
      <h4 className="not-found__subtitle">Not Found!</h4>
      <ButtonBackToHome>Back to Home page</ButtonBackToHome>
    </div>
  );
};
