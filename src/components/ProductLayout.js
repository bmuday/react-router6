import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <section className="section product">
        <Outlet />
        <Link to="/products" className="btn">
          Back to Products
        </Link>
      </section>
    </>
  );
};

export default ProductLayout;
