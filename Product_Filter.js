const products = [
    { name: "Laptop", price: 3500, category: "Electronics" },
    { name: "Smartphone", price: 2000, category: "Electronics" },
    { name: "Chair", price: 300, category: "Furniture" },
    { name: "Table", price: 600, category: "Furniture" },
    { name: "Headphones", price: 250, category: "Electronics" },
    { name: "Sofa", price: 1500, category: "Furniture" },
    { name: "Book", price: 50, category: "Books" },
    { name: "Notebook", price: 20, category: "Stationery" }
];

//!category: Jeśli użytkownik nie podał żadnej kategorii (np. category jest null lub undefined), zwraca wszystkie produkty.
//prodCategory === category: Jeśli użytkownik podał kategorię, zwraca tylko te produkty, które mają taką samą kategorię.
function filterProducts(products, category, minPrice, maxPrice) {
    return products
        .filter(({ category: prodCategory }) => 
            !category || prodCategory === category 
        )
        .filter(({ price }) => 
            (!minPrice || price >= minPrice) && 
            (!maxPrice || price <= maxPrice) 
        );
}


function displayProducts(products) {
    if (products.length === 0) {
        console.log("Brak produktów spełniających kryteria.");
    } else {
        products.forEach(({ name, price, category }) => {
            console.log(`Produkt: ${name}, Cena: ${price} PLN, Kategoria: ${category}`);
        });
    }
}


const category = "Electronics"; 
const minPrice = 200; 
const maxPrice = 3000; 

const filteredProducts = filterProducts(products, category, minPrice, maxPrice);
console.log("Wyniki filtrowania:");
displayProducts(filteredProducts);


