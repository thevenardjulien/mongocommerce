export const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    
    const data = await response.json();

    if(response.ok && response.status === 200) {
        return data;
    }
};