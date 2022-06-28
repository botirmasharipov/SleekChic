const itemsController = new ItemsController(0);

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="images/'+item.imageUrl +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <p class="card-text">'+item.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary" onClick="enableForm()">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
  }

function loadCardsListFromItemsController(){

  for(var i = 0, size = itemsController.items.length; i < size ; i++){
      const item = itemsController.items[i];
      console.log("Items from storage:" + item.name)
      addItemCard(item);
        }
  
  document.querySelector("#list-items").style.display="block";
}
function enableForm()
{
    document.querySelector("#newItemForm").style.display="block";
    document.querySelector("#list-items").style.display="none";
    return false;
}
