
// import React from "react";

// const ProductCard = (product) => {

//   return (

//     <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition">
//       <img
//         src={product.img}
//         alt={product.name}
//         className="w-full h-40 object-cover rounded-md"
//       />
//       <h2 className="text-lg font-bold mt-2">{product.name}</h2>
//       <p className="text-gray-600 text-sm">{product.description}</p>
//       <p className="font-semibold text-blue-600 mt-2">$ {product.price}</p>

//     </div>
//   );
// };

// export default ProductCard;

// 2nd time

import React from "react";

export default function ProductCard({ p, onOpen }) {
  if (!p) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition p-2">
      <div className="relative">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-48 object-cover rounded-md"
        />
        {p.stock === 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Out of stock
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className=" text-gray-800 font-bold text-center text-lg">
          {p.name}
        </h3>
        <p className="text-gray-600 mt-1 text-center">{p.description}</p>
        <p className="text-gray-600 mt-1 text-center">৳ {p.price}</p>
        <p className="text-yellow-500 mt-1 text-center">
          Rating: {p.rating} ⭐
        </p>
        <button
          onClick={() => onOpen(p)}
          className="mt-2 w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          View
        </button>
      </div>
    </div>
  );
}