import SignIn from "../Auth/SignIn";

export function NavBar() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto border px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/*  logo  */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700  hover:text-gray-900">
                <img
                  className="h-6 w-auto mr-1"
                  src="https://d231gjotl1lh30.cloudfront.net/assets/images/recall-intel-logo.png"
                  alt="Recall Intel"
                ></img>
                <span className="font-bold"> Recall Intel </span>
              </a>
            </div>
            {/*  primary nav */}
            <SignIn />
          </div>
          {/*  secondary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 hover:text-gray-900">
              Login
            </a>
            <a
              href="#"
              className="py-2 px-3 hover:bg-yellow-300 bg-yellow-400 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              SignUp
            </a>
          </div>

          {/*  mobils  nav */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
