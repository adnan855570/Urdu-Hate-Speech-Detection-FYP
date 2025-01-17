import { useNavigate } from "react-router-dom";
import PredictionContainer from "../../Components/Prediction/PredictionContainer";
import { TweetContainer } from "../../Components/Tweet/TweetContainer";
import "./URL_Page.css";
import axios from "axios";
import { ModelBar } from "../../Components/ModelBar/ModelBar";

export const URL_Page = () => {
  const navigate = useNavigate()

  return (
    <div className="url_main">
      <div className="url_top">
        <div className="url_search">
          <p>Enter URL here</p>
          <div>
            <input type="text" />
            <button>Search</button>
          </div> 
        </div>
      </div>
      <ModelBar />
      <TweetContainer />
      <PredictionContainer  />
      <p className="back_home" onClick={() => navigate("/")}>Back To Home</p>
    </div>
  );
};
