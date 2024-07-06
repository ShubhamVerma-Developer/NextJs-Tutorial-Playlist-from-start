import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
    