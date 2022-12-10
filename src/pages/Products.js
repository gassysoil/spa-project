import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">item 1</Link>
        </li>
        <li>
          <Link to="/products/p2">item 2</Link>
        </li>
        <li>
          <Link to="/products/p3">item 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
