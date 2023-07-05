import { useContext } from "react";
import CartProductContext from "../context/CartProductContext";
import "./CartProductOutput.css";

export default function CartProductsOutput() {
  const {
    products,
    setProducts,
    cartItemNumber,
    setCartItemNumber,
    cartProducts,
    setCartProducts,
    setShowCartBtn,
    totalPrice,
    setTotalPrice,
  } = useContext(CartProductContext);
  function goBack() {
    setShowCartBtn(false);
  }
  function removeFromCart(cartProduct) {
    const selectedProduct = cartProduct;
    const newProducts = products.map((product) => {
      if (product.productName === selectedProduct.productName) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(newProducts);
    setCartItemNumber(cartItemNumber - 1);
    const existingCartProduct = cartProducts.find(
      (cartProduct) => cartProduct.productName === selectedProduct.productName
    );
    if (existingCartProduct.quantity > 1) {
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.productName === selectedProduct.productName) {
          setTotalPrice((totalPrice) => totalPrice - selectedProduct.price);
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }
        return cartProduct;
      });
      setCartProducts(newCartProducts);
    } else {
      setTotalPrice((totalPrice) => totalPrice - selectedProduct.price);
      const newCartProducts = cartProducts.filter((cartProduct) => {
        if (cartProduct.productName !== selectedProduct.productName) {
          return cartProduct;
        }
      });
      setCartProducts(newCartProducts);
    }
  }
  if (cartProducts.length) {
    return (
      <div className="cartOutput">
        <div className="product">
          {cartProducts.map((cartProduct, index) => (
            <div key={index} className="cartProduct">
              <div className="cartProduct__name">{cartProduct.productName}</div>
              <div className="product__price">Price: {cartProduct.price}</div>
              <div className="cartProduct__quantity">
                Quantity: {cartProduct.quantity}
              </div>
              <div>
                <button
                  className="remove__btn"
                  onClick={() => removeFromCart(cartProduct)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="totalPrice">Total Price: {totalPrice}</div>
        <div>
          <button className="back__btn" onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>Nothing to show!!!!</div>
      <button className="back__btn" onClick={goBack}>
        Back
      </button>
    </div>
  );
}
