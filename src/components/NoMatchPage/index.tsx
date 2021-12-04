import React from "react";
import { Link } from "react-router-dom";
import { INDEX } from "../../locations";

function NoMatchPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link to={INDEX}>Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatchPage;
