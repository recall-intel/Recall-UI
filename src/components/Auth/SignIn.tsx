import { useAuth0 } from "@auth0/auth0-react";

export const SignIn: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="hidden md:flex items-center space-x-1">
        <a
          href="#"
          className="py-5 px-3 hover:text-gray-900"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </a>
        <a
          href="#"
          className="py-2 px-3 hover:bg-yellow-300 bg-yellow-400 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
        >
          SignUp
        </a>
      </div>
    )
  );
};

export default SignIn;
