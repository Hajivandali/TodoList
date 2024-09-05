import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";

export default function TodoListItem({todoData ,deleteTodo ,toggleStatus}){
    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
        <div>
            <input type="checkbox" checked={todoData?.status} onChange={()=>toggleStatus(todoData)} className="" />
            <p  className={'inline-block mt-1 ml-2 text-gray-600 ${todoDate?.status ? `line-through` : ""}'}>{todoData?.title}</p>
        </div>
        <button type="button" className="absolute right-0 flex items-center  space-x-1">
            <DeleteIcon onClick={()=>deleteTodo(todoData)}/>
        </button>
        </li>
                
    )
}