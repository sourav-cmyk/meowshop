import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Productdata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleOpen = (product) => {
    alert(`Selected: ${product.title}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        <span className="text-indigo-600">Featured</span> Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onOpen={handleOpen} />
        ))}
      </div>
    </section>
  );
}