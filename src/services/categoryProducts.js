import http from "./httpService";

export async function categoryProducts() {
    try {
        const response = await http.get("products/categories");
        return response.data;
    } catch (error) {
        console.error("Category is not found. Error:", error.message);
    }
}
