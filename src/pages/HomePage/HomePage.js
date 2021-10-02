/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GoogleMap from '../../components/GoogleMap';
import MyCarousel from '../../components/MyCarousel';

const HomePageInput = ({ data, setSearchShop }) => {
  return (
    <input
      placeholder={data}
      className="w-4/12 h-8 mx-1 text-xs text-center rounded md:mx-2 lg:w-60 md:w-44 lg:h-10 lg:rounded-md md:text-base"
      onChange={async (e) => {
        if (e.target.value === '') {
          setSearchShop(['嵐', '麻古', '迷']);
          return;
        }
        setSearchShop([e.target.value]);
      }}
    ></input>
  );
};
const HomePageShop = ({ shop }) => {
  return (
    <div className="pb-3 border-b-2 border-gray-300 w-72 h-86lg:w-124 lg:border-0">
      <div className="mb-2 overflow-hidden duration-500 ease-in-out transform hover:rotate-360 hover:border w-72 h-52 rounded-2xl hover:shadow-3xl">
        <img
          // className="flex-shrink m-auto "
          className="w-full h-full "
          src={shop.URL}
          alt="品牌 logo 圖片"
        ></img>
      </div>
      <p className="overflow-hidden text-lg tracking-wide break-all whitespace-nowrap w-72 overflow-ellipsis">
        {shop.brandName}
      </p>
      <div className="flex text-sm">
        <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
          {shop.isOpen}
        </div>
        <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          20 m
        </div>
        <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          <FaStar className="mt-1 mr-1 text-yellow-deepYellow" />
          {shop.rating}
        </div>
      </div>
      <p>{shop.address} </p>
    </div>
  );
};

const HomePage = () => {
  const [shops, setShops] = useState([]);
  const [searchShop, setSearchShop] = useState(['嵐', '麻古', '迷']);
  const handleChange = (e) => {
    setShops(e);
  };

  return (
    <>
      <GoogleMap handleChange={handleChange} searchShop={searchShop} />
      <MyCarousel />
      <div className="flex items-center content-center justify-center mx-auto mt-16 rounded-md w-160 h-14 bg-yellow-deepYellow lg:rounded-lg lg:h-24">
        <div className="flex items-center justify-around w-full px-6 mx-auto h-7 lg:h-14 lg:w-1/3">
          <HomePageInput
            key="findBrand"
            data="找品牌..."
            setSearchShop={setSearchShop}
          ></HomePageInput>
          <HomePageInput
            key="findCategory"
            data="找種類..."
            setSearchShop={setSearchShop}
          ></HomePageInput>
          <HomePageInput
            key="findComment"
            data="找評價..."
            setSearchShop={setSearchShop}
          ></HomePageInput>
        </div>
      </div>
      <div className="mx-auto mt-10 w-160 lg:mt-20 md:w-176 lg:w-388">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {shops.map((shop) => {
            return (
              <Link
                className="px-2 mb-8 rounded-xl "
                to={`/menu/${shop.id}/${shop.brandName}/${shop.rating}/${shop.address}`}
                key={shop.key}
              >
                <HomePageShop className="" shop={shop} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
