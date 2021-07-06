import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

const Nav = () => {
  return (
    <div className="flex justify-between w-screen p-2 bg-primary shadow-2xl">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-14" />
      </Link>
      <Link to="/">
        <div className="flex rounded-md px-5 py-3 mt-1 hover:opacity-75  bg-primarydark text-gray-300  font-medium text-2xl ">
          <FcGoogle className="mr-3 mt-1" /> <span>Login with Google</span>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
