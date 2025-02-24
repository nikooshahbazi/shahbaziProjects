import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
    return (
        <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
            {/* <div className="bg-secondary-0 py-4 px-8">app header</div>
            <div className="bg-secondary-0 row-start-1 row-span-2">
                app sidebar
            </div> */}
            <Header />
            <SideBar />
            <div className="bg-secondary-100 p-8 overflow-y-auto">
                <div className="mx-auto max-w-full  flex flex-col gap-y-12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AppLayout;
