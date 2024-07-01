Student Store

by: **Nathan Quiroa**

### Application Features

#### CORE FEATURES


- [x] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [x] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [x] **Products Model**: Develop a model to represent individual items available in the store. 
  - [x] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [x] Implement methods for CRUD operations on products.
  - [x] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [x]**Orders Model**: Develop a model to manage orders. 
  - [x] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [x] Implement methods for creating, fetching, updating, and deleting orders.
  - [x] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [x] **Order Items Model**: Develop a model to represent the items within an order. 
  - [x] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [x] Implement methods for fetching and creating order items.
- [x] **API Endpoints**
  - [x] **Product Endpoints**:
    - [x] `GET /products`: Fetch a list of all products.
    - [x] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [x] `POST /products`: Add a new product to the database.
    - [x] `PUT /products/:id`: Update the details of an existing product.
    - [x] `DELETE /products/:id`: Remove a product from the database.
  - [x] **Order Endpoints**:
    - [x] `GET /orders`: Fetch a list of all orders.
    - [x] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [x] `POST /orders`: Create a new order with order items.
    - [x] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [x] `DELETE /orders/:order_id`: Remove an order from the database.
- [x] **Frontend Integration**
  - [x] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [x] **Added Endpoints**
  - [x] Create an endpoint for fetching all orders in the database.
  - [x] Create an endpoint for serving an individual order based on its ID.
- [x] **Filter Orders**
  - [x] Allow users to use an input to filter orders by the email of the person who placed the order.
- [x] **Past Orders Page**
  - [x] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/5e21cb6641594ebaa151a12bc7c5c513">
      <p>Loom Message - 27 June 2024 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/5e21cb6641594ebaa151a12bc7c5c513">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/5e21cb6641594ebaa151a12bc7c5c513-with-play.gif">
    </a>
</div>

<div>
    <a href="https://www.loom.com/share/84128f91ab0943aa8f792942a1d21871">
      <p>Loom Message - 27 June 2024 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/84128f91ab0943aa8f792942a1d21871">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/84128f91ab0943aa8f792942a1d21871-with-play.gif">
    </a>
</div>
Second video is an updated video of the POST orders api endpoint, I inserted a product id wrong!

