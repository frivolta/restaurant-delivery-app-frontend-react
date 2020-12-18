export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
        <h3 className="text-2xl text-gray-800">Log in</h3>
        <form className="flex flex-col mt-5 px-5 ">
          <input
            className="bg-gray-100 shadow-inner mb-3 py-3 px-5 rounded-lg focus:outline-none focus:border-green-600 border-2 focus:border-opacity-50"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-gray-100 shadow-inner mb-3 py-3 px-5 rounded-lg focus:outline-none focus:border-green-600 border-2 focus:border-opacity-50"
            type="password"
            placeholder="Password"
          />
          <button className="py-3 px-5 bg-gray-800 text-white text-lg mt-3 rounded-lg focus:outline-none hover:opacity-90">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};