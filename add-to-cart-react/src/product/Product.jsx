import { useState } from "react";
import ProductContext from "../context/ProductContext";
import ProductOutput from "./ProductOutput";

export default function Product() {
  const [products, setProducts] = useState([
    {
      productName: "Pen",
      price: 5,
      quantity: 10,
    },
    { productName: "Pencil", price: 5, quantity: 10 },
    { productName: "Book", price: 200, quantity: 3 },
    { productName: "Notebook", price: 100, quantity: 5 },
    { productName: "Eraser", price: 5, quantity: 10 },
  ]);
  const [cartItemNumber, setCartItemNumber] = useState(0);
  return (
    <ProductContext.Provider value={{ products, setProducts, cartItemNumber, setCartItemNumber }}>
      <ProductOutput />
    </ProductContext.Provider>
  );
}
