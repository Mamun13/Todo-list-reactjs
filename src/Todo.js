import React from 'react';
import { useState } from 'react';
import "../src/Todo.css";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(['cbasch', 'cjhsdfcgdsf']);


  const addTodo = () => {
    if (input.length < 1) return alert('fillup text first !!')
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        input
      ]
    });
    setInput('');
  };

  const removeTodo = (index) => {
    let f = todos.filter((t, i) => i !== index);
    setTodos(f);
  }


  return (
    <>
      <section id='todo'>
        <div className="container">
          <div className="row p-0">
            <div className="col-lg-4 p-0"></div>
            <div className="col-lg-4 p-0 todo text-center">
              <h1>TODO List</h1>
              <input type="text" className='imput' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add item' />
              <button onClick={addTodo} className="btn btn-primary btn-sm rounded-0" type='button'>+</button>
              <div className="p-3">
                <ul className='text-start'>
                  {
                    todos.map((t, i) => {
                      return <li>{t} <span className='btn btn-danger btn-sm' onClick={() => removeTodo(i)}>X</span> </li>;
                    })
                  }
                </ul>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 p-0"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Todolist