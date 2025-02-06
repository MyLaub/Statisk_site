// const productID = 15530;
// const listContainer = document.querySelector("main");

// fetch (`https://kea-alt-del.dk/t7/api/products/`)
// .then((response) => response.json())
// .then((data) => showList(data));

// const listContainer = document.querySelector("main");
// const mycategory = (urlParams = new URLSearchParams(window.location.search).get(
//   "category"
// ));

// fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

// function showList (products) {
// console.log(products);
// let markup = "";
// products.map((product) => {markup +=
//     `<article class = "smallProduct ${product.discont && "onSale"} ${product.soldout && "soldOut"}">
//     <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
//     <h3>${product.productdisplayname}</h3>
//     <p>${product.brandname}</p>
//     <p>${product.subcategory}</p>
//     <p>${product.price},-</p>
//     <p class="onSale">${product.discount},-</p>

//     <a href="produkt.html">Read More</a>
// </article>`;
// })
// .join("");
// console.log(markup);
// listContainer.innerHTML = markup;
// }
// document.querySelector(".productList").innerHTML = mycategory;


// const listContainer = document.querySelector("main");
// const mycategory = (urlParams = new URLSearchParams(window.location.search).get(
//   "category"
// ));

// fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

// function showList (products) {
// console.log(products);
// let markup = "";
// products.map((product) => {markup +=
//     `<article class = "smallProduct ${product.discont && "onSale"} ${product.soldout && "soldOut"}">
//     <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
//     <h3>${product.productdisplayname}</h3>
//     <p>${product.brandname}</p>
//     <p>${product.subcategory}</p>
//     <p>${product.price},-</p>
//     <p class="onSale">${product.discount},-</p>

//     <a href="produkt.html">Read More</a>
// </article>`;
// })
// .join("");
// console.log(markup);
// listContainer.innerHTML = markup;
// }
// document.querySelector(".productList").innerHTML = mycategory;


// const listContainer = document.querySelector("main");
// const mycategory = new URLSearchParams(window.location.search).get("category");

// const categorySpan = document.querySelector(".categories");
// if (mycategory) {
//   categorySpan.textContent = mycategory;
// } else {
//   categorySpan.textContent = "Category Not Found";
// }

// fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
//   .then((response) => response.json())
//   .then((data) => showList(data));

// function showList(products) {
//   console.log(products);
//   let markup = "";

//   products.forEach((product) => {
//     markup += `
//       <article class="smallProduct ${product.discount ? "onSale" : ""} ${product.soldout ? "soldOut" : ""}">
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
//         <h3>${product.productdisplayname}</h3>
//         <p>${product.brandname}</p>
//         <p>${product.subcategory}</p>
//         <p class="price">${product.discount ? `<s>${product.price},-</s> ${product.price - product.discount*product.price/100},-` : `${product.price},-`}</p>
//         ${product.discount ? `<div class="discount">${product.discount}%</div>` : ""}
//         <a href="produkt.html?id=${product.id}">Read More</a>
//       </article>`;
//   });

//   listContainer.innerHTML = markup;
// }


// JAVA MED A-TAG RUNDT OM HELE ARTICLE


const listContainer = document.querySelector("main");
const mycategory = new URLSearchParams(window.location.search).get("category");

const categorySpan = document.querySelector(".categories");
if (mycategory) {
  categorySpan.textContent = mycategory;
} else {
  categorySpan.textContent = "Category Not Found";
}

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

  function showList(products) {
    const listContainer = document.querySelector(".productList");
    let markup = "";
  
    products.forEach((product) => {
      markup += `
        <a href="produkt.html?id=${product.id}" class="product-link">
          <article class="smallProduct ${product.discount ? "onSale" : ""} ${product.soldout ? "soldOut" : ""}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
            <h3>${product.productdisplayname}</h3>
            <p>${product.brandname}</p>
            <p>${product.subcategory}</p>
            <p class="price">
              ${
                product.discount
                  ? `<s>${product.price},-</s> ${(
                      product.price -
                      (product.discount * product.price) / 100
                    ).toFixed(2)},-`
                  : `${product.price},-`
              }
            </p>
            ${
              product.discount
                ? `<div class="discount">${product.discount}%</div>`
                : ""
            }
          </article>
        </a>`;
    });
  
    listContainer.innerHTML = markup;
  }