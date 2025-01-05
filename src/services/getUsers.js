import http from "./httpService";

export async function getUsersInfo() {
    try {
        // console.log("object");
        const response = await http.get("users");
        console.log(response.data.users);
        return response.data.users;
    } catch (error) {
        console.error("users not found", error);
    }
}

export async function getSingleUserInfo(id) {
    try {
        const response = await http.get(`users/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("the User not found", error);
    }
}
