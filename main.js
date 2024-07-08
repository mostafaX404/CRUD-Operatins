//C R U D S

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var tableRow = document.getElementById("tableRow");
var btn = document.getElementById("mainBtn");
var updateBtn = document.getElementById("updateBtn");

var productsList;

(function () {
  if (localStorage.getItem("data") == null) {
    productsList = [];
  } else {
    productsList = JSON.parse(localStorage.getItem("data"));
    display(productsList);
  }
})();

btn.addEventListener("click", () => {
  if (nameRegex() && priceRegex()) {
    var product = {
      name: productName.value,
      price: productPrice.value,
      category: productCat.value,
      descreption: productDesc.value,
    };
    productsList.push(product);
    localStorage.setItem("data", JSON.stringify(productsList));
    display(productsList);
    location.reload(); //clear the screen
  }
});

function display(arr) {
  var box = "";
  for (let i = 0; i < arr.length; i++) {
    box += ` 
        <tr>
        <td>${i + 1}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].descreption}</td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})">delete</button></td>
        <td><button class="btn btn-info" onclick="updateProduct(${i})">update</button></td>
        </tr>`;
  }
  tableRow.innerHTML = box;
}

function deleteProduct(index) {
  console.log(index);
  productsList.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(productsList));
  display(productsList);
}

function updateProduct(index) {
  productName.value = productsList[index].name;
  productPrice.value = productsList[index].price;
  productCat.value = productsList[index].category;
  productDesc.value = productsList[index].descreption;

  btn.classList.add("d-none");
  updateBtn.classList.remove("d-none");

  updateBtn.addEventListener("click", () => {
    console.log(index);
    productsList[index].name = productName.value;
    productsList[index].price = productPrice.value;
    productsList[index].category = productCat.value;
    productsList[index].descreption = productDesc.value;
    localStorage.setItem("data", JSON.stringify(productsList));

    updateBtn.classList.add("d-none");
    btn.classList.remove("d-none");
    display(productsList);
    location.reload(); //clear the screen
  });
}
search.tolo;
function search(value) {
  var searchedList = [];
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].name.toLowerCase().match(value.toLowerCase())) {
      searchedList.push(productsList[i]);
    }
  }
  display(searchedList);
}

function nameRegex() {
  var regex = /[A-Z][a-z]/;
  if (regex.test(productName.value)) {
    return true;
  } else {
    alert("Name must start with capital");
    return false;
  }
}

function priceRegex() {
  var regex = /[0-9]/;
  if (regex.test(productPrice.value)) return true;
  else {
    alert("Price nums only");
    return false;
  }
}
