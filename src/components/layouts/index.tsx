import React from "react";
import { Header } from "./header";
import GridDot from "../gird-dots";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto bg-[#fbfbfb]">
      {/* <div className=""> */}
      <div className="absolute top-0 left-0 z-0 w-screen h-screen ">
        <GridDot />
      </div>
      {/* </div> */}
      <Header />
      <div className="container z-10 items-center flex-1 h-full mx-auto text-center ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
