import { useContext } from "react";
import CartProductContext from "../context/CartProductContext";
import "./CartProductOutput.css";

export default function CartProductsOutput() {
  const { cartProducts, setCartProducts, setShowCartBtn, totalPrice } =
    useContext(CartProductContext);
  function goBack() {
    setShowCartBtn(false);
  }
  if (cartProducts.length) {
    return (
      <div className="cartOutput">
        {/* {console.log(cartProducts)} */}
        <div className="product">
          {cartProducts.map((cartProduct, index) => (
            <div key={index} className="cartProduct">
              <div className="cartProduct__name">{cartProduct.productName}</div>
              {/* <div className="product__price">Price: {product.price}</div> */}
              <div className="cartProduct__quantity">
                Quantity: {cartProduct.quantity}
              </div>
            </div>
          ))}
        </div>
        <div className="totalPrice">
            Total Price: {totalPrice}
        </div>
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
