import { useState } from "react";
import "./styles.css";

export default function App() {
  const [myNewItem, setMyNewItem] = useState("");
  const [myTodos, setMyTodos] = useState([]);

  function myHandleSubmit(myTestEvent) {
    myTestEvent.preventDefault();

    setMyTodos((myCurrentTodos) => {
      return [
        ...myCurrentTodos,
        {
          id: crypto.randomUUID(),
          title: myNewItem,
          completed: false,
        },
      ];
    });
  }

  return (
    <main>
      <form onSubmit={myHandleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={myNewItem}
            type="text"
            name="item"
            id="item"
            placeholder="enter a new item..."
            onChange={(myTestEvent) => setMyNewItem(myTestEvent.target.value)}
          />
          <button className="btn" type="button">
            Add
          </button>
        </div>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {myTodos.map((todo) => {
          return (
            <li>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Item 1
              </label>
              <button className="btn btn-danger" type="button">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
