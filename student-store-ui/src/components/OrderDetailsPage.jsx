import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './OrderDetailsPage.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders/${orderId}`);
        setOrder(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!order) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="order-details-page">
      <h1>Order Details</h1>
      <div className="order-details">
        <p><strong>Order ID:</strong> {order.order_id}</p>
        <p><strong>Customer ID:</strong> {order.customer_id}</p>
        <p><strong>Total Price:</strong> ${order.total_price.toFixed(2)}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
      <h2>Items</h2>
      <ul className="order-items-list">
        {order.orderItems.map((item) => (
          <li key={item.order_item_id} className="order-item">
            <div className="order-item-info">
              <p><strong>Product ID:</strong> {item.product_id}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsPage;
