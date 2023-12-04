import './App.css';

import { FaYoutube } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

function App() {
  return (
    <>
      {/** Header */}
      <div className="dark:bg-slate-900 flex p-3 justify-between items-center">
        <div className="flex">
          <button className="text-2xl mr-1.5 text-red-500">
            <FaYoutube />
          </button>
          <span className="text-2xl dark:text-white">Youtube</span>
        </div>
        <div className="w-96">
          <form className="flex">
            <input
              type="text"
              className="text-xl mr-2 text-white w-full rounded-md border-0 bg-slate-900 placeholder:text-gray-400 ring-1 ring-inset ring-gray-600"
              placeholder="Search"
            ></input>
            <button className="text-2xl dark:text-white bg-slate-700 p-2">
              <IoIosSearch />
            </button>
          </form>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default App;
