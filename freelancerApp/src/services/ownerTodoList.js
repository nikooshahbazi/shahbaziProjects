import http from "./httpService";

export async function ownerToDoList() {
    try {
        const response = await http.get("/todos");
        return response.data;
    } catch (error) {
        console.error("To Do List not found", error);
    }
}
