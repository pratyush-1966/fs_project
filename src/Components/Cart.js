import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += Number.parseInt(item.price);
    });
    setTotalPrice(total);
  };

  const handlePlaceOrder = async (e) => {
    calculateTotalPrice(cartItems);

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found in local storage');
      return;
    }

    try {
      const response = await axios.post("https://fsbackendd-production.up.railway.app/api/v1/order", {
        amount: totalPrice * 100, // Amount is in paisa
        currency: "INR",
        receipt: "qwsaq1",
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const order = response.data;
      console.log(order);

      const options = {
        key: "rzp_test_ovp48YH3z8baVQ", // Replace with your Razorpay key
        amount: totalPrice * 100, // Amount is in paisa
        currency: "INR",
        name: "Acme Corp", // Replace with your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response) {
          const body = {
            ...response,
          };

          const validateRes = await axios.post(
            "https://fsbackendd-production.up.railway.app/api/v1/order/validate",
            body,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = validateRes.data;
          console.log(jsonRes);
        },
        prefill: {
          name: "Web Dev Matrix", // Replace with customer's name
          email: "webdevmatrix@example.com",
          contact: "9000000000", // Replace with customer's contact
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      e.preventDefault();
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found in local storage');
          return;
        }
        const response = await axios.get('https://fsbackendd-production.up.railway.app/api/v1/items', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setCartItems(response.data.items);
        calculateTotalPrice(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found in local storage');
        return;
      }
      await axios.delete(`https://fsbackendd-production.up.railway.app/api/v1/items/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setCartItems(cartItems.filter((item) => item._id !== id));
      calculateTotalPrice(cartItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
      <div className="flex justify-between items-start mb-4 ">
        <div className="text-lg font-semibold px-4 mx-3">Total Price: Rs {totalPrice}</div>
        <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded" onClick={handlePlaceOrder}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Place Order
        </button>
      </div>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center border-b pb-2">
            <img className="w-20 h-20 rounded-full mr-4" src={item.urlToImage} alt={item.title} />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">Price: Rs {item.price}</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={() => handleRemoveItem(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
