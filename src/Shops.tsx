// import { Link } from "react-router-dom";
// import shopsData from "./constants/shopsData";

// const Shops = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Our Shops</h1>
//       <div className="flex flex-wrap gap-4 justify-center">
//         {shopsData.map((shop) => (
//           <Link
//             key={shop.id}
//             to={shop.path}
//             className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
//           >
//             {shop.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shops;


import shopsData from "./constants/shopsData";

const Shops = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shops
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {shopsData.map((shop) => (
          <a
            href={shop.path}
            key={shop.id}
            className="group block rounded-lg shadow-md overflow-hidden bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full h-auto object-contain rounded-md"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center group-hover:text-blue-500">
                {shop.name}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Shops;

