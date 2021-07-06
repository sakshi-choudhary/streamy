import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import GoogleAuth from "../components/GoogleAuth";

const Nav = () => {
  return (
    <div className="flex justify-between w-screen p-2 bg-primary shadow-2xl">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-14" />
      </Link>
      <GoogleAuth />
    </div>
  );
};

export default Nav;
