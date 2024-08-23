import React from "react";

const NavbarSave = () => {
  return (
    <div className="container mt-5">
      <ul className="flex gap-2">
        <li className="bg-yellow-200 px-3 w-1/3 rounded-md shadow-lg py-2">
          <a href="#" className="text-xl">
            Weekly
          </a>
        </li>
        <li className=" px-3 py-2 w-1/3">
          <a href="#">Monthly</a>
        </li>
        <li className=" px-3 py-2 w-1/3">
          <a href="#">Annual</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSave;
