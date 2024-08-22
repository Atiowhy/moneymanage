import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPiggyBank,
  faCashRegister,
  faMoneyBill,
  faClipboardList,
  faWrench,
  faImage,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Person from "../assets/person.jpeg";

const Navbar = () => {
  return (
    <div className="container min-h-[100vh] relative">
      {/* <div className="navbar-top shadow-lg">
        <div className="box-top flex justify-between items-center p-2 bg-text sticky top-0">
          <div className="rigt-item">
            <p className="text-xl font-semibold italic">MoneyManage</p>
          </div>
          <div className="left-item w-14">
            <img src={Person} alt="person.jgp" className="rounded-full" />
          </div>
        </div>
      </div> */}
      <div className="navbar-bottom  bg-secondary w-[100%] h-[70px] flex items-center justify-center gap-5 bottom-0 fixed z-[9999]">
        <div className="box-icon1 flex flex-col items-center justify-cente group">
          <FontAwesomeIcon
            icon={faPiggyBank}
            size="2xl"
            className="group-hover:text-text duration-300"
          />
          <a href="#" className="text-text text-sm ">
            Tabungan
          </a>
        </div>
        <div className="box-icon1 flex flex-col items-center justify-center group">
          <FontAwesomeIcon
            icon={faCashRegister}
            size="2xl"
            className="group-hover:text-text duration-300"
          />
          <a href="#" className="text-text text-sm">
            Pemasukan
          </a>
        </div>
        <div className="box-icon1 flex flex-col items-center justify-center group">
          <FontAwesomeIcon
            icon={faMoneyBill}
            size="2xl"
            className="group-hover:text-text duration-300"
          />
          <a href="#" className="text-text text-sm">
            Pengeluaran
          </a>
        </div>
        <div className="box-icon1 flex flex-col items-center justify-center group">
          <FontAwesomeIcon
            icon={faClipboardList}
            size="2xl"
            className="group-hover:text-text duration-300"
          />
          <a href="#" className="text-text text-sm">
            Wishlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
