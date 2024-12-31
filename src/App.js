import React, {useState,createContext}  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./components/header/dashboard/EditP";
import Layout from "./Layout";
import Home from "./Home";
import TrackingPage from "./components/header/dashboard/TrackingPage";
import OrderTracking from "./components/header/dashboard/OrderTracking";
import AboutUs from "./components/header/dashboard/about";
import LivingRoomItems from "./components/product/LivingRoom";
import DiningRoomItems from "./components/product/DiningRoom";
import BedRoomItems from "./components/product/BedRoom";
import PastOrders from "./components/header/dashboard/PastOrders";
import OfficeItems from "./components/product/Office";
import OutdoorItems from "./components/product/outdoor";
import ContactUsPage from "./components/header/contact";
import Wishlist from "./components/header/WishList";
// import ShoppingCart from "./components/header/cart";
import KRoomItems from "./components/product/kitchen";
import ScrollToTop from "./components/scroll";
import Auth from "./components/login-register/Auth";
import ReviewForm from "./components/header/dashboard/ReviewForm";
import ReviewsPage from "./components/header/ReviewPage";
// import SofaProductPage from "./components/product/livingroom/single item/ProductPage";
import { CartProvider } from './components/cart/CartContext';
import CartPage from "./components/cart/CartPage";
import Chair from "./components/product/chair/chair";
import Sofa from "./components/product/sofa/sofa";
import { WishlistProvider } from './components/header/WishListContext';
import PaymentPage from "./components/cart/payment";
import AddressPage from "./components/cart/address";
import Login from "./components/login-register/Login";
import ProductDetail from "./components/product/ProductDetail";
export const ReviewsContext = createContext();
function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
    <CartProvider>
    <WishlistProvider>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/" element={<Auth />}/>
        {/* <Route path="/cart" element={<Layout><ShoppingCart/></Layout>} /> */}
        <Route path="/contact" element={<Layout><ContactUsPage /></Layout>} />
        <Route path="/edit-profile" element={<Layout><EditProfile /></Layout>} />
        <Route path="/tracking" element={<Layout><TrackingPage/></Layout>} /> 
        <Route path="/order" element={<Layout><OrderTracking/></Layout>}/>
        <Route path="/about" element={<Layout><AboutUs/></Layout>}/>
        <Route path="/pastorders" element={<Layout><PastOrders/></Layout>}/>
        <Route path="/add_review" element={<Layout><ReviewForm/></Layout>}/>
        <Route path="/review" element={<Layout><ReviewsPage/></Layout>}/>
        <Route path="/livingroom" element={<Layout><LivingRoomItems/></Layout>}/>
        <Route path="/diningroom" element={<Layout><DiningRoomItems/></Layout>}/>
        <Route path="/bedroom" element={<Layout><BedRoomItems/></Layout>}/>
        <Route path="/office" element={<Layout><OfficeItems/></Layout>}/>
        <Route path="/outdoor" element={<Layout><OutdoorItems/></Layout>}/>
        <Route path="/kitchen" element={<Layout><KRoomItems/></Layout>}/>
        {/* <Route path="/single" element={<Layout><SofaProductPage /></Layout>} />  */}
        <Route path="/cart" element={<Layout><CartPage/></Layout>} />
        <Route path="/chair" element={<Layout><Chair /></Layout>} />
        <Route path="/sofa" element={<Layout><Sofa /></Layout>} />
        <Route path="/wishlist" element={<Layout><Wishlist/></Layout>} />
        <Route path="/payment" element={<Layout><PaymentPage/></Layout>} />
        <Route path="/address" element={<Layout><AddressPage/></Layout>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
      </Routes>
    </Router>
    </WishlistProvider>
    </CartProvider>
    </ReviewsContext.Provider>
  );
}
export default App;