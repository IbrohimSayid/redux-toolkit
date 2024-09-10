import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmail } from "../features/appSlice";

const Footer = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(addEmail(email));
      setEmail("");
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="container mx-auto max-w-container px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          Copyright © {new Date().getFullYear()} BRIX Templates | All Rights
          Reserved
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-sm mr-2 w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-primary btn-sm" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
