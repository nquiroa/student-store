import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async (filterStudentId = '') => {
    try {
      const response = await axios.get(`http://localhost:3000/orders${filterStudentId ? `/student/${filterStudentId}` : ''}`);
      setOrders(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleFilter = () => {
    fetchOrders(studentId);
  };

  return (
    <div className="orders-page">
      <h1>Past Orders</h1>
      {error && <p className="error">{error}</p>}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Enter student ID"
          value={studentId}
          onChange={handleStudentIdChange}
        />
        <button onClick={handleFilter}>Filter Orders</button>
      </div>
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
