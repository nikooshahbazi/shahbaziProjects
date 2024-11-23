import http from "./httpService";

export function getOTP(data) {
    //Data is object
    return http.post("/user/get-OTP", data);
}

export function checkOTP(data) {
    return http.post("/user/check-OTP", data);
}
