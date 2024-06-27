import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import OrdersPage from "../OrdersPage";
import OrderDetailsPage from "../OrderDetailsPage";
import { removeFromCart, addToCart, getQuantityOfItemInCart, getTotalItemsInCart } from "../../utils/cart";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", dorm_number: ""});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleOnCheckout = async () => {
    setIsCheckingOut(true);
    console.log('Cart:', cart);
    console.log('Products:', products);

    const totalPrice = Object.keys(cart).reduce((total, item) => {
      const product = products.find(product => product.id === parseInt(item));
      return total + (product.price * cart[item]) * 1.0875;
    }, 0);

    const order = {
      customer_id: userInfo.name,
      setUserInfo: userInfo.dorm_number,
      total_price: totalPrice,
      status: "Complete",
      orderItems: Object.keys(cart).map(productid => {
        const product = products.find(product => product.id === parseInt(productid));
        return {
          product_id: product.id,
          quantity: cart[productid],
          price: product.price,
        };
      }),
    };

    console.log('Order being sent:', order);

    try {
      const response = await axios.post("http://localhost:3000/orders", order);
      console.log('Response from server:', response.data);
      setOrder(response.data);
      setCart({});
      setIsCheckingOut(false);
      setUserInfo({ name: "", dorm_number: ""});
    } catch (error) {
      console.error('Error during checkout:', error.message);
      setError(error.message);
      setIsCheckingOut(false);
    }
  };

  const toggleSidebar = () => setSidebarOpen((isOpen) => !isOpen);
  const handleOnRemoveFromCart = (item) => setCart(removeFromCart(cart, item));
  const handleOnAddToCart = (item) => setCart(addToCart(cart, item));
  const handleGetItemQuantity = (item) => getQuantityOfItemInCart(cart, item);
  const handleGetTotalCartItems = () => getTotalItemsInCart(cart);
  const handleOnSearchInputChange = (event) => setSearchInputValue(event.target.value);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar
          cart={cart}
          error={error}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          isOpen={sidebarOpen}
          products={products}
          toggleSidebar={toggleSidebar}
          isCheckingOut={isCheckingOut}
          addToCart={handleOnAddToCart}
          removeFromCart={handleOnRemoveFromCart}
          getQuantityOfItemInCart={handleGetItemQuantity}
          getTotalItemsInCart={handleGetTotalCartItems}
          handleOnCheckout={handleOnCheckout}
          order={order}
          setOrder={setOrder}
        />
        <main>
          <SubNavbar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  error={error}
                  products={products}
                  isFetching={isFetching}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  addToCart={handleOnAddToCart}
                  searchInputValue={searchInputValue}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  cart={cart}
                  error={error}
                  products={products}
                  addToCart={handleOnAddToCart}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
            <Route
              path="*"
              element={
                <NotFound
                  error={error}
                  products={products}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
