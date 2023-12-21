import { useState } from "react";
import "./styles/style.css"
function App() {
  const [newItem, setNewItem] = useState("");
  const [items,setItems] = useState([])
  function addItem() {
    if(!newItem.trim()){
      alert("enter a item")
      return;
    }
    const item = {
      id: crypto.randomUUID(),
      value: newItem
    }
    setItems(oldItems => [...oldItems,item])
    setNewItem("");
  }
  function deleteItem(id){
    const newArray = items.filter(item => item.id != id )
    setItems(newArray);
  }
  return (
    <div className="App">
      <h1>To do app</h1>
      <input
        type="text"
        placeholder="add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
     {items.map(item => (
      <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li> 
     ))}
    </div>
  );
}

export default App;
