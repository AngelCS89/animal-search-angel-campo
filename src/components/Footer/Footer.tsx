import React from "react";
import "./Footer.scss";
import pkg from "../../../package.json";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; Google 2025</p>
      <p>version {pkg.version}</p>
    </footer>
  );
};

export default Footer;

