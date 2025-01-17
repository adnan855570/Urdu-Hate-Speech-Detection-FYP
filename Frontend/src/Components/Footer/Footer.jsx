import { useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer_link_cont">
        <p className="footer_link" onClick={() => navigate('/')}>Home</p>
        <p className="footer_link">Techniques</p>
        <p className="footer_link">Models</p>
      </div>
    </div>
  );
};
