import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      {/* <Link to="/menu">&larr; Back to menu</Link> */}
      <LinkButton to="/home">&larr; Back to menu</LinkButton>

      <p className="font-semibold">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;