import React from 'react'

// import Todo from './Todo'

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.info.todo.map(todo => {
                return(   
                    <div 
                    key={todo.id}
                    onClick={()=>{props.toggleItem(todo.id)}}
                    className={`todo${todo.finished ? "finished" : ""}`}>
                <p >{todo.what}</p>
                </div>  
            )})}
        </div>
    )
}
export default TodoList