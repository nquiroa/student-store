📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Student Store

Submitted by: **NAME**

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

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

- [ ] **Added Endpoints**
  - [ ] Create an endpoint for fetching all orders in the database.
  - [ ] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] **Implement Your Own Frontend**
  - [ ] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
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

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics discussed in the labs provided a strong foundation for understanding key concepts needed to complete the assignment. Specifically, the labs on RESTful API design, Express routing, and database interactions using Prisma were instrumental in building the backend API. However, I felt somewhat unprepared for implementing complex filtering and sorting functionalities due to limited coverage in the labs. Additionally, integrating frontend and backend components seamlessly posed challenges that were not extensively covered.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have added more advanced filtering and sorting options for the product listings to enhance user experience. I would also focus on implementing robust error handling and validation across the API to ensure more reliable and user-friendly interactions. Additionally, I would have liked to integrate user authentication and authorization features to secure the application. Improving the UI/UX design to make the frontend more intuitive and visually appealing would also be a priority.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

The project demo went well overall, with the core functionalities working as expected and a smooth demonstration of the product browsing and order placement features. However, there were some minor issues with the responsiveness of the frontend and occasional delays in API responses. I noticed that a peer implemented a more dynamic search and filter feature, which provided instant feedback as users typed, and I would like to try incorporating a similar feature in the future. 

### Open-source libraries used

- W3schools

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

shoutout to Erika and Alex!

