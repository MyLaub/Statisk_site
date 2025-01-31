let productId = 1164;
let productContainer = document.querySelector(".productContainer")

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
.then(response => response.json())
.then(data => {
    productContainer.innerHTML = `
    <section class="product_container">
        <div class="product_image">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
        </div>
       <div class="product_info>
       <h2 class="brandname">${data.brandname}</h2>
        <h2 class="productdisplayname">${data.productdisplayname}</h2>
        
        <p class="gender">${data.gender}</p>
        <p class="category">${data.category}</p>
        <p class="subcategory">${data.subcategory}</p>
        <p class="articletype">${data.articletype}</p>
        <p class="season">${data.season}</p>
        <p class="usagetype">${data.usagetype}</p>
        
    </div>

     <div class="sidebar">
            <h2 class="price">${data.price}</h2>
            <p class="discount">${data.discount}</p>
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
    `
})