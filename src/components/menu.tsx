import React from "react";
import "./menu.css";

const Menu: React.FC = () => {
  return (
    <aside>
      <input type="checkbox" id="menux" name="menux" value="menux" checked />
      <div className="menu">
        <img src="/login/Logo unit.gif" />
        <br />
        <label className="botao" htmlFor="menux">
          <div className="mais1"></div>
        </label>
        <p>PORTAL</p>
        <p>EXTENSÃO</p>
        <p>GRADUAÇÃO</p>
        <p>PROTOCOLO</p>
        <p>PÓS-GRADUAÇÃO</p>
        <p>SISTEMA EAD</p>
        <p>BIBLIOTECA VIRTUAL</p>
        <br />
      </div>
    </aside>
  );
};

export default Menu;
