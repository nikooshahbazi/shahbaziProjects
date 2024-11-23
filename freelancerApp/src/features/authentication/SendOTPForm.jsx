import { useState } from "react";
import TextFied from "../../ui/TextFied";

function SendOTPForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const sendOTPHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <form className="space-y-8" onSubmit={sendOTPHandler}>
                <TextFied
                    label="شماره موبایل"
                    name={phoneNumber}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-1 font-bold bg-primary-900 
                 text-white w-full rounded-xl 
                    transition-all duration-300 hover:bg-primary-800 
                    shadow-lg shadow-primary-300"
                >
                    ارسال کد تایید
                </button>
            </form>
        </div>
    );
}

export default SendOTPForm;
