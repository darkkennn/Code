import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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

    const handleCheck = (id) => {
        const listItems = items.map((items) => items.id === id ? { ...items, checked: !items.checked} : items);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                        type = "checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked = {item.checked}
                        />
                        <label
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.items}</label>
                        <FaTrashAlt role = "button" tabIndex = "0" />
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default Content;