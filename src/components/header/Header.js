import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineBulb,
} from 'react-icons/ai';
import Navbar from './Navbar';

const items = [
  { value: 'Home', href: '/#', icon: AiFillHome },
  { value: 'About', href: '/#', icon: AiOutlineInfoCircle },
];

function Header({ setTheme = (f) => f }) {
  const [menuSwitch, setMenuSwitch] = useReducer(
    (menuSwitch) => !menuSwitch,
    false
  );

  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__menu'>
            <button onClick={setMenuSwitch} className='header__burger'>
              {menuSwitch ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <Link to='/' className='header__title'>
              Tupperware Store
            </Link>
          </div>
          <div className='header__left'>
            <button className='header__cart'>
              <Link to='/cart'>
                <AiOutlineShoppingCart />
                <span className='header__counter'>1</span>
              </Link>
            </button>
            <button>
              <Link to='authorization'>
                <AiOutlineUser />
              </Link>
            </button>
            <button onClick={setTheme}>
              <AiOutlineBulb />
            </button>
          </div>
        </div>
      </header>
      <Navbar {...{ menuSwitch, setMenuSwitch, items }} />
    </>
  );
}

export default Header;
