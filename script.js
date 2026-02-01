document.addEventListener("DOMContentLoaded", () => {

  const products = [
    { name: "Laptop", price: 999, rating: 4, category: "Electronics" },
    { name: "Smartphone", price: 699, rating: 5, category: "Electronics" },
    { name: "Tablet", price: 399, rating: 3, category: "Electronics" },
    { name: "Headphones", price: 199, rating: 4, category: "Electronics" },
    { name: "Smartwatch", price: 299, rating: 2, category: "Electronics" },
    { name: "T-Shirt", price: 29, rating: 4, category: "Clothing" },
    { name: "Jeans", price: 59, rating: 5, category: "Clothing" },
    { name: "Dress", price: 79, rating: 3, category: "Clothing" },
    { name: "Sneakers", price: 89, rating: 4, category: "Clothing" },
    { name: "Hat", price: 19, rating: 2, category: "Clothing" },
    { name: "Fiction Novel", price: 15, rating: 5, category: "Books" },
    { name: "Biography", price: 25, rating: 4, category: "Books" },
    { name: "Cookbook", price: 20, rating: 3, category: "Books" },
    { name: "Textbook", price: 50, rating: 4, category: "Books" },
    { name: "Comic Book", price: 10, rating: 2, category: "Books" },
    { name: "Chair", price: 149, rating: 4, category: "Home & Garden" },
    { name: "Plant Pot", price: 39, rating: 5, category: "Home & Garden" },
    { name: "Garden Hose", price: 29, rating: 3, category: "Home & Garden" },
    { name: "Lamp", price: 79, rating: 4, category: "Home & Garden" },
    { name: "Tool Set", price: 99, rating: 2, category: "Home & Garden" }
  ];

  const productsContainer = document.getElementById("products");
  const sortSelect = document.getElementById("sort");
  const filterSelect = document.getElementById("filter");

  function renderProducts(list) {
    productsContainer.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        <p class="rating">${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</p>
        <p>Category: ${p.category}</p>
      `;
      productsContainer.appendChild(div);
    });
  }

  function sortProducts(list, sortBy) {
    const sorted = [...list];
    switch (sortBy) {
      case "price-asc": return sorted.sort((a,b)=>a.price-b.price);
      case "price-desc": return sorted.sort((a,b)=>b.price-a.price);
      case "name-asc": return sorted.sort((a,b)=>a.name.localeCompare(b.name));
      case "name-desc": return sorted.sort((a,b)=>b.name.localeCompare(a.name));
      case "rating-asc": return sorted.sort((a,b)=>a.rating-b.rating);
      case "rating-desc": return sorted.sort((a,b)=>b.rating-a.rating);
      default: return sorted;
    }
  }

  function filterProducts(list, category) {
    if (category === "all") return list;
    return list.filter(p => p.category === category);
  }

  function updateDisplay() {
    let result = filterProducts(products, filterSelect.value);
    result = sortProducts(result, sortSelect.value);
    renderProducts(result);
  }

  sortSelect.addEventListener("change", updateDisplay);
  filterSelect.addEventListener("change", updateDisplay);

  updateDisplay();
});
