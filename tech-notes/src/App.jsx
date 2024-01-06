import "./App.css";

export default function App() {
  return (
    <main>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" name="item" id="item" />
        <button className="btn" type="button">Add</button>
      </div>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
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
 