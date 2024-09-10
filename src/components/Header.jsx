import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleMode,
  setLanguage,
  deleteEmail,
  editEmail,
} from "../features/appSlice";
import {
  MdOutlineDarkMode,
  MdEdit,
  MdDelete,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const dispatch = useDispatch();
  const { mode, language, emails } = useSelector((state) => state.app);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleEdit = (email) => {
    const newEmail = prompt("Yangi email kiriting:", email);
    if (newEmail && newEmail !== email) {
      dispatch(editEmail({ oldEmail: email, newEmail }));
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto max-w-container px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Logo
        </h1>
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            className="select select-bordered select-sm"
          >
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
          <button
            onClick={() => dispatch(toggleMode())}
            className="btn btn-ghost btn-sm"
          >
            {mode === "light" ? <MdOutlineDarkMode  className="text-2xl"/> : <CiLight className="text-2xl"/>}
          </button>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn btn-primary btn-sm"
            >
              <MdOutlineAlternateEmail /> {emails.length}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10">
                {emails.map((email, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex justify-between items-center"
                  >
                    <span>{email}</span>
                    <div className="flex items-center gap-2 p-2">
                      <button
                        onClick={() => handleEdit(email)}
                        className="bg-blue-500 text-white p-2 rounded-md"
                      >
                        <MdEdit />
                      </button>
                      <button
                        onClick={() => dispatch(deleteEmail(email))}
                        className="bg-red-500 text-white p-2 rounded-md"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
