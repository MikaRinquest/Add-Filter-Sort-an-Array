let products = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((store) => {
    products = store;
    console.log(products);
    showItems(products);
  });

function showItems(products) {
  document.querySelector("#holder").innerHTML = " ";
  products.forEach((product) => {
    console.log(product);
    document.querySelector("#holder").innerHTML += `
    <img src=${product.image} height=200 width=250>
    `;
  });
}

// Open modal
function modal1() {
  document.getElementById("modal-container").style.display = "block";
}

// Close modal
function close() {
  document.getElementById("modal-container").style.display = "none";
}

//Adds new product
function add() {
  let product = {
    title: document.querySelector("#title").value,
    price: document.querySelector("#price").value,
    category: document.querySelector("#category").value,
    image: document.querySelector("#image").value,
    description: document.querySelector("#description").value,
    rating: document.querySelector("#rating").value,
    id: products.length + 1,
  };

  products.push(product);
  showItems(products);
  console.log(products);
}
