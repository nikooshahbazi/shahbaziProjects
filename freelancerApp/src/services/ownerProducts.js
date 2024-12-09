import http from "./httpService";

export async function ownerProducts() {
    try {
        const response = await http.get("/products");
        // console.log(response.data.products);
        console.log(response.data.products);
        return response.data.products;
    } catch (error) {
        console.error("To Do List not found", error);
    }
}

export async function removeProductById(id) {
    console.log("removeProductById called with ID:", id);
    try {
        const response = await http.delete(`/products/${id}`);
        console.log("Delete response:", response.data);
        return response;
    } catch (error) {
        console.error("Error in removeProductById:", error);
        throw error;
    }
}
