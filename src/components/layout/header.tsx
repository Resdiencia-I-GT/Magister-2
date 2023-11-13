import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="style_header">
      <div className="logo">
        <img src="/login/Magistergif 3.gif" />
        <div className="letterlogo">
          <p className="titulo">Magister</p>
          <p className="subtitulo">Portal de serviços da UNIT</p>
        </div>
      </div>
      <div className="bar_nav">
        <div className="icone">
          <img src="/login/ico1.png" />
          <p className="hidetext">Innovation Center</p>
        </div>
        <div className="barra"></div>
        <div className="icone">
          <img src="/login/ico2.png" />
          <p className="hidetext">Carreiras</p>
        </div>
        <div className="barra"></div>
        <div className="icone">
          <img src="/login/ico3.png" />
          <p className="hidetext">Google Education</p>
        </div>
        <div className="barra"></div>
        <div className="icone">
          <img src="/login/ico4.png" />
          <p className="hidetext">Matrícula</p>
        </div>
        <div className="barra"></div>
        <div className="icone">
          <img src="/login/ico5.png" />
          <p className="hidetext">Ativar WiFi</p>
        </div>
      </div>
      <div className="perfil">
        <div className="foto">
          <img src="/login/chay.jpg" />
        </div>
        <div className="info">
          <p>Chay Suede</p>
          <p>Matricula: 1231132482</p>
          <a href="#">Perfil</a>
          <a href="/home">Sair</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
