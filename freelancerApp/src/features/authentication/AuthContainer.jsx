// import { useState } from "react";
// import SendOTPForm from "./SendOTPForm";
// import CheckOTPForm from "./CheckOTPForm";

// function AuthContainer() {
//     const [step, setStep] = useState(2);
//     const [phoneNumber, setPhoneNumber] = useState("");

//     // console.log("step: " + step);

//     const renderStep = () => {
//         switch (step) {
//             case 1:
//                 return (
//                     <SendOTPForm
//                         setStep={setStep}
//                         phoneNumber={phoneNumber}
//                         onchange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                 );
//             case 2:
//                 return <CheckOTPForm phoneNumber={phoneNumber} />;
//             default:
//                 null;
//         }
//     };

//     return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
// }

// export default AuthContainer;
