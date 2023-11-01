// import React, { useState, useEffect } from "react";
import CampusInfo from "./components/campusInfo";

const Footer = () => {

  /* const [campusInfo, setCampusInfo] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://magister-2.free.mockoapp.net/teste");
        const info = await response.json();
        setCampusInfo(info);
      } catch (error) {
        console.error("Erro ao buscar dados da API: ", error);
      }
    };

    fetchData(); 

  }, []);  */

  return (
    <footer className="footer">
      <CampusInfo/>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2023 Magister. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
