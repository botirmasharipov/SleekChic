const itemsController = new ItemsController(0);

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.imageUrl +'" width="300" height="250"  alt="product image">\n' +
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

 function loadInitialItems()
 {
    console.log("Loading Initial Items:");
    itemsController.addItem("Dress","Full Black", "$45","https://img.promgirl.com/_img/PGPRODUCTS/2409999/320/black-dress-PG-22-B2284-a.jpg");
    console.log('loaded one item');
    itemsController.addItem("Jeans","Blue","$25","https://valentino-cdn.thron.com/delivery/public/image/valentino/b75b2f41-080d-40b7-a412-d39b809ffcc3/ihqstx/std/2000x0/BLUE-WASHED-DENIM-JEANS-WITH-VALENTINO-ARCHIVE-1985-PRINT?quality=80&size=35&format=auto");
    console.log('loaded second item');
    itemsController.addItem("Shirt","Black-Printed","$25","https://cdn.shopify.com/s/files/1/0015/5638/1732/products/0264_780x.jpg?v=1641997248https://code.s3.yandex.net/web-code/bald-mountains.jpg");
     console.log('3rd item');
     itemsController.addItem("Skirt","Black","$28","https://m.media-amazon.com/images/I/71+RuNnhrxL._AC_UY445_.jpg");
     console.log('4th item');
     itemsController.addItem("Pants","Pink","$32","https://www.lulus.com/images/product/xlarge/8438101_1724476.jpg?w=560");
     console.log('5th item');
     itemsController.addItem("Glasses","Polarized","$148","https://i5.walmartimages.com/asr/6b997d86-c29d-4bcf-b044-14cabcc39168.f71cfdf11a8001f33152a46fcc1801c0.jpeg");
     console.log('6th item');
     
     localStorage.setItem("items", JSON.stringify(itemsController.items));

 } 
function loadCardsListFromItemsController(){

  for(var i = 0, size = itemsController.items.length; i < size ; i++){
      const item = itemsController.items[i];
      console.log("Items from storage:" + item.name)
      addItemCard(item);
        }
  
  document.querySelector("#list-items").style.display="block";
}
function loadCardsListFromLocalStorage(){

  const storageItems = localStorage.getItem("items");
   if(!storageItems)
   {
     console.log("First time Access.. No Local storage and hence adding");
     loadInitialItems();
 
   }
}

function enableForm()
{
    document.querySelector(".product-pop").style.display="block";
    document.querySelector("#list-items").style.display="none";
    return false;
}
