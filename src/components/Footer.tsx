import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5">
      {/* navbar */}
      <div className="border-t border-gray-700 py-10 flex justify-between">
        <ul className="flex text-sm gap-7  font-semibold text-white w-fit  *:cursor-pointer">
          <Link to="/">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <span className="text-sm">© 2024 Okafor Jaachimike</span>
      </div>
    </div>
  );
};

export default Footer;
