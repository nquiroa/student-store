import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './OrdersPage.css';

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
    <div className="orders-page">
      <h1>Past Orders</h1>
      {error && <p className="error">{error}</p>}
      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.order_id} className="order-item">
            <Link to={`/orders/${order.order_id}`}>
              <div className="order-info">
                <p><strong>Order #{order.order_id}</strong></p>
                <p>Total: ${order.total_price.toFixed(2)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
