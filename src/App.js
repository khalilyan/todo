import './App.css';
import logo  from'./todo.png'
import AddForm from './Components/AddForm';
import Item from './Components/Item';
import { useReducer,useState } from 'react';
import Footer from './Components/Footer';

function reducer(state,action){
  
  if(action.type === "add" &&
   action.payload.newtodo !=="" &&
   action.payload.todos.filter((title)=>title === action.payload.newtodo).length===0){
    return [
      ...state,
      {
        title: action.payload.newtodo,
        isCompleted: false,
        id: Math.random()
      }
    ]
    
  }
  if(action.type === "delete"){
     const newstate = state.filter((todo)=>{ 
      return todo.id !== action.payload.delId
    })
      action.payload.setnum(newstate.filter((todo)=>todo.isCompleted === true).length)
      return [...newstate]
  }
  if(action.type === "change"){
    state[action.payload.todoN] = action.payload.newtodo;
    action.payload.setnum(state.filter((todo)=>todo.isCompleted === true).length)
    return [...state]
  }
  if(action.type === "clear"){
  const newstate =  state.filter((t)=>t.isCompleted === false);
   action.payload.editedcomp(0)
   return newstate
  }
 
  return state
}
function App() {
  const [date, dispatch] = useReducer(reducer,[
    {
      title: "Add your todo)",
      isCompleted: false,
      id: Math.random()
    }
  ])
  const [completed, setCompleted] = useState(date.filter((todo)=>todo.isCompleted === true).length)

  return (
    <div className="App">
      <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/armen-khalilyan-230a95244/' ><img src={logo} alt="todo" id='logo' ></img></a>
     <AddForm

      onAdd={(newTodo)=>{
      dispatch({
      type: "add",
      payload:{
        newtodo: newTodo,
        todos: date.map((todo)=>todo.title)
      }
     })
    }
  }
  /> 

<Footer onClear={()=>{
      dispatch({
        type: "clear",
        payload:{
          editedcomp: setCompleted
        }
      })
    }}
    
    completed={completed} all={date.length}/>


     <div id="List">
    {
      date.map((todo)=>{
      return <Item
        key={todo.id}
        todo={todo}
        title={todo.title}
        onDelete={()=>{
        dispatch({
          type: "delete",
          payload: {
            delId: todo.id,
            setnum: setCompleted,
            completed,
          }
        })
       }}
       isCompleted={todo.isCompleted}
       onChange={(newTodo)=>{
        dispatch({
          type: "change",
          payload:{
            newtodo: newTodo,
            todoN: date.indexOf(todo),
            setnum: setCompleted
          }
        })
       }}
       />})
    }
    </div>
    
     </div>
  );
}


export default App;