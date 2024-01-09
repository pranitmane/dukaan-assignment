// import {shopIcon} from '../../public/shopIcon.png'
import { Link } from "react-router-dom";
import Arrow from "../assets/navBar/Arrow.svg";

import Home from "../assets/navBar/Home.svg";
import HomeA from "../assets/navBar/HomeA.svg";
import Orders from "../assets/navBar/Orders.svg";
import OrdersA from "../assets/navBar/OrdersA.svg";
import Products from "../assets/navBar/Products.svg";
import ProductsA from "../assets/navBar/ProductsA.svg";
import Delivery from "../assets/navBar/Delivery.svg";
import DeliveryA from "../assets/navBar/DeliveryA.svg";
import Marketing from "../assets/navBar/Marketing.svg";
import MarketingA from "../assets/navBar/MarketingA.svg";
import Analytics from "../assets/navBar/Analytics.svg";
import AnalyticsA from "../assets/navBar/AnalyticsA.svg";
import Payments from "../assets/navBar/Payments.svg";
import PaymentsA from "../assets/navBar/PaymentsA.svg";
import Discounts from "../assets/navBar/Discounts.svg";
import DiscountsA from "../assets/navBar/DiscountsA.svg";
import Audience from "../assets/navBar/Audience.svg";
import AudienceA from "../assets/navBar/AudienceA.svg";
import Appearance from "../assets/navBar/Appearance.svg";
import AppearanceA from "../assets/navBar/AppearanceA.svg";
import Plugin from "../assets/navBar/Plugin.svg";
import PluginA from "../assets/navBar/PluginA.svg";
import wallet from "../assets/navBar/wallet.svg";
import {useState} from 'react'

import { NavLink,useLocation} from "react-router-dom";

export default function Navbar() {
const [active, setActive] = useState(false)
const location = useLocation()
const path = location.pathname



  return (
    <div className="w-[224px] pt-4 p-2 pb-4 flex flex-col items-center bg-Navbar text-Black100 h-full fixed left-0 right-0 ">
      <div className="flex flex-col items-center gap-8 w-full flex-1">
        <StoreDetails />
        <nav className="flex flex-col gap-1 w-full overflow-y-scroll text-sm1">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "flex flex-row gap-3 rounded-base bg-Black100/10 p-2 pl-4 pr-4"
                : "flex flex-row gap-3 rounded-base hover:bg-Black100/10 p-2 pl-4 pr-4";
            }}
          >
            {path === "/" ? <img src={HomeA} alt="shop-icon" /> : <img src={Home} alt="shop-icon" />}
            <p className="flex-1">Home</p>
          </NavLink>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Orders} alt="shop-icon" />
            <p className="flex-1">Orders</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Products} alt="shop-icon" />
            <p className="flex-1">Products</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Delivery} alt="shop-icon" />
            <p className="flex-1">Delivery</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Marketing} alt="shop-icon" />
            <p className="flex-1">Marketing</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Analytics} alt="shop-icon" />
            <p className="flex-1">Analytics</p>
          </div>
          <NavLink
            to="/payments"
            className={({ isActive }) => {
              return isActive
                ? "flex flex-row gap-3 rounded-base bg-Black100/10 p-2 pl-4 pr-4"
                : "flex flex-row gap-3 rounded-base hover:bg-Black100/10 p-2 pl-4 pr-4";
            }}
          >
            {path === "/payments" ? <img src={PaymentsA} alt="shop-icon" /> : <img src={Payments} alt="shop-icon" />}
            <p className="flex-1">Payments</p>
          </NavLink>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Discounts} alt="shop-icon" />
            <p className="flex-1">Discounts</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Audience} alt="shop-icon" />
            <p className="flex-1">Audience</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Appearance} alt="shop-icon" />
            <p className="flex-1">Appearance</p>
          </div>
          <div className="flex flex-row gap-3 rounded-base p-2 pl-4 pr-4 hover:bg-Black100/10">
            <img src={Plugin} alt="shop-icon" />
            <p className="flex-1">Plugin</p>
          </div>
        </nav>
      </div>
      <WalletDetails />
    </div>
  );
}

function StoreDetails() {
  return (
    <div className="flex w-[192px] flex-row justify-center items-center gap-3 rounded-base">
      <img
        src="/shopIcon.png"
        alt="shop-icon"
        className="w-[39px] h-[39px] rounded-base"
      />
      <div className="flex flex-col flex-1">
        <h1 className="text-md2">Nishyan</h1>
        <Link to="/" className="text-xs  underline">
          Visit Store
        </Link>
      </div>
      <div>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
}

function WalletDetails() {
  return (
    <div className="flex flex-row w-[192px] p-3 pt-[3px] pb-[3px] bg-[#353C53] gap-2 rounded-base">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row rounded-base items-center justify-center w-[36px] h-[36px] bg-Black100/10">
          <img src={wallet} alt="wallet" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-Black100/80 text-xs">Available Credits</p>
        <p className="text-lg2">222.10</p>
      </div>
    </div>
  );
}
