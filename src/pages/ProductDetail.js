import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const parameters = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{parameters.productID}</p>
    </section>
  );
}

export default ProductDetail;
