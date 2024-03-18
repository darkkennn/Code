import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
  const[items, setItems] = useState([
    {
        id: 1,
        checked: false,
        items: "Cocoa powder"
    },
    {
        id:2,
        checked:false,
        items:"Bag of beans"
    },
    {
        id:3,
        checked:true,
        items:"Protein powder"
    }
  ]);

  const [newItem, setNewItem] = useState('')

  const setAndSave = (newItems) => {
    setItems(newItems);
      localStorage.setItem('shoppingList', JSON.stringify(newItems));
  } 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem]
    setAndSave(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((items) => items.id === id ? { ...items, checked: !items.checked} : items);
    setAndSave(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
  
  return (
    <div className="App">
      <Header title = 'Groceries'/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length = {items.length} 
      />
    </div>
  );
}

export default App;
 