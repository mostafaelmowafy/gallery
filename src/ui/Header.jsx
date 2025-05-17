import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-slate-800 text-slate-100 font-semibold px-4 py-2 flex justify-between items-center">
      <span className="">Moaz&apos;s Gallery</span>
      <navigator className="flex space-x-4 cursor-pointer">
        <Link
          to={"/contact"}
          className=" hover:text-sky-500 active:text-sky-500 marker:transition-colors duration-300 cursor-pointer"
        >
          Contact
        </Link>
        <Link
          to={"/gallery"}
          className=" hover:text-sky-500 active:text-sky-500 marker:transition-colors duration-300 cursor-pointer"
        >
          Gallery
        </Link>
        <Link
          to={"/"}
          className=" hover:text-sky-500 active:text-sky-500 marker:transition-colors duration-300 cursor-pointer"
        >
          Home
        </Link>
      </navigator>
    </header>
  );
}

export default Header;
