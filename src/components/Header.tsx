import { FaYoutube } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
  return (
    <div className="relative mb-16">
      <div className="dark:bg-slate-950 flex p-3 justify-between items-center fixed top-0 left-0 right-0">
        <div className="flex-1 shrink-0">
          <button className="text-2xl mr-1.5 text-red-500">
            <FaYoutube />
          </button>
          <span className="text-2xl dark:text-white">Youtube</span>
        </div>
        <div className="w-96 flex-[2_1_0]">
          <form className="flex">
            <input
              type="text"
              className="text-xl mr-2 text-white w-full rounded-md border-0 bg-slate-950 placeholder:text-gray-400 ring-1 ring-inset ring-gray-600"
              placeholder="Search"
            ></input>
            <button className="text-2xl dark:text-white bg-slate-800 p-2 rounded-md">
              <IoIosSearch />
            </button>
          </form>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Header;
