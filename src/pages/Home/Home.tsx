import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        className="home__logo"
        src="/Google_2015_logo.svg.webp"
        alt="Google Logo"
      />
      <SearchInput />
    </div>
  )
}

export default Home