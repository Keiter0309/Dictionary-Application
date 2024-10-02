import React from "react";
import "./DashboardForm-module.css";
import { sideBarData, statisticsData } from "../../../utils/Data/Data";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import {
  BookOpen,
  User,
  Menu,
  X,
  Archive,
  Circle,
  Bell,
  Moon,
  Search,
  TrendingUp,
  Clock,
  ChartLine,
} from "lucide-react";
import UserContent from "./Content/UserContent/UserContent";
import WordContent from "./Content/WordContent/WordContent";
import CategoriesContent from "./Content/CategoriesContent/CategoriesContent";
import FavoritesContent from "./Content/FavoritesContent/FavoritesContent";
import SettingContent from "./Content/SettingContent/SettingContent";

const SidebarForm: React.FC = () => {
  // Data from utils/Data.ts
  const sidebarItems = sideBarData;
  const statisticsItems = statisticsData;

  const [active, setActive] = React.useState("Dashboard");
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Click event handlers
  const handleClickSidebar = () => {
    setOpen(!open);
  };

  const handleMobileClick = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div
      id="container"
      className="flex h-screen bg-gray-100 transition-transform transform"
    >
      {/* Sidebar */}
      <aside
        id="container_sidebar"
        className={`bg-white shadow-md transition-all duration-300 ease-in-out group ${
          open ? "w-64 open" : "w-20 hover:w-64 group-hover:w-64"
        } fixed md:relative inset-0 z-50 md:z-auto ${
          mobileOpen ? "translate-x-0" : "md:translate-x-0 -translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="text-2xl font-bold text-gray-800">
            <div className="flex justify-between items-center">
              {open && <span className="mr-5">DictioHub Admin</span>}
              <Circle
                className="hidden md:flex h-4 w-4 text-blue-600 hover:text-blue-800 hover:cursor-pointer duration-200"
                onClick={handleClickSidebar}
              />
              <X
                className="h-6 w-6 text-blue-600 hover:text-blue-800 hover:cursor-pointer duration-200 md:hidden"
                onClick={handleMobileClick}
              />
            </div>
          </div>
          {/* Sidebar */}
          <nav className="mt-6">
            {sidebarItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to="#"
                  className={`flex items-center justify-between py-2 px-[0.75rem] rounded-lg ${
                    active === item.name
                      ? "bg-blue-500 text-white duration-200 ease-in-out"
                      : "text-gray-700 hover:bg-slate-100 duration-200"
                  }`}
                  onClick={() => {
                    setActive(item.name);
                    setMobileOpen(false);
                  }}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {open ? (
                      <span className="ml-2 text-sm font-semibold">
                        {item.name}
                      </span>
                    ) : (
                      <span className="ml-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.name}
                      </span>
                    )}
                  </span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 overflow-y-auto py-5 px-8 transition-all duration-300 transform ${
          !open ? "ml-20" : "ml-0"
        }`}
      >
        <div className="transition-all duration-200 bg-white py-5 rounded-md mb-8 shadow-lg">
          <div className="flex justify-between align-top items-center">
            <div>
              <Menu
                className="h-8 w-8 ms-3 text-gray-800 duration-200 hover:cursor-pointer md:hidden"
                onClick={handleMobileClick}
              />
              <h1 className="text-2xl font-bold text-gray-800 ms-3 hidden md:flex">
                {active}
              </h1>
            </div>

            <div className="mr-5 flex flex-row-reverse gap-x-5">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Avatar"
                className="h-6 w-6 rounded-full hover:cursor-pointer"
              />
              <Bell className="h-6 w-6 text-gray-800 hover:cursor-pointer" />
              <Search className="h-6 w-6 text-gray-800 hover:cursor-pointer" />
              <Moon className="h-6 w-6 text-gray-800 hover:cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        {active === "Dashboard" && (
          <div>
            <div className="grid md:grid-cols-3 gap-5 grid-cols-1 transition-all duration-200 ease-in-out">
              <div className="bg-white p-5 rounded-md shadow-lg col-span-1 md:w-full transition-transform duration-200 ease-in-out">
                <div className="text-xl font-semibold text-gray-800 mb-10">
                  <div className="flex justify-between">
                    <span className="whitespace-nowrap">Total Entries</span>
                    <BookOpen className="text-blue-500 w-8 h-8" />
                  </div>
                </div>

                <p className="text-2xl text-gray-800 font-semibold">
                  <CountUp end={10000} duration={2} />
                </p>
                <span className="text-md text-gray-800">
                  +2% from last month
                </span>
              </div>

              <div className="bg-white p-5 rounded-md shadow-lg md:col-span-2 col-span-1 transition-transform duration-200 ease-in-out">
                <div className="text-xl font-semibold text-gray-800 mb-10">
                  <div className="flex justify-between">
                    <span>Statistics</span>
                    <TrendingUp className="text-blue-500 w-8 h-8" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-5 grid-cols-2">
                  {statisticsItems.map((item) => (
                    <div
                      className="flex gap-x-2 transition-transform duration-200 ease-in-out"
                      key={item.name}
                    >
                      <div
                        className={`w-12 h-12 ${item.bgColor} rounded-full bg-opacity-30 flex justify-center items-center align-middle ${item.textColor}`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-gray-800 text-xl">
                          <CountUp end={parseInt(item.value)} duration={2} />
                        </p>
                        <span className="text-xs text-slate-400">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chart demo */}
            <div className="bg-white p-5 rounded-md shadow-lg mt-8 transition-transform duration-200 ease-in-out">
              <div className="text-xl font-semibold text-gray-800 mb-10">
                <div className="flex justify-between">
                  <span>Chart</span>
                  <ChartLine className="text-blue-500 w-8 h-8" />
                </div>
              </div>

              <div className="w-full h-64 ">demo</div>
            </div>

            <div className="bg-white p-5 rounded-md shadow-lg mt-8 transition-transform duration-200 ease-in-out">
              <div className="text-xl font-semibold text-gray-800 mb-10">
                <div className="flex justify-between">
                  <span>Recent Activities</span>
                  <Clock className="text-blue-500 w-8 h-8" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-800 font-semibold">New User</p>
                    <span className="text-slate-400">2 minutes ago</span>
                  </div>
                  <User className="text-blue-500 w-8 h-8" />
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-800 font-semibold">New Word</p>
                    <span className="text-slate-400">10 minutes ago</span>
                  </div>
                  <BookOpen className="text-blue-500 w-8 h-8" />
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-800 font-semibold">New Category</p>
                    <span className="text-slate-400">20 minutes ago</span>
                  </div>
                  <Archive className="text-blue-500 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        )}

        {active === "Users" && <UserContent />}

        {active === "Words" && <WordContent />}

        {active === "Categories" && <CategoriesContent />}

        {active === "Favorites" && <FavoritesContent />}

        {active === "Settings" && <SettingContent />}
      </main>

      {/* Overlay for mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black transition-opacity ${
          mobileOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      ></div>
    </div>
  );
};

export default SidebarForm;