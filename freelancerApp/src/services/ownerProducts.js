import http from "./httpService";

export async function ownerProducts() {
    try {
        const response = await http.get("products");
        console.log(response.data);
        return response.data.products;
    } catch (error) {
        console.error("To Do List not found", error);
    }
}

export async function removeProductById(id) {
    try {
        const response = await http.delete(`products/${id}`);
        return response;
    } catch (error) {
        console.error("Error in removeProductById:", error);
        throw error;
    }
}

export async function createNewProduct(productData) {
    try {
        const response = await http.post("products/add", productData);

        console.log(response.data, productData);
        return response.data;
    } catch (error) {
        console.error("product not added", error);
    }
}

export function toggleProductStatus({ id, data }) {
    const response = http.patch(`products/${id}`, data.data);
    console.log(response);
    return response;
}

export async function singleProduct(id) {
    try {
        const response = await http.get(`products/${id}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("The Product not found", error);
    }
}
