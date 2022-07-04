import React from 'react';
import "../src/Todo.css"

const Todolist = () => {
  return(
      <>
        <section id='todo'>
          <div className="container">
            <div className="row p-0">
              <div className="col-lg-4 p-0"></div>
                <div className="col-lg-4 p-0 todo text-center">
                    <h1>TODO List</h1>
                    <input type="text" className=' imput' placeholder='Add item'/>
                    <button type='submit' ><h2>+</h2></button>
                </div>
              <div className="col-lg-4 p-0"></div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Todolist