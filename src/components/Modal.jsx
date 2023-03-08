import { useParams } from "react-router-dom";
import products from "../products.json";
import { Link } from "react-router-dom";

function Modal() {
  const { productNumber } = useParams();
  const productIndex = productNumber - 1; // because the index starts w 0
  const product = products[productIndex];

  return (
    <div>
      <div>Product Information</div>
      <div>Product number: {productNumber}</div>
      <div>{product.description}</div>
      <div>
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );
}

export default Modal;
