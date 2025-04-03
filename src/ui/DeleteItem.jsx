import { deleteItem } from "../Features/Cart/cartSlice";
import Button from "./Button"
import { useDispatch } from "react-redux";

function DeleteItem({Id}) {
    const dispatch = useDispatch();
    return (
        <Button type="small" onClick={()=>dispatch(deleteItem(Id))}>Delete</Button>
        // <Button type="small" onClick={()=>console.log(pizzaId)}>Delete</Button>
    )
}

export default DeleteItem