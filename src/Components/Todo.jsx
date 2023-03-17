import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    };
    const finishedHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

  return (
    <div className='flex justify-between mt-2'>
        <li className={`overflow-x-auto whitespace-nowrap bg-yellow-300 w-64 text-left px-2 mr-2 py-1 rounded-xl font-semibold ${todo.completed ? "line-through text-slate-400" : ''}`}>{text}</li>     

        <div className='flex justify-between w-28 rounded-xl'>
            <button className='bg-green-300 w-1/2 mr-1 rounded-xl hover:bg-green-400' onClick={finishedHandler}>
                <span className='font-bold'>&#10003;</span>
            </button>
            <button className='bg-red-500 w-1/2 rounded-xl hover:bg-red-600' onClick={deleteHandler}>
                <span className='font-bold'>DEL</span>
            </button>
        </div>

    </div>
  )
}

export default Todo