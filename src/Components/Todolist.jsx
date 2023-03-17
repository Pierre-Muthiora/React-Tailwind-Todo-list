import React from 'react'
import Todo from './Todo'

const Todolist = ({ todos, filterTodos,setTodos, }) => {
  return (
    <div className='mt-4'>
        <ul>
            {filterTodos.map(todo => (
                <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}
                todo={todo}/>
            ))}
        </ul>
    </div>
  )
}

export default Todolist