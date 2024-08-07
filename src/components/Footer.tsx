import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5">
      {/* navbar */}
      <div className="border-t border-gray-700 py-10 flex flex-col items-center md:flex-row md:justify-between">
        <ul className="flex flex-wrap justify-center text-sm gap-4 md:gap-7 font-semibold text-white mb-4 md:mb-0">
          <li>
            <Link to="/" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/tools" className="hover:underline">
              Tools
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-center md:text-left">
          © 2024 Okafor Jaachimike
        </span>
      </div>
    </div>
  );
};

export default Footer;
