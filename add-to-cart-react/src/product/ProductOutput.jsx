import { useContext } from "react";
import ProductContext from "./ProductContext";

function ProductOutput() {
  const { products, setProducts } = useContext(ProductContext);
  function deleteProduct(index) {
    if (window.confirm("Are you sure to delete?")) {
      products[index].selected = false; //cause if i delete a selected product the same product added was also selected
      const newProducts = products.filter((product, idx) => idx !== index);
      setProducts([...newProducts]);
    }
  }
  function selectProduct(index) {
    const newProducts = [...products];
    if (newProducts[index].selected) {
      newProducts[index].selected = false;
    } else {
      newProducts[index].selected = true;
    }
    setProducts([...newProducts]);
  }
  return (
    <div className="output">
      <table className="product__tbl">
        <thead>
          <tr>
            <th></th>
            {products.length ? <th>Product Name</th> : <></>}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => selectProduct(index)}
                  checked={product.selected}
                />
              </td>
              <td>
                {product.selected ? (
                  <strike>{product.productName}</strike>
                ) : (
                  <p>{product.productName}</p>
                )}
              </td>
              <td>
                <button onClick={() => deleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductOutput;
