import React from "react";

const ProductCard = ({ product }) => {
  const { image, name } = product;
  return (
    <div className="article">
      <img src={image} alt={name} width={300} />
    </div>
  );
};

export default ProductCard;
