import React from "react";
import Person from "../assets/person.jpeg";

const TopNavbar = () => {
  return (
    <div className="navbar-top shadow-xl sticky top-0 z-[9999]">
      <div className="box-top flex justify-between items-center p-2 bg-text sticky top-0">
        <div className="rigt-item">
          <a href="/" className="text-xl font-semibold italic text-secondary">
            MoneyManage
          </a>
        </div>
        <div className="left-item w-14">
          <img src={Person} alt="person.jgp" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
