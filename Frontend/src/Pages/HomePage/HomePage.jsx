import { Navbar } from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import Arrow from "../../assets/Arrow.png"
import { Footer } from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();

  const { userActive } = useSelector(state => state.UserState)

  const clickHandler = () => {
    if (userActive) {
      navigate('/model/text')
    } else {
      navigate('/login')
    }
  }
  return (
    <div className="home">
      <div className="home_top">
        <Navbar />
        <div className="heading_cont">
          <p className="heading_text">Hate</p>
          <p className="heading_text">Speech</p>
          <p className="heading_text">Detection</p>
        </div>
      </div>
      <div className="home_mid">
        <div className="mid_top">
          <div className="info_cont">
            <p className="info_heading">Info About NLP</p>
            <p className="info_text">
              Natural language processing (NLP) is a machine learning technology
              that gives computers the ability to interpret, manipulate, and
              comprehend human language.
            </p>
          </div>
          <img src="info_part.png" alt="" className="info_img" />
        </div>
        <div className="mid_bottom">
          <div className="start_btn_cont">
            <p className="start_text" >Start Here</p>
            <button className="start_btn" onClick={clickHandler}>
              <img src={Arrow} alt="" className="arrow_img" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
