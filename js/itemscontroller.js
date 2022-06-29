class ItemsController{
    
  items; 
  currentId;


constructor(){
    this.items= [];
    if(!localStorage.getItem("items")){
        this.currentId = 0;

    }
    else {
        this.loadItemsFromLocalStorage();
        const size = this.items.length;
       const lastelement =this.items[size-1];
       this.currentId=lastelement.currentId;
    
    }
    
    

}
    
     addItem(name, description,price, imageUrl) {
        
        
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            price: price,
            imageUrl: imageUrl
        }
         // Push the item to the items property
         this.items.push(item);
         console.log(this.items);
              //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
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


 
