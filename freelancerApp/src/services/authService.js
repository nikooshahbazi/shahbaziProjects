import http from "./httpService";

export function getOTP(data) {
    //Data is object
    return http.post("/user/get-OTP", data).then(({ data }) => data.data);
}

export function checkOTP(data) {
    return http.post("/user/check-OTP", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
    return http.post("/complete-profile", data).then(({ data }) => data.data);
}

// export function getUser() {
//     return http.get("/user/profile").then(({ data }) => data.data);
// }

// export async function getUser() {
//     // const url = "https://jsonplaceholder.typicode.com";

//     try {
//         const response = await http.get("/users");
//         return response.data;
//     } catch (error) {
//         return console.error("can not get data", error);
//     }

    // try {
    //     const response = await fetch(url + "/users");
    //     if (!response.ok) {
    //         throw new Error("Faild to fetch user data");
    //     }
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.error("Error in get user", error);
    //     return null;
    // }
// }
