import { useState } from "react";

export default function Todo({ state, dispatch }) {

  const [edit, setEdit] = useState(null);
  const [editingTextm, setEditingText] = useState("");
  const [checked, setChecked] = useState(false);



  const handleDelete = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleChecked = () => {
    setChecked(!checked)
  };

  const handleEdit = (id, title) => {
    dispatch({type: "edit", payload: { id, title }})
    setEditingText("")
    setEdit(null)
    console.log("click")
  }

  return (
    <div>
      {state.map((item) => {
        return (
          <div key={item.id}>
            <input type="checkbox" checked={checked} onChange={handleChecked}></input>
            {edit === item.id ? (
              <>
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingTextm}
              />
              <button onClick={() => handleEdit(item.id, editingTextm)}>Save</button>
              </>
            ) : (
              <>
              <p>{item.title}</p>
              <button onClick={() => setEdit(item.id)}>Edit</button>
            
              <button onClick={() => handleDelete(item.id)} disabled={!checked}>Delete</button>
              </>
            )}

           
            
          </div>
        );
      })}
    </div>
  );
}
