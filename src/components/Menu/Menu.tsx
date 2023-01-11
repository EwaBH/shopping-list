import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/list">Moje listy</Link>
      <Link to="/products">Produkty</Link>
    </div>
  );
}

export default Menu;
