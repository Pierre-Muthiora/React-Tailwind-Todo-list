import React from 'react'

const Todoform = ({ setInputText, inputText,todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);     
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random()}
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className='flex'>
        <div className='flex bg-white rounded-full'>
          <input className='rounded-full h-8 p-2 outline-none focus:ring-1 ring-inset ring-yellow-400' value={inputText} onChange={inputTextHandler} type="text" />
          <button className='bg-yellow-400 m-1 rounded-full w-12 hover:bg-yellow-600' onClick={submitTodoHandler} type='submit'>
              <h1 className='text-sm font-bold text-gray-100 tracking-wide'>Add</h1>
          </button>
        </div>

        <div className='ml-5'>
            <select className='h-8 p-0.5 rounded-full outline-none focus:ring-1 ring-inset ring-yellow-400 font-semibold' onChange={statusHandler} name="todos">
                <option value="All Todos">All Todos</option>
                <option value="Completed">Finished</option>
                <option value="Uncompleted">Unfinished</option>
            </select>
        </div>
    </form>
  )
}

export default Todoform;