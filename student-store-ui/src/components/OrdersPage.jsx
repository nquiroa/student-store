import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        setOrders(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Past Orders</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {orders.map((order) => (
          <li key={order.order_id}>
            <Link to={`/orders/${order.order_id}`}>
              Order #{order.order_id} - Total: ${order.total_price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
