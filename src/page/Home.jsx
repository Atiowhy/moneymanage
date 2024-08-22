import React from "react";
import Navbar from "../components/navbar";
import Person from "../assets/person.jpeg";
import wishlist from "../assets/buying-wishlist.jpg";
import tabungan from "../assets/tabungan.jpg";
import pengeluaran from "../assets/pengeluaran.jpeg";
import pemasukan from "../assets/pemasukan.jpg";
const Home = () => {
  return (
    <div className="container">
      <div className="wrapper flex flex-col-reverse">
        <Navbar />
        <div className="header ">
          <div className="navbar-top shadow-xl mb-5 sticky top-0">
            <div className="box-top flex justify-between items-center p-2 bg-text sticky top-0">
              <div className="rigt-item">
                <p className="text-xl font-semibold italic text-secondary">
                  MoneyManage
                </p>
              </div>
              <div className="left-item w-14">
                <img src={Person} alt="person.jgp" className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="greeting px-3 mb-3">
            <p className="text-lg italic text-slate-700">
              Welcome Atio Wahyudi Saputra !! 🙌
            </p>
          </div>
          <div className="text-header px-3">
            <p className="text-2xl text-third font-semibold w-80 mb-2">
              Manage your money to get your financial freedom
            </p>
            <p className="text-md font-semibold text-slate-500">
              Let's create your own financial wealth for your bright future
            </p>
          </div>
          <div className="content mt-5 relative">
            <div className="fitur-list absolute">
              <div className="text-fitur px-3">
                <p className="border-l-4 border-primary px-5 text-2xl">
                  Fitur List
                </p>
              </div>
              <div className="box-wishlist p-5">
                <div className="vector1 w-[200px] h-[200px] bg-yellow-200 blur-2xl absolute z-[-1] -top-0 right-0 rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-red-200 blur-2xl absolute z-[-1] -top-0 rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-green-200 blur-2xl absolute top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-full"></div>
                <img
                  src={wishlist}
                  alt="wishlist.jpg"
                  className="rounded-xl shadow-lg"
                />
                <p className="flex justify-center mt-3 text-2xl font-semibold">
                  WishList
                </p>
                <div className="content-wish mt-3">
                  <p className="text-2xl text-secondary font-semibold italic mb-2">
                    "Your dream, just one more click!"
                  </p>
                  <p className="text-base text-slate-700">
                    Don't let your dreams be just dreams. Add it to your
                    wishlist and make it happen anytime!
                  </p>
                  <button className="bg-sky-500 mt-5 px-5 py-2 rounded-lg text-text">
                    Set WishList
                  </button>
                </div>
              </div>
              <div className="box-wishlist p-5">
                <div className="vector1 w-[200px] h-[200px] bg-yellow-200 blur-2xl absolute z-[-1]  right-0 rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-red-200 blur-2xl absolute z-[-1]  rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-green-200 blur-2xl absolute top-[800px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-full"></div>
                <img
                  src={tabungan}
                  alt="wishlist.jpg"
                  className="rounded-xl shadow-lg"
                />
                <p className="flex justify-center mt-3 text-2xl font-semibold">
                  Savings
                </p>
                <div className="content-wish mt-3">
                  <p className="text-2xl text-secondary font-semibold italic mb-2">
                    "Start saving, start making it happen!"
                  </p>
                  <p className="text-base text-slate-700">
                    My savings help you manage and achieve your financial goals
                    more easily.
                  </p>
                  <button className="bg-sky-500 mt-5 px-5 py-2 rounded-lg text-text">
                    Set Saving
                  </button>
                </div>
              </div>
              <div className="box-wishlist p-5">
                <div className="vector1 w-[200px] h-[200px] bg-yellow-200 blur-2xl absolute z-[-1]  right-0 rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-red-200 blur-2xl absolute z-[-1]  rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-green-200 blur-2xl absolute top-[1300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-full"></div>
                <img
                  src={pengeluaran}
                  alt="wishlist.jpg"
                  className="rounded-xl shadow-lg"
                />
                <p className="flex justify-center mt-3 text-2xl font-semibold">
                  Expense
                </p>
                <div className="content-wish mt-3">
                  <p className="text-2xl text-secondary font-semibold italic mb-2">
                    "Control Spending, Achieve Healthy Finance!"
                  </p>
                  <p className="text-base text-slate-700">
                    With My Expenses, you can monitor and manage every expense
                    to achieve financial stability.
                  </p>
                  <button className="bg-sky-500 mt-5 px-5 py-2 rounded-lg text-text">
                    Set Expense
                  </button>
                </div>
              </div>
              <div className="box-wishlist p-5 mb-[80px]">
                <div className="vector1 w-[200px] h-[200px] bg-yellow-200 blur-2xl absolute z-[-1]  right-0 rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-red-200 blur-2xl absolute z-[-1]  rounded-full"></div>
                <div className="vector1 w-[200px] h-[200px] bg-green-200 blur-2xl absolute top-[1700px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-full"></div>
                <img
                  src={pemasukan}
                  alt="wishlist.jpg"
                  className="rounded-xl shadow-lg"
                />
                <p className="flex justify-center mt-3 text-2xl font-semibold">
                  Income
                </p>
                <div className="content-wish mt-3">
                  <p className="text-2xl text-secondary font-semibold italic mb-2">
                    "Track Income, Maximize Potential!"
                  </p>
                  <p className="text-base text-slate-700">
                    With Income, all your sources of income are clearly
                    monitored for better financial planning.
                  </p>
                  <button className="bg-sky-500 mt-5 px-5 py-2 rounded-lg text-text">
                    Set Income
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
