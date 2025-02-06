// const myVar = new URLSearchParams(window.location.search).get("id");
// let productContainer = document.querySelector(".productContainer")

// fetch(`https://kea-alt-del.dk/t7/api/products/${myVar}`)
//   .then((response) => response.json())
//   .then((data) => {
//     // Skriv produktnavnet i toppen
//     if (data.productdisplayname) {
//       categorySpan.textContent = data.productdisplayname; // Indsæt produktnavnet i toppen
//     } else {
//       categorySpan.textContent = "Product Not Found"; // Hvis produktnavnet ikke findes
//     }

// fetch(`https://kea-alt-del.dk/t7/api/products/${myVar}`)
// .then(response => response.json())
// .then(data => {
//     productContainer.innerHTML = `
//     <section class="product_container">
//         <div class="product_image">
//             <img src="https://kea-alt-del.dk/t7/images/webp/640/${myVar}.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
//         </div>

//         <div class="saleLabel ${data.discount && "isOnSale"}">
//         -${data.discount}%</div>

//        <div class="product_info>
//        <p class="brandname">${data.brandname}</p>
//         <h2 class="productdisplayname">${data.productdisplayname}</h2>
        
//         <p class="gender">${data.gender}</p>
//         <p class="category">${data.category}</p>
//         <p class="subcategory">${data.subcategory}</p>
//         <p class="articletype">${data.articletype}</p>
//         <p class="season">${data.season}</p>
//         <p class="usagetype">${data.usagetype}</p>
        
//     </div>

//      <div class="sidebar">
//             <h2 class="price">DKK ${data.price},-</h2>
//              <label for="size">Choose a size</label>
//              <select id="size">
//             <option value="S">S</option>
//              <option value="M">M</option>
//              <option value="L">L</option>
//              <option value="XL">XL</option>
//              </select>
//              <button>Add to basket</button>

//         </div>
//     </section>
//     `;
// });



const myVar = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".productContainer");


const categorySpan = document.querySelector(".productdisplayname");
fetch(`https://kea-alt-del.dk/t7/api/products/${myVar}`)
  .then((response) => response.json())
  .then((data) => {
    if (categorySpan) {
      categorySpan.textContent = data.productdisplayname || "Product Not Found";
    }

    productContainer.innerHTML = `
    <section class="product_container">
        <div class="product_image">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${myVar}.webp" alt="${data.productdisplayname}">
        </div>

        <div class="saleLabel ${data.discount ? "isOnSale" : ""}">
        ${data.discount ? `-${data.discount}%` : ""}
        </div>

        <div class="product_info">
          <p class="brandname">${data.brandname}</p>
          <h2 class="productdisplayname2">${data.productdisplayname}</h2>
          <p class="gender">${data.gender}</p>
          <p class="category">${data.category}</p>
          <p class="subcategory">${data.subcategory}</p>
          <p class="articletype">${data.articletype}</p>
          <p class="season">${data.season}</p>
          <p class="usagetype">${data.usagetype}</p>
        </div>

        <div class="sidebar">
          <h2 class="price">
            ${
              data.discount
                ? `<s>${data.price},-</s> ${(data.price - (data.discount * data.price) / 100).toFixed(2)},-`
                : `${data.price},-`
            }
          </h2>
          <label for="size">Choose a size</label>
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
    console.error("Error fetching product data:", error);
    productContainer.innerHTML = `<p>Could not fetch product details. Please try again later.</p>`;
  });
