import React, { useState, useEffect } from "react";

const Footer = () => {

  const [campusInfo, setCampusInfo] = useState<any[]>([]);

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

  }, []); 

  return (
    <footer className="footer">
      <div className="container">
        {campusInfo.map((campus, index) => (
          <div className="row" key={index}>
            <div className="col-md-6">
              <h3>{campus.campus}</h3>
              <p>{campus.endereco}</p>
              <p>{campus.cidade}</p>
              <p>Telefone: {campus.telefone}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2023 Magister. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
