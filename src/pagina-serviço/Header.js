import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="style_header">
      <div className="logo">
        <img src="/img/magister.png" />
        <div className="letterlogo">
          <p className="titulo">Magister</p>
          <p className="subtitulo">Portal de serviços da UNIT</p>
        </div>
        <div className="unit">
          <img src="/img/tiradentes logo.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
