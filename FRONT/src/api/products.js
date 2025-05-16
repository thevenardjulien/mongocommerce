export const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    
    const data = await response.json();

    if(response.ok && response.status === 200) {
        return data;
    }
};

export const fetchProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await response.json();

    console.log({
        response,
        data
    })

    if(response.ok && response.status === 200) {
        return data;
    }
};

export const fetchCreateProduct = async (formData) => {
    const response = await fetch("http://localhost:3000/api/products/create", {
        method: "POST",
        body: formData,
        credentials: "include"
    });
    return response;
};
