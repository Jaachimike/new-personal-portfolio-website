import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5">
      {/* navbar */}
      <div>
        <ul className="flex text-sm gap-7 border border-gray-700 font-semibold text-white bg-jaachiGray-200 w-fit rounded-full py-3 px-9 *:cursor-pointer">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
