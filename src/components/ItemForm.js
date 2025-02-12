import React , { useState } from "react";
import { v4 as uuid } from "uuid";
 
function ItemForm({onItemFormSubmit}) {

  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: '',
    category: '',
  });

  function handleStore(event) {
    setNewItem({
      ...newItem, 
      [event.target.name] : event.target.value 
    })
  }


  {/*function handleSubmit (event){
    event.preventDefault();
    onItemFormSubmit(newItem)
    }*/}

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={(event) => handleStore(event)} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => handleStore(event)} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={() => onItemFormSubmit(newItem)}>Add to List</button>
    </form>
  );
}

export default ItemForm;
