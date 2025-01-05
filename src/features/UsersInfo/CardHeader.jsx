import React from "react";
import useMoveBack from "../Hooks/useMoveBack";
import { HiArrowLeft } from "react-icons/hi";

function CardHeader({ user }) {
    console.log(user);
    const moveBack = useMoveBack();
    return (
        <div className="flex items-center gap-x-4 mb-8">
            <button onClick={moveBack}>
                <HiArrowLeft className="w-5 h-5 text-secondary-500" />
            </button>
            <h1 className="text-xl font-black text-secondary-700">
                {user.firstName} {user.lastName}
            </h1>
        </div>
    );
}

export default CardHeader;
