const itemsController = new ItemsController();

function loadStorageSampleData() {
  if (!localStorage.getItem("items")) {
    const initialCards = [
      {
        id: 1,
        name: "Dress",
        imageUrl:
          "https://img.promgirl.com/_img/PGPRODUCTS/2409999/320/black-dress-PG-22-B2284-a.jpg",
        description: "Women's party wear dress",
        price: "30",
      },
      {
        id: 2,
        name: "Jeans",
        imageUrl:
          "https://valentino-cdn.thron.com/delivery/public/image/valentino/b75b2f41-080d-40b7-a412-d39b809ffcc3/ihqstx/std/2000x0/BLUE-WASHED-DENIM-JEANS-WITH-VALENTINO-ARCHIVE-1985-PRINT?quality=80&size=35&format=auto",
        description: "Women's stylish jeans",
        price: "10",
      },
      {
        id: 3,
        name: "Shirt",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0015/5638/1732/products/0264_780x.jpg?v=1641997248https://code.s3.yandex.net/web-code/bald-mountains.jpg",
        description: "Casual Shirts",
        price: "15",
      },
      {
        id: 4,
        name: "Skirt",
        imageUrl:
          "https://m.media-amazon.com/images/I/71+RuNnhrxL._AC_UY445_.jpg",
        description: "Summer wear short skirts",
        price: "18",
      },
      {
        id: 5,
        name: "Pants",
        imageUrl:
          "https://www.lulus.com/images/product/xlarge/8438101_1724476.jpg?w=560",
        description: "Summer wear pants",
        price: "10",
      },
      {
        id: 6,
        name: "Glasses",
        imageUrl:
          "https://i5.walmartimages.com/asr/6b997d86-c29d-4bcf-b044-14cabcc39168.f71cfdf11a8001f33152a46fcc1801c0.jpeg",
        description: "Stylish glasses",
        price: "30",
      },
    ];
    localStorage.setItem("items", JSON.stringify(initialCards));
  }
}
//function for creating the HTML structure of each card
function createCard(data) {
  const elements = document.querySelector("#elements").content;
  const element = elements.querySelector(".element").cloneNode(true);
  element.querySelector(".element__image").src = data.imageUrl;
  element.querySelector(".element__text").textContent = data.name;
  element.querySelector(".element_des").textContent = data.description;
  element.querySelector(".element_price").textContent = "$" + data.price;

  return element;
}
//function for adding each card

function loadCardsListFromItemsController() {
  const elementsList = document.querySelector(".elements__list");
  itemsController.items.forEach((card) => {
    elementsList.prepend(createCard(card));
    console.log(card);
  });
}
//loading the sample items to local storage
loadStorageSampleData();
//loading the items from local storage to items array if its not set
if (!localStorage.getItem("items")) {
  itemsController.loadItemsFromLocalStorage();
}
//loading the products as cards
loadCardsListFromItemsController();
