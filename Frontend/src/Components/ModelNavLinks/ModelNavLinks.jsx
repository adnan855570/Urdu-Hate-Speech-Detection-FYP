import { useNavigate } from "react-router-dom";
import "./ModelNavLinks.css";

const ModelNavLinks = () => {
  const navigate = useNavigate();
  
  const currURL = window.location.href.split('/');
  const currTab = currURL[currURL.length - 1];
  
  return (
    <div className="model_links">
      {/* <p style={{borderBottom: currTab === "url" ? "1px solid black" : "none"}} onClick={() => navigate("/model/url")}>URL</p>
      <span className="verticle_line"></span> */}
      <p style={{borderBottom: currTab === "text" ? "1px solid black" : "none"}} onClick={() => navigate("/model/text")}>Text</p>
      {/* <span className="verticle_line"></span>
      <p style={{borderBottom: currTab === "username" ? "1px solid black" : "none"}} onClick={() => navigate("/model/username")}>Username</p> */}
    </div>
  );
};

export default ModelNavLinks;
