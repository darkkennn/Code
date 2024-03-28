import { FaAcquisitionsIncorporated, FaPlus } from "react-icons/fa";
import { useRef, useReducer } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor = 'addItem'> Add Item</label>
        <input 
            autoFocus
            ref = {inputRef}
            id= 'addItem'
            type = 'text'
            placeholder='Add item'
            required
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button 
            type = 'submit'
            aria-label='Add Item'
            onSubmit = {(e) => handleSubmit(e)}
            onClick={() => inputRef.current.focus()}
        >   
        <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem;