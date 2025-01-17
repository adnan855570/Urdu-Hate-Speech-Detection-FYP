import { useNavigate } from "react-router-dom";
import PredictionContainer from "../../Components/Prediction/PredictionContainer";
import { TweetContainer } from "../../Components/Tweet/TweetContainer";
import "./Username_Page.css";

const Username_Page = () => {
  const navigate = useNavigate()

  return (
    <div className="text_main">
      <div className="url_top">
        <div className="url_search">
          <p>Add Username</p>
          <div>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
      <TweetContainer />
      <PredictionContainer />
      <p className="back_home" onClick={() => navigate("/")}>
        Back To Home
      </p>
    </div>)
}

export default Username_Page