import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function SideBar() {
    return (
        <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
            <ul className="flex flex-col gap-y-4 ">
                <li>
                    <NavlinkCustom to="/owner/dashboard">
                        <HiHome />
                        <span>خانه </span>
                    </NavlinkCustom>
                    <NavlinkCustom to="/owner/Products">
                        <HiCollection />
                        <span>محصولات</span>
                    </NavlinkCustom>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;

function NavlinkCustom({ to, children }) {
    const color =
        "mt-2.5 flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 py-2 px-2 rounded-lg transition-all duration-300";
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? `bg-primary-100/50 text-primary-900 ${color}`
                    : `text-secondary-600 ${color}`
            }
        >
            {children}
        </NavLink>
    );
}
