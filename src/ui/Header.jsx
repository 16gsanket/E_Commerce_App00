import { Link, useNavigate } from 'react-router-dom';
import Username from '../Features/User/username';
import { useSidebar } from '../context/SidebarProvider ';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

function Header() {

  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const navigate  = useNavigate();
  return (
    <header className=" flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-4 uppercase sm:px-6 font-pizza text-pizza">
     
   {!isSidebarOpen ?  <GiHamburgerMenu onClick={toggleSidebar}/> : <IoCloseCircleSharp onClick={toggleSidebar}/>}
      <Link to="/" className="tracking-widest">
        E-Commerce Co.
      </Link>
      <IoMdCart onClick={() => navigate('/cart')}/>
      {/* <SearchOrder /> */}
    <Username />
    </header>
  );
}

export default Header;