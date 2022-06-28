class ItemsController{
    
  items; 
  currentId;


constructor(currentId = 0){
    
    this.currentId = currentId;
    this.items = [];
}
    
    addItem(name, description,price, imageUrl) {
        const item = {
            // Increment the currentId property
            currentId: this.currentId++,
            name: name,
            description: description,
            price: price,
            imageUrl: imageUrl
        }
         // Push the item to the items property
         this.items.push(item);
        }
        
        
        
    }


 
