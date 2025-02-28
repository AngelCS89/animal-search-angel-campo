import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import SearchInput from "../SearchInput/SearchInput";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  return (
    <header className="header">
      <div className="header__right">
        {location.pathname === "/results" ? (
          <div className="header__search">
            <img
              src="/Google_2015_logo.svg.webp"
              alt="Google Logo"
              style={{ width: "130px", height: "40px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <SearchInput initialValue={query} showButtonSearch={false} />
          </div>
        ) : (
          <span>Agile Context Frontend test</span>
        )}
      </div>
      <div className="header__left">
        <CiMenuBurger size={20} />
        <RxAvatar size={30} />
      </div>
    </header>
  );
};

export default Header;