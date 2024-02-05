import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineBulb,
} from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <header className="navbar sticky flex items-center justify-between gap-1 bg-base-100	">
        <a className="btn btn-ghost text-2xl font-bold uppercase">
          Template Store
        </a>
        <div>
          <a className="btn btn-ghost">
            <AiOutlineUser className="h-10 w-10" />
          </a>
          <a className="btn btn-ghost">
            <AiOutlineShoppingCart className="h-10 w-10" />
          </a>
        </div>
      </header>
      <hr className="h-1 border-transparent bg-primary" />
    </>
  );
};
