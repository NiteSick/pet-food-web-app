import React from "react";
import logo from "../../assets/svg/logo.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import contact from "../../assets/svg/contact.svg";
import cart from "../../assets/svg/cart.svg";
import Button from "../common/Button";

const Navbar = () => {
  const handleContactClick = () => {
    console.log("Contact clicked!");
  };

  const handleWishlistClick = () => {
    console.log("Wishlist clicked!");
  };

  const handleCartClick = () => {
    console.log("Cart clicked!");
  };

  return (
    <nav className="flex justify-between items-center px-ds-32 py-ds-8">
      <div className="flex gap-ds-2 items-center">
        <img src={logo} alt="logo" />
        <p className="text-xl font-bold">Sniff 'n' Snack</p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Button>Sign up</Button>
        <div className="flex items-center justify-center gap-4">
          <img
            src={contact}
            alt="contact"
            className="cursor-pointer"
            onClick={handleContactClick}
          />
          <img
            src={wishlist}
            alt="wishlist"
            className="cursor-pointer"
            onClick={handleWishlistClick}
          />
          <img
            src={cart}
            alt="cart"
            className="cursor-pointer"
            onClick={handleCartClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
