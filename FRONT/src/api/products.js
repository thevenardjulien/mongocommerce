export const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    if(response.ok && response.status === 200) {
        const data = await response.json();
        return data;
    }
};