import "./prediction.css";

const Prediction = ({modelName, prediction}) => {
  return (
    <div className="prediction">
      <div className="pred_top">
        <p>{prediction === '0' ? 'Not Hate' : 'Hate'}</p>
      </div>
      <div className="pred_bottom">
        <div className="pred_bottom_inner">
          <div className="pred_bottom_info"><p>Model</p></div>
          <div className="pred_bottom_info"><p>Accuracy</p></div>
        </div>
        <div className="pred_bottom_inner">
          <div className="pred_bottom_info"><p>{modelName}</p></div>
          <div className="pred_bottom_info"><p>90%</p></div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
