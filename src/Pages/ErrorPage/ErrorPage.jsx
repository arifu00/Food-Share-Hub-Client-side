import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 max-w-md w-full bg-white rounded-2xl shadow-xl text-center ">
        <h1 className="text-4xl text-red-500 font-bold mb-4">Error 404</h1>
        <p className="text-lg text-gray-700 mb-4">Page not found. Sorry!</p>
        <div className="animate-bounce">
          <span className="text-red-500 text-6xl">😞</span>
        </div>
       <h4 className="text-2xl mt-2  font-medium">
        Go  <NavLink to='/' className='underline text-red-500 font-bold'>Back</NavLink>
       </h4>
      </div>
    </div>
  );
};

export default ErrorPage;
