import ppay from "../assets/icons/ppay.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar bg-primary px-32 py-4">
      <img className="h-8" src={ppay} alt="ppay" />
      <div className="flex gap-6">
        <Link to="/login"><button className="btn text-neutral bg-primary border border-neutral text-sm font-normal">
          Sign In
        </button></Link>
        <Link to="/register"><button className="btn bg-neutral border-none text-primary text-sm font-normal">
          Sign Up
        </button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
