import React, {useEffect, useState} from 'react';
import Todoform from './Components/Todoform';
import Todolist from './Components/Todolist';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All Todos');
  const [filterTodos, setFilterTodos] = useState([]);
  
  useEffect (() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodos(todos.filter(todo => todo.completed === true));
          break;
          case "uncompleted":
            setFilterTodos(todos.filter(todo => todo.completed === false));
            break;
            default:
              setFilterTodos(todos);
              break;
      }
    };
    filterHandler();
  }, [status, todos]);

  

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-yellow-300 '>

         <header className='mb-4'>
           <h1 className='text-4xl text-yellow-400 font-extrabold'>
            My Todo List
           </h1>        
         </header>

       <div className='p-4 bg-gray-100 drop-shadow-lg rounded-xl w-[410px] h-[490px] text-center overflow-x-hidden'>
         
               <Todoform todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/> 
         
               <Todolist todos={todos} setTodos={setTodos} filterTodos={filterTodos}/>
       </div>

    </div>
  )
}

export default App;
