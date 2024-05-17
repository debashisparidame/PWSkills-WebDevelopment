/*

    6. You are working for an e-commerce company, and you are given an object containing product-related
    information. Your task is to print the product-related information details as shown in the image below.

*/

const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "512 GB",
};

console.log("Below are the product details.");
for(let keys of Object.keys(productDetails))
    {
        console.log(`${keys}: ${productDetails[keys]}`);
    }