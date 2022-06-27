const itemsController = new ItemsController(0);

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
    const newitemDisplay = document.querySelector("#productdisplay");
    newitemDisplay.innerHTML = `<h1>New Product added</h1> <br> Produt Name: ${name}<br> Description: ${description}<br>
           Image URL: ${imageUrl} <br> Price: ${price}`;
  }
});
