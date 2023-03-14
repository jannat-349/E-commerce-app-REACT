import { useContext, useState } from "react";
import ProductContext from "./ProductContext";

function ProductInput() {
  const { products, setProducts } = useContext(ProductContext);
  const [product, setProduct] = useState("");
  function validProduct() {
    if (!product.productName) {
      alert("Product name can not be empty!");
      return false;
    }
    if (
      [...products].find((item) => {
        return item.productName === product.productName;
      })
    ) {
      alert("Duplicate product!");
      return false;
    }
    if (product.productName.length >= 10) {
      alert("Product name is too large!");
      return false;
    }
    return true;
  }
  function handleOnChange(event) {
    setProduct({
      productName: event.target.value,
      selected: false,
    });
  }
  function AddProduct() {
    if (!validProduct()) {
      return;
    }
    console.log(product.selected);
    setProducts([...products, product]);
  }
  return (
    <div className="Input">
      <input onChange={handleOnChange} placeholder="product name" />
      <button onClick={AddProduct}>Add</button>
    </div>
  );
}

export default ProductInput;
