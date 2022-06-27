class ItemsController{
    
  items; 
  currentId;


constructor(currentId = 0){
    
    this.currentId = currentId;
    this.items = [];
}
    
    addItem(iname, description,imageUrl) {
        const item = {
            // Increment the currentId property
            currentId: this.currentId++,
            iname: iname,
            description: description,
            imageUrl: imageUrl
        }
         // Push the item to the items property
         this.items.push(item);
        }
        loadItemsFromLocalStorage() {
            const storageItems = localStorage.getItem("items")
            if (storageItems) {
                const items = JSON.parse(storageItems)
                for (let i = 0; i< items.length; i++) {
                    const item = items[i];
                    this.items.push(item);
                }
            }
        }
    }


const itemobj = new ItemsController();
itemobj.addItem("Cordigan","Red Color","cordiganImage.jpg");
itemobj.addItem("Pant","Blue Color","pantImage.jpg");
itemobj.addItem("Floral Dress","Multi Color","floralImage.jpg");
console.log("Value of items:" + itemobj.items[2].currentId +" items:"+ itemobj.items[2].iname);
