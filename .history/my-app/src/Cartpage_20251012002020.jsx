import { useCart } from "../CartContext";

const Carts = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div className="flex items-center gap-4">
                <img src={item.imagePath} alt={item.title} className="w-16 h-16 object-cover" />
                <p>{item.title}</p>
              </div>
              <p>Rs {item.price} × {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl mt-4 font-bold">Total: Rs {total}</h3>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded mt-2"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Carts;