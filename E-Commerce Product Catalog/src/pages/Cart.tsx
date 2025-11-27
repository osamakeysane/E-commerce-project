import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import EmptyCart from "../assets/images/emptycart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [address, setAddress] = useState("main st, 0012");

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>products</p>
                <div className="flex space-x-8">
                  <p>price</p>
                  <p>quantity</p>
                  <p>aubtotal</p>
                  <p>remove</p>
                </div>
              </div>
              {cart.products.map((product) => (
                <div key={product.id} className="flex items-center space-x-4">
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-12 items-center">
                    <p>${product.price}</p>
                    <div className="flex items-center justify-center border">
                      <button className="text-xl font-bold px-1.5 border-r">
                        -
                      </button>
                      <p className="text-xl px-2">${product.quantity}</p>
                      <button className="text-xl px-1 border-l">+</button>
                    </div>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <button className="tetx-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping</p>
                <p className="ml-2">
                  Shipping to:{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button className="text-blue-500 hover:underline mt-1 ml-2">
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>{cart.totalPrice}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">
                Proceed to check
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          {" "}
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
          <h2 className="text-xl font-semibold text-gray-600">
            Your cart is empty
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
