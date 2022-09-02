import { useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <section className="section product">
      <h4>
        Product {productId} : {name}
      </h4>
      <img src={image} alt={name} />
    </section>
  );
};

export default SingleProduct;
