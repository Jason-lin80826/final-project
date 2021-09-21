import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { selectUser, logout } from '../features/userSlice';

const NavbarButton = ({ data }) => {
  return (
    <li className="nav-item">
      <Link
        className="items-center hidden px-8 text-lg leading-snug tracking-wide text-black py-9 hover:bg-yellow-deepYellow hover:text-white lg:inline-block lg:mt-0"
        to={data.url}
      >
        {data.name}
      </Link>
    </li>
  );
};
const Navbar = () => {
  const data1 = { name: '附近店家', url: '/' };
  const data2 = { name: '所有店家', url: '/' };
  const data3 = { name: '購物車', url: '/orders' };
  const data4 = { name: '訂單', url: '/order' };

  const [isActive, setActive] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };
  return (
    <>
      <nav className="relative flex items-center h-24 py-16 md:py-20 lg:py-0 bg-yellow-lightYellow">
        {/* after:border lg:after:border-none */}
        <div className="container flex items-center content-around justify-around mx-auto lg:justify-between">
          {/* logo */}
          <div className="flex">
            <Link
              className="flex w-40 h-20 mr-6 text-4xl leading-relaxed text-black bg-cover bg-logo lg:w-56 lg:h-24"
              to="/"
            >
              {/* 大奶薇薇 */}
            </Link>
          </div>
          {/* mobile */}
          <button
            className="block lg:hidden"
            onClick={() => setActive(!isActive)}
          >
            <FaBars className="absolute top-14 right-10" />
          </button>
          {/* <div
            className={`lg:flex flex-grow items-center
            ${navbarOpen ? ' flex' : ' hidden'}
            }
          > */}
          {/* list */}
          <ul className="flex -ml-16 space-x-8 md:space-x-0">
            <NavbarButton data={data1}></NavbarButton>
            <NavbarButton data={data2}></NavbarButton>
            <NavbarButton data={data3}></NavbarButton>
            <NavbarButton data={data4}></NavbarButton>
          </ul>
          <div className="hidden mx-4 nav-item sm:flex">
            {!user && (
              <Link
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                to="/register"
              >
                註冊
              </Link>
            )}
            {!user && (
              <Link
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                to="/login"
              >
                登入
              </Link>
            )}
            {user && (
              <>
                <p className="items-center hidden leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default">
                  <Link to="/user-update">{user.email} info</Link>
                </p>
                <Link
                  className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                  to="/logout"
                  onClick={(e) => handleLogout(e)}
                >
                  登出
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;