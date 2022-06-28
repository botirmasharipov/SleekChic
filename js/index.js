const initialCards = [
  {
    name: "Dress",
    link: "https://img.promgirl.com/_img/PGPRODUCTS/2409999/320/black-dress-PG-22-B2284-a.jpg",
  },
  {
    name: "Jeans",
    link: "https://valentino-cdn.thron.com/delivery/public/image/valentino/b75b2f41-080d-40b7-a412-d39b809ffcc3/ihqstx/std/2000x0/BLUE-WASHED-DENIM-JEANS-WITH-VALENTINO-ARCHIVE-1985-PRINT?quality=80&size=35&format=auto",
  },
  {
    name: "Shirt",
    link: "https://cdn.shopify.com/s/files/1/0015/5638/1732/products/0264_780x.jpg?v=1641997248https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Skirt",
    link: "https://m.media-amazon.com/images/I/71+RuNnhrxL._AC_UY445_.jpg",
  },
  {
    name: "Pants",
    link: "https://www.lulus.com/images/product/xlarge/8438101_1724476.jpg?w=560",
  },
  {
    name: "Glasses",
    link: "https://i5.walmartimages.com/asr/6b997d86-c29d-4bcf-b044-14cabcc39168.f71cfdf11a8001f33152a46fcc1801c0.jpeg",
  },
];
loadInitialItems();
function createCard(item) {
  const elements = document.querySelector("#elements").content;
  const element = elements.querySelector(".element").cloneNode(true);
  console.log("Image URL:" + item.imageUrl);
  console.log("Name:" + item.name);
  element.querySelector(".element__image").src = item.imageUrl;
  element.querySelector(".element__text").textContent = item.name;

  return element;
}

const elementsList = document.querySelector(".elements__list");
itemsController.items.forEach((item) => {
  console.log("Before adding createCard");
  elementsList.prepend(createCard(item));
});


/* function createCard(data) {
  const elements = document.querySelector("#elements").content;
  const element = elements.querySelector(".element").cloneNode(true);
  element.querySelector(".element__image").src = data.link;
  element.querySelector(".element__text").textContent = data.name;

  return element;
}

const elementsList = document.querySelector(".elements__list");
initialCards.forEach((card) => {
  elementsList.prepend(createCard(card));
});
*/