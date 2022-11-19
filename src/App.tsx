import { FC, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
    </>
  );
};

export default App;
