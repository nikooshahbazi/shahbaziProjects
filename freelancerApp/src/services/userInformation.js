import http from "./httpService";

export async function getUser() {
    try {
        const response = await http.get("/users");
        // console.log(response);
        return response.data.users;
    } catch (error) {
        return console.error("can not get data", error);
    }
}
