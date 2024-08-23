import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import TopNavbar from "../../components/navbarTop";
import NavbarSave from "../../components/navbarSaving";
import Save1 from "../../assets/save1.png";
import Save2 from "../../assets/save2.png";
import Save3 from "../../assets/save3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const Savings = () => {
  const images = [Save1, Save2, Save3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [images.length]);
  return (
    <div className="Savings">
      <div className="content flex flex-col-reverse">
        <Navbar />
        <div className="imgBg relative">
          <TopNavbar />
          <div className="content-saving">
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full flex-shrink-0"
                    alt={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="saving-table  p-3">
              <div className="text-title">
                <p className="font-semibold text-2xl italic">Your Saving</p>
              </div>
              <div className="action-button relative">
                <NavbarSave />
                <div className="add-action mt-5 flex justify-between group">
                  <button className="bg-sky-400 px-4 py-2 rounded-lg group-hover:text-text duration-300 group-hover:bg-sky-500">
                    Set Savings
                  </button>
                  <div className="totalSaving flex gap-3 items-center">
                    <p>Total</p>
                    <p className="text-2xl text-blue-500">Rp.800.000</p>
                  </div>
                </div>
              </div>
              <div className="table-content mt-5">
                <div className="table1 shadow-lg rounded-lg">
                  <div className="date flex justify-between items-center bg-green-200 p-5 rounded-t-lg ">
                    <p className="text-lg">Sun, 12 August 24</p>
                    <p className="total-all text-2xl text-blue-500">
                      Rp.400.000
                    </p>
                  </div>
                  <div className="box-table-saving mt-5 flex justify-between items-center px-3">
                    <div className="box-table-content flex gap-5 items-center">
                      <div className="category">
                        <p className="text-lg">Uang Jajan</p>
                      </div>
                      <div className="note">
                        <p className="text-base">Freelance</p>
                        <p className="text-sm">Bank</p>
                      </div>
                    </div>
                    <div className="total">
                      <p className="text-blue-500">Rp.200.000</p>
                      <a href="#" className="text-sm text-slate-500 italic">
                        View Detail
                      </a>
                    </div>
                  </div>
                  <div className="box-table-saving mt-5 flex justify-between items-center px-3">
                    <div className="box-table-content flex gap-5 items-center">
                      <div className="category">
                        <p className="text-lg">Uang Jajan</p>
                      </div>
                      <div className="note">
                        <p className="text-base">Bonus</p>
                        <p className="text-sm">Tunai</p>
                      </div>
                    </div>
                    <div className="total">
                      <p className="text-blue-500">Rp.200.000</p>
                      <a href="#" className="text-sm text-slate-500 italic">
                        View Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-content mt-5 mb-20">
                <div className="table1 shadow-lg rounded-lg">
                  <div className="date flex justify-between items-center bg-green-200 p-5 rounded-t-lg ">
                    <p className="text-lg">Mon, 13 August 24</p>
                    <p className="total-all text-2xl text-blue-500">
                      Rp.400.000
                    </p>
                  </div>
                  <div className="box-table-saving mt-5 flex justify-between items-center px-3">
                    <div className="box-table-content flex gap-5 items-center">
                      <div className="category">
                        <p className="text-lg">Uang Jajan</p>
                      </div>
                      <div className="note">
                        <p className="text-base">Ngegrab</p>
                        <p className="text-sm">Tunai</p>
                      </div>
                    </div>
                    <div className="total">
                      <p className="text-blue-500">Rp.200.000</p>
                      <a href="#" className="text-sm text-slate-500 italic">
                        View Detail
                      </a>
                    </div>
                  </div>
                  <div className="box-table-saving mt-5 flex justify-between items-center px-3">
                    <div className="box-table-content flex gap-5 items-center">
                      <div className="category">
                        <p className="text-lg">Uang Jajan</p>
                      </div>
                      <div className="note">
                        <p className="text-base">Ngontent</p>
                        <p className="text-sm">Tunai</p>
                      </div>
                    </div>
                    <div className="total">
                      <p className="text-blue-500">Rp.200.000</p>
                      <a href="#" className="text-sm text-slate-500 italic">
                        View Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
