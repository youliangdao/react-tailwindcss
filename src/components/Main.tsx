import React from "react";

const Main = () => {
  return (
    <section className="text-gray-700" id="home">
      <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex-grow mb-5 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
            Hi!
            <br />
            I'm youliangdao!
            <br />
            Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
            quae excepturi reiciendis doloribus, sapiente molestias, laboriosam
            quibusdam impedit consequuntur officia! Totam esse soluta porro
            dolor, eius velit iure enim?
          </p>
          <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
            Contact
          </button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/icon.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Main;
