import { useState } from "react";
import TextFied from "../../ui/TextFied";
import RadioBtn from "../../ui/RadioBtn";
import { useMutation } from "@tanstack/react-query";
import CompleteProfile from "../../pages/CompleteProfile";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const { mutateAsync, isPending } = useMutation({
        mutationFn: CompleteProfile,
    });
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({
                name,
                email,
                role,
            });
            // console.log(message);
            toast.success(message);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <div className="flex justify-center pt-10">
            <div className="w-full sm:max-w-sm">
                <form className="space-y-8" onSubmit={handelSubmit}>
                    <TextFied
                        label="نام و نام خانوادگی"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <TextFied
                        label="ایمیل"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <div className="flex items-center justify-center gap-x-8">
                        <RadioBtn
                            label="کارفرما"
                            value="owner"
                            onChange={(e) => setRole(e.target.value)}
                            id="owner"
                            name="role"
                            checked={role === "owner"}
                        />
                        <div className="flex items-center gap-x-2 text-secondary-600">
                            <RadioBtn
                                label="فریلنسر"
                                value="freelancer"
                                onChange={(e) => setRole(e.target.value)}
                                id="freelancer"
                                name="role"
                                checked={role === "freelancer"}
                            />
                        </div>
                    </div>

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
        </div>
    );
}

export default CompleteProfileForm;
