import { useMutation } from "@tanstack/react-query";
import { Input } from "postcss";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function CheckOTPForm({ phoneNumber }) {
    const [otp, setOTP] = useState("");
    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkOTP,
    });

    const checkOtpHandler = async (e) => {
        e.preventDefault();

        try {
            const { message } = await mutateAsync({
                phoneNumber,
                otp,
            });
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <div>
            <form className="space-y-10" onSubmit={checkOtpHandler}>
                <p className="text-secondary-800 font-bold">
                    کد تایید را وارد کنید
                </p>
                <OTPInput
                    value={otp}
                    onChange={setOTP}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input type="number" {...props} />}
                    containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                    inputStyle={{
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius: "0.5rem",
                    }}
                />
                <div>
                    {isPending ? (
                        <Loading />
                    ) : (
                        <button className="btn btn--primary w-full">
                            تایید
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default CheckOTPForm;
