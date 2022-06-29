const itemsController = new ItemsController();

// Select the New Item Form
const newItemForm = document.querySelector("#newItemForm");
// Add an 'onsubmit' event listener
newItemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Select the inputs
  const newItemName = document.querySelector("#productname");
  const newItemDescription = document.querySelector("#description");
  const newItemPrice = document.querySelector("#price");
  const newItemImageUrl = document.querySelector("#imageurl");
  // Get the values of the inputs
  const name = newItemName.value;
  const description = newItemDescription.value;
  const imageUrl = newItemImageUrl.value;
  const price = newItemPrice.value;
  //validation
  if (name && description && imageUrl && price) {
    console.log(name + description + imageUrl + price);
    // Add the item to the ItemsController
    itemsController.addItem(name, description,price,imageUrl);
    //clear the form
    newItemName.value = "";
    newItemDescription.value = "";
    newItemPrice.value = "";
    newItemImageUrl.value = "";

    //displaying the Product details
    newItemForm.style.display = "none";
    document.querySelector(".newproduct").style.display = "block";
    document.getElementById("list-items").innerHTML=`<div class="card" style="width: 20rem;">
    <img src="${imageUrl}" width="300" height="250"  alt="product image">
    <div class="card-body">
    <h5 class="card-title">Name:${name}</h5>
    <p class="card-text">Description:${description}</p></br>
    <p class="card-text">Price:$${price}</p>
    <a href="item_form.html" class="btn btn-primary">Add New Item</a>
    </div>
    </div>
    </br>`;
    
  }
});
