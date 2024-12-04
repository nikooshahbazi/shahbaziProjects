import http from "./httpService";

export async function ownerProducts() {
    try {
        const response = await http.get("/products");
        // console.log(response.data.products);
        console.log(response);
        return response?.data.products;
    } catch (error) {
        console.error("To Do List not found", error);
    }
}

export async function removeProductById(id) {
    try {
        const response = await http.delete(`/products/${id}`);
        if (response.status === 200 || response.status === 204) {
            console.log("product deleted successfully:", response);
            return response;
        } else console.log("product not delete");
    } catch (error) {
        console.error("Failed to delete product:", error);
        throw error;
    }
}
