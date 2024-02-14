import "./App.css";
import React from "react";

// imported components
import Nav from "./Components/Nav/Nav";
import MainPage from "./Components/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListingPage from "./Components/ListingPage/ListingPage";
import PostListingPage from "./Components/PostListingPage/PostListingPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/LoginPage/SignupPage";
import PaymentDetailsPage from "./Components/PaymentDetails/PaymentDetailsPage";
import PaymentProcessed from "./Components/PaymentProcessed/PaymentProcessed";
import Checkout from "./Components/Checkout/Checkout";
import SuccessfulCheckout from "./Components/SuccessfulCheckout/SuccessfulCheckout";

const App = () => {
  return (
    <div className="App content-center">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/post_listing" element={<PostListingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/payment_details" element={<PaymentDetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment_processed" element={<PaymentProcessed />} />
          <Route path="/successful_checkout" element={<SuccessfulCheckout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// commit each stable version, stage 1, stage 2, and stage 3 -- etc.
export default App;
