import { Link } from "react-router-dom";
import Twitch from "./utlis/twitch";
import { AiOutlineGoogle } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="flex justify-between w-screen p-2 bg-black2 shadow-xl">
      <Link to="/">
        <Twitch className="text-sm" />
      </Link>
      <Link to="/">
        <div className="flex rounded-md px-5 py-2 mt-1 hover:opacity-75 bg-basePurple text-gray-300  font-medium text-2xl ">
          <AiOutlineGoogle className="mr-3 mt-1" />{" "}
          <span>Login with Google</span>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
