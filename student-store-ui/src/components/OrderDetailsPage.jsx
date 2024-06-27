import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    return <p>Error: {error}</p>;
  }

  if (!order) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.order_id}</p>
      <p>Customer ID: {order.customer_id}</p>
      <p>Total Price: ${order.total_price.toFixed(2)}</p>
      <p>Status: {order.status}</p>
      <h2>Items</h2>
      <ul>
        {order.orderItems.map((item) => (
          <li key={item.order_item_id}>
            Product ID: {item.product_id} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsPage;
