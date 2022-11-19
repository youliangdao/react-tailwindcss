import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">youliangdao</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
            Home
          </a>
          <a href="#/About" className="mr-5 hover:text-blue-400 duration-300">
            About
          </a>
          <a href="#/Skills" className="mr-5 hover:text-blue-400 duration-300">
            Skills
          </a>
          <a href="#Blog" className="hover:text-blue-400 duration-300">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
