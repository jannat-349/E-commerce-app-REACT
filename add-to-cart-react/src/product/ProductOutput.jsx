import { useContext, useState } from "react";
import ProductContext from "./ProductContext";
import "./ProductOutput.css";
function ProductOutput() {
  const { products, setProducts, addToCart, setAddToCart } =
    useContext(ProductContext);
  //   const [product, setProduct] = useState({});
  function addCart(index) {
    if (products[index].quantity > 0) {
      const newProducts = products.map((product) => {
        if (product.productName === products[index].productName) {
          return { ...product, quantity: products[index].quantity - 1 };
        }
        return product;
      });
      setProducts(newProducts);
      setAddToCart([...addToCart, products[index].productName]);
    } else {
      alert("Stock Out!!!!!!!");
    }
  }
  return (
    <div className="output">
        <div className="title">E-COMMERCE APP</div>
      <div className="product__cart">
        {products.map((product, index) => (
          <div key={index} className="product">
            <div className="product__info">
              <div className="product__name">{product.productName}</div>
              <div className="product__price">Price: {product.price}</div>
              <div className="product__quantity">Quantity: {product.quantity}</div>
            </div>
            <div className="addCart">
              <button onClick={() => addCart(index)} className="addCart__btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="addCart__count">Items selected: {addToCart.length}</div>
    </div>
  );
}

export default ProductOutput;
