import { FC, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Skill from "./components/Skill";

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skill />
    </>
  );
};

export default App;
