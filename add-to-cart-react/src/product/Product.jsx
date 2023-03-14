import { useState } from "react";
import ProductContext from "./ProductContext";
import ProductOutput from "./ProductOutput";

export default function Product() {
  const [products, setProducts] = useState([
    {
      productName: "Pen",
      price: 5,
      quantity: 10,
    },
    { productName: "Pencil", price: 5, quantity: 10 },
    { productName: "Book", price: 5, quantity: 3 },
  ]);
  const [addToCart, setAddToCart] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts, addToCart, setAddToCart }}>
      <ProductOutput />
      
    </ProductContext.Provider>
  );
}
