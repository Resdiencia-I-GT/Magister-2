import "bootstrap/dist/css/bootstrap.min.css";
import "src/style/CampusInfo.css"; // Adicione um arquivo de estilo para customizações específicas

const CampusInfo = async () => {
  const response = await fetch("https://magister-2.free.mockoapp.net/teste1");
  const campusInfo = await response.json();

  return (
    <div className="campus-container">
      {campusInfo.map((campus: any) => (
        <div key={campus.id} className="campus-card">
          <h5>{campus.campus}</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.endereco}</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.CEP}</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.telefone}</a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link p-0 text-body-secondary">{campus.cidade}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CampusInfo;
