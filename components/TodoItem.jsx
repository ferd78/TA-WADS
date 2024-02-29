export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
          <button className="btn btn-success" onClick={() => editTodo(id)}>
            Edit Item
          </button>
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
           Delete Item
          </button>
        </label>
      </li>
    );
   }
    