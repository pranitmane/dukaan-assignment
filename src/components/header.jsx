import Search from "../assets/paymentsPage/search.svg";
import Help from "../assets/paymentsPage/help.svg";
import Marketing from "../assets/paymentsPage/marketing.svg";
import Polygon2 from "../assets/paymentsPage/polygon2.svg";
import HamburgerMenu from "../assets/navBar/HamburgerMenu.svg";
import { useRecoilState } from "recoil";
import { navState } from "../store/atom";

export default function Header({ PageName }) {
  const [navOpen, setNavOpen] = useRecoilState(navState);

  return (
    <div className="w-full flex md:flex-row p-3 pl-3 pr-3 md:pl-8 md:pr-8 gap-2 md:gap-4 bg-white border-b border-Black85 sticky top-0 z-10">  
      <button
        className="md:hidden w-10 h-10 hover:bg-Black98 rounded-full flex items-center justify-center"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        <img
          src={HamburgerMenu}
          alt="hamburger-menu"
          onClick={() => setNavOpen(!navOpen)}
        />
      </button>
      <div className="md:flex-1 flex md:flex-row items-center gap-2 md:gap-4">
        <h2 className="text-lg2">{PageName}</h2>
        <div className="flex flex-row gap-[6px]">
          <img src={Help} alt="" />
          <p className="text-2xs text-Black30 hover:underline cursor-help hidden md:block">
            How it works
          </p>
        </div>
      </div>
      <SearchBar/>
      <div className="md:flex flex-1 hidden ">
        <MoreInfo />
      </div>
    </div>
  );
}

function SearchBar(){
  return(
    <div className="flex-1 flex flex-row  bg-Black95 pt-[9px] pb-[9px] pl-4 pr-4 rounded-base gap-2">
        <img src={Search} alt="search-icon" />
        <input
          className="w-full bg-transparent outline-none text-md1"
          type="text"
          placeholder="Search features, tutorials, etc"
        />
      </div>
  )
}

export function MoreInfo() {
  return (
    <div className="flex-1 flex flex-row items-center justify-end gap-1 md:gap-3">
      <div className="bg-Black90 w-10 h-10 flex items-center justify-center hover:cursor-pointer rounded-full">
        <img src={Marketing} alt="marketing-icon" />
      </div>
      <div className="bg-Black90 w-10 h-10 flex items-center justify-center hover:cursor-pointer rounded-full">
        <img src={Polygon2} alt="polygon-icon" />
      </div>
    </div>
  );
}
