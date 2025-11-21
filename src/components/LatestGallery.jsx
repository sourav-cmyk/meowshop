



import React from "react";

const FeaturedGallery = () => {
  const gallery = [
    { id: 1, img: "../public/images/macmini.webp", title: "Mac Mini"},
    { id: 2, img: "/images/visionpro.webp", title: "VisionPro" },
    { id: 3, img: "/images/drone.jpg", title: "Dji Drone" },
    { id: 4, img: "/images/gimble.jpeg", title: "Dji Ronin" },
    { id: 5, img: "/images/metaraybun.jpg", title: "Meta ray Bun Glass" },
    { id: 6, img: "/images/ring.avif", title: "Mini Tripod" },
  ];

  return (
    <section className="py-16 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
          Latest <span className="text-indigo-600">Products</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-12 max-w-xl mx-auto">
          Browse our most loved and trending products specially hand-picked for you!
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedGallery;