// fetch(`https://kea-alt-del.dk/t7/api/categories/`)
//   .then((response) => response.json())
//   .then(showCategori);

// function showCategori(data) {
//   console.log("mine data er:", data);
//   const markup = data
//     .map(
//       (element) =>
//         `
//           <li><a href="produktliste.html?category=${element.category}">${element.category}</a></li>
//     `
//     )
//     .join("");
//   console.log("min markup er", markup);
//   document.querySelector("ul").innerHTML = markup;
// }

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategori);

  function showCategori(data) {
    const markup = data
      .map(
        (element) =>
          `<li style="background-color: ${
            categoryColors[element.category] || "#f4f4f4"
          }">
            <a href="produktliste.html?category=${element.category}">${element.category}</a>
          </li>`
      )
      .join("");
    document.querySelector(".category_list_container ul").innerHTML = markup;
  }

const categoryColors = {
    Accessories: "#ECC0D4",
    Apparel: "#8D7542",
    Footwear: "#DC3F26",
    "Free Items": "#59904F",
    "Personal Care": "#F17B27",
    "Sporting Goods": "#B2BE32",
  };



 
  
