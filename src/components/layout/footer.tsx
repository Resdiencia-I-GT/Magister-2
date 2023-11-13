import "bootstrap/dist/css/bootstrap.min.css";
import CampusInfo from './components/campusInfo'; 

const Footer = () => {
  return (
    <footer className="footer">
      <CampusInfo />
      <div className="bottom-bar text-center">
        <div className="m-0">
          <hr />
          <p>&copy; 2023 Magister - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

