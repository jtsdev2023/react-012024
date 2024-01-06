import { useState } from "react";
import "./App.css";

export default function App() {
  const [newItem, setNewItem] = useState("")

  return (
    <main>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          type="text" name="item"
          id="item"
          placeholder="enter a new item..."
          onChange={myTestEvent => setNewItem(myTestEvent.target.value)}
        />
        <button className="btn" type="button">Add</button>
      </div>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Item 1
        </label>
        <button className="btn btn-danger" type="button">Delete</button>
      </li>
      <li>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Item 2
          </label>
          <button className="btn btn-danger" type="button">Delete</button>
      </li>
    </ul>
    </main>
  );
}
 