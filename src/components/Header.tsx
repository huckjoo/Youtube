import { SetStateAction, useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

const Header = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();
  const { searchKeyword } = useParams();

  const handleOnchange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${inputText}`);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setInputText('');
    navigate(`/`);
  };

  useEffect(() => setInputText(searchKeyword || ''), [searchKeyword]);

  return (
    <div className="relative mb-16">
      <div className="dark:bg-slate-950 flex p-3 justify-between items-center fixed top-0 left-0 right-0">
        <div
          className="flex flex-1 text-2xl shrink-0 items-center"
          onClick={handleClick}
        >
          <button className=" mr-1.5 text-brand">
            <FaYoutube />
          </button>
          <h2 className=" dark:text-white cursor-pointer">Youtube</h2>
        </div>
        <div className="w-96 flex-[2_1_0]">
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleOnchange}
              className="text-xl mr-2 text-white w-full rounded-md border-0 bg-slate-950 placeholder:text-gray-400 ring-1 ring-inset ring-gray-600"
              placeholder="Search"
              value={inputText}
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
