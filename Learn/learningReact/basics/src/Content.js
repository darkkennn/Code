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
            checked:false,
            items:"Protein powder"
        }
    ]);

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                        type = "checkbox"
                        checked = {item.checked}
                        />
                        <label>{item.items}</label>
                        <FaTrashAlt role = "button" tabIndex = "0" />
                    </li>
                ))}
            </ul>
        </main>
    )

}

export default Content;