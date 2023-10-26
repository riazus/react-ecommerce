import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const refWolvering = useRef(null);

  const showLeftGriffes = () => {
    refWolvering.current.classList.add("leftImg");
  };

  const showRightGriffes = () => {
    refWolvering.current.classList.add("rightImg");
  };

  const hideLeftGriffes = () => {
    refWolvering.current.classList.remove("leftImg");
  };

  const hideRightGriffes = () => {
    refWolvering.current.classList.remove("rightImg");
  };

  return (
    <main ref={refWolvering} className="welcomePage">
      <div className="leftBox">
        <Link
          className="btn-welcome"
          onMouseMove={showLeftGriffes}
          onMouseLeave={hideLeftGriffes}
          to={"/signup"}
        >
          Inscription
        </Link>
      </div>
      <div className="rightBox">
        <Link
          className="btn-welcome"
          onMouseMove={showRightGriffes}
          onMouseLeave={hideRightGriffes}
          to={"/login"}
        >
          Connexion
        </Link>
      </div>
    </main>
  );
}

export default Landing;
