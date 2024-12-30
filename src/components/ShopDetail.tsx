import { useParams,useNavigate  } from "react-router-dom";
import  shopsData  from "../constants/shopsData"; // Adjust the import path based on your project structure

const ShopDetail = () => {
  const { shopId } = useParams(); // Get the shop ID from the route
  const navigate = useNavigate();
  const shop = shopsData.find((shop) => shop.id === Number(shopId)); // Find the shop by ID

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {shop ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">{shop.name}</h1>
          <p className="text-lg text-center">
            Details about {shop.name} coming soon.
          </p>
        </>
      ) : (
        <p className="text-lg text-center text-red-500">Shop not found.</p>
      )}

      <div className="text-center mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/shops")}
        >
          Back to Shops List
        </button>
      </div>
    </div>
  );
};

export default ShopDetail;

