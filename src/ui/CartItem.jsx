import Button from './Button';

import { useDispatch } from "react-redux";
import { deleteItem } from "../Features/Cart/cartSlice";
import DeleteItem from './DeleteItem';
// import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {

  const { id, title, price } = item;

  const quantity = 1;
  const dispatch = useDispatch();
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {title}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">$ {(price)}</p>

        <DeleteItem Id={id}/>
      </div>
    </li>
  );
}

export default CartItem;