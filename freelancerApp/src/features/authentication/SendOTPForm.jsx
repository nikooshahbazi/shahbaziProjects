// import { useState } from "react";
// import TextFied from "../../ui/TextFied";
// import { useMutation } from "@tanstack/react-query";
// import { getOTP } from "../../services/authService";
// import toast from "react-hot-toast";
// import Loading from "../../ui/Loading";

// function SendOTPForm({ setStep, phoneNumber, onChange }) {
//     const { isPending, error, data, mutateAsync } = useMutation({
//         mutationFn: getOTP,
//     });
//     const sendOTPHandler = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await mutateAsync({ phoneNumber });
//             console.log(data);
//             setStep(2);
//             toast.success(data.message);
//         } catch (error) {
//             toast.error(error?.response?.data?.message);
//         }
//     };
//     return (
//         <div>
//             <form className="space-y-8" onSubmit={sendOTPHandler}>
//                 <TextFied
//                     label="شماره موبایل"
//                     name={phoneNumber}
//                     value={phoneNumber}
//                     onChange={onChange}
//                 />
//                 <div>
//                     {isPending ? (
//                         <Loading />
//                     ) : (
//                         <button
//                             type="submit"
//                             className="px-4 py-1 font-bold bg-primary-900 
//                      text-white w-full rounded-xl 
//                     transition-all duration-300 hover:bg-primary-800 
//                     shadow-lg shadow-primary-300"
//                         >
//                             ارسال کد تایید
//                         </button>
//                     )}
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default SendOTPForm;
