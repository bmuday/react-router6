import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <h2>Products Page</h2>
      <div className="products">
        {products.map((product, id) => (
          <div key={id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard product={product} />
              More info...
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
