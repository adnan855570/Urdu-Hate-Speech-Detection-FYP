import Prediction from "./Prediction"
import "./prediction.css"


const PredictionContainer = ({data}) => {
  console.log(data)
  return (
    <div className="prediction_main">
        <p className="prediction_heading">Predictions</p>
        <div className="prediction_cont">
            {Object.keys(data)?.map((value, key) => <Prediction modelName={value} prediction={data[value]}/>)}
        </div>
    </div>
  )
}

export default PredictionContainer