import TodoListItem from "./TodoListItem";

export default function TodoList({todos , deleteTodo ,toggle}){
    console.log(todos)
    return(
        <ul className="list-reset">
            {
                todos.map((todo , index)=>(<TodoListItem key ={index} todoData={todo} deleteTodo={deleteTodo} toggleStatus={toggle}/>))
            }
        </ul>
    )
}