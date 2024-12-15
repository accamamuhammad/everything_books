"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="flex justify-between p-7">
      <FontAwesomeIcon
        icon={faBarsStaggered}
        size="xl"
        className="cursor-pointer"
      />
      <FontAwesomeIcon icon={faUser} size="xl" className="cursor-pointer" />
    </nav>
  );
};

export default Nav;
