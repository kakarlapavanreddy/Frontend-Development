const container = document.getElementById("product-container");
const errorMsg = document.getElementById("error");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <h4>${product.title}</h4>
        <img src="${product.image}" alt="product">
      `;

      container.appendChild(div);
    });
  })
  .catch((error) => {
    errorMsg.textContent = "Failed to load products. Please try again.";
  });
