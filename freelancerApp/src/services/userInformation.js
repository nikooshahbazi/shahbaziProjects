import http from "./httpService";

export async function getUser() {
    try {
        const response = await http.get("/users");
        return response.data;
    } catch (error) {
        return console.error("can not get data", error);
    }
}
