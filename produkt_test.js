const params = new URLSearchParams(window.location.search);
const productId = params.get("produktid"); // 1163
const productContainer = document.querySelector(".productContainer");

// Hvis produkt-ID ikke findes i URL'en
if (!productId) {
  productContainer.innerHTML = "<p>Produkt-ID mangler. Tjek URL'en.</p>";
} else {
  fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
    .then((response) =>
    .then((data) => {
    
      productContainer.innerHTML = `
      <section class="product_container">
          <div class="product_image">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="${data.productdisplayname}">
          </div>

          ${data.discount ? `<div class="saleLabel isOnSale">-${data.discount}%</div>` : ""}

          <div class="product_info">
              <h2 class="brandname">${data.brandname}</h2>
              <h2 class="productdisplayname">${data.productdisplayname}</h2>
              <p class="gender">Køn: ${data.gender}</p>
              <p class="category">Kategori: ${data.category}</p>
              <p class="subcategory">Underkategori: ${data.subcategory}</p>
              <p class="articletype">Type: ${data.articletype}</p>
              <p class="season">Sæson: ${data.season}</p>
              <p class="usagetype">Brug: ${data.usagetype}</p>
          </div>

          <div class="sidebar">
              <h2 class="price">${data.discount ? `<s>${data.price},-</s> ${data.price - data.discount},-` : `${data.price},-`}</h2>
              <label for="size">Vælg størrelse:</label>
              <select id="size">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
              </select>
              <button>Add to basket</button>
          </div>
      </section>
      `;
    })
    .catch((error) => {
      console.error("Fejl:", error);
      productContainer.innerHTML = "<p>Kunne ikke hente produktdata. Prøv igen senere.</p>";
    });
}