import { useState } from "react";
import ProductContext from "./ProductContext";
import ProductInput from "./ProductInput";
import ProductOutput from "./ProductOutput";

export default function Product() {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <ProductInput />
      <ProductOutput/>
    </ProductContext.Provider>
  );
}
