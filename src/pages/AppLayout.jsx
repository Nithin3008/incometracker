import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen ">
        <div className="fixed top-0 bottom-0">
          <Navigation></Navigation>
        </div>

        <div className=" flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
