import { useContext, useState } from "react";
import ProductContext from "./ProductContext";

function ProductOutput() {
  const { products, setProducts, addToCart, setAddToCart } =
    useContext(ProductContext);
  //   const [product, setProduct] = useState({});
  function addCart(index) {
    if (products[index].quantity > 0) {
      // setProduct((product) => ({...product, quantity: product.quantity - 1}));
      // console.log(product);
      // const product = [...products][index];
      // console.log(product);
      // product.quantity = product.quantity - 1;
      //   console.log(products[index].quantity);
      const newProducts = products.map((product) => {
        if (product.productName === products[index].productName) {
        //   console.log(product);
          return { ...product, quantity: products[index].quantity - 1 };
        }
        return product;
      });
      setProducts(newProducts);
      //   console.log(products[index].quantity);
      setAddToCart([...addToCart, products[index].productName]);
    } else {
      alert("Stock Out!!!!!!!");
    }
  }
  return (
    <div className="output">
      <table className="product__tbl">
        <thead>
          <tr>
            <th></th>
            {products.length ? <th>Product</th> : <></>}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <p>{product.productName}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
              </td>
              <td>
                <button onClick={() => addCart(index)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>{addToCart.length}</div>
    </div>
  );
}

export default ProductOutput;
