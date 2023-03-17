import { useContext, useState } from "react";
import CartProductsOutput from "./CartProductsOutput";
import ProductContext from "../context/ProductContext";
import "./ProductOutput.css";
import CartProductContext from "../context/CartProductContext";
function ProductOutput() {
  const { products, setProducts, cartItemNumber, setCartItemNumber } =
    useContext(ProductContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [showCartBtn, setShowCartBtn] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  function addCart(index) {
    if (products[index].quantity > 0) {
      const selectedProduct = products[index];
      const newProducts = products.map((product) => {
        if (product.productName === selectedProduct.productName) {
          return { ...product, quantity: products[index].quantity - 1 };
        }
        return product;
      });
      setProducts(newProducts);
      setCartItemNumber(cartItemNumber + 1);
      const existingCartProduct = cartProducts.find(
        (cartProduct) => cartProduct.productName === selectedProduct.productName
      );
      if (existingCartProduct) {
        const newCartProducts = cartProducts.map((cartProduct) => {
          if (cartProduct.productName === selectedProduct.productName) {
            // console.log(cartProduct.productName);
            // console.log(products[index].productName);
            setTotalPrice((totalPrice) => totalPrice + selectedProduct.price);
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            };
          }
          return cartProduct;
        });
        setCartProducts(newCartProducts);
      } else {
        setCartProducts([
          ...cartProducts,
          {
            productName: selectedProduct.productName,
            quantity: 1,
          },
        ]);
        setTotalPrice((totalPrice) => totalPrice + selectedProduct.price);
      }
    } else {
      alert("Stock Out!!!!!!!");
    }
  }
  function showCart() {
    setShowCartBtn(true);
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
              <div className="product__quantity">
                Quantity: {product.quantity}
              </div>
            </div>
            <div className="addCart">
              <button onClick={() => addCart(index)} className="addCart__btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="addCart__count" onClick={showCart}>
          Items selected: {cartItemNumber}
        </button>
      </div>
      {showCartBtn ? (
        <CartProductContext.Provider
          value={{ cartProducts, setCartProducts, setShowCartBtn, totalPrice }}
        >
          <CartProductsOutput />
        </CartProductContext.Provider>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductOutput;
