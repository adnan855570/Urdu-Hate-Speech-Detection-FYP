import {useNavigate} from "react-router-dom";
import "./Text_Page.css";
import {TweetContainer} from "../../Components/Tweet/TweetContainer";
import PredictionContainer from "../../Components/Prediction/PredictionContainer";
import {ModelBar} from "../../Components/ModelBar/ModelBar";
import {useEffect, useState} from "react";
import axios from "axios";
<<<<<<< HEAD
import {fetch_bert, fetch_gpt, fetch_roberta} from "../../lib/api/predictions";
=======
import {fetch_bert, fetch_gpt, fetch_llama, fetch_roberta} from "../../lib/api/predictions";
>>>>>>> 07b73f7 (new)

export const Text_Page = () => {
	const navigate = useNavigate();
	const [model, setModel] = useState("Roberta");
	const [inputText, setInputText] = useState("");
	const [loading, setLoading] = useState(false);
	const [modelOutput, setModelOutput] = useState({});

<<<<<<< HEAD
	const fetchPredictions = async (model_) => {
		setLoading(true);
		if (model === "Roberta") {
			const res = await fetch_roberta(inputText);
			setModelOutput({...modelOutput, Roberta: res});
		} else if (model === "gpt3.5") {
			const res = await fetch_gpt(inputText);
			setModelOutput({...modelOutput, "GPT 3.5": res});
		} else if (model === "Llama") {
			const res = await fetch_bert(inputText)
			setModelOutput({...modelOutput, Llama: res});
		} else if (model === 'Auto') {
			const res_roberta = await fetch_roberta(inputText);
			const res_gpt = await fetch_gpt(inputText);
			const res_bert = await fetch_bert(inputText);
			setModelOutput({Roberta: res_roberta, Llama: res_bert, "GPT 3.5": res_gpt});
		}
		setLoading(false);
=======
	console.log(modelOutput)

	const fetchPredictions = async (model_) => {
		try {
			setLoading(true);
			if (model === "Roberta") {
				const res = await fetch_roberta(inputText);
				setModelOutput({ Roberta: res});
			} else if (model === "gpt3.5") {
				const res = await fetch_gpt(inputText);
				setModelOutput({ "GPT 3.5": res});
			} else if (model === "Llama") {
				const res = await fetch_llama(inputText);
				setModelOutput({ Llama: res});
			} else if (model === "Auto") {
				const res_roberta = await fetch_roberta(inputText);
				const res_gpt = await fetch_gpt(inputText);
				const res_llama = await fetch_llama(inputText);
				setModelOutput({Roberta: res_roberta, Llama: res_llama, "GPT 3.5": res_gpt});
			}
			setLoading(false);
		} catch (error) {
			setLoading(false)
		}
>>>>>>> 07b73f7 (new)
	};

	return (
		<div className="text_main">
			<div className="url_top">
				<div className="url_search">
					<p>Enter Text here</p>
					<div>
						<input type="text" onChange={(e) => setInputText(e.target.value)} />
						<button onClick={fetchPredictions} disabled={loading}>
							{loading ? "Loading..." : "Predict"}
						</button>
					</div>
					{/* <div style={{flexDirection: "column", alignItems: "start"}} className="output_main">
						<p>Output</p>
						<div className="output_box"></div>
					</div> */}
				</div>
			</div>
			<ModelBar selectedModel={model} setSelectedModel={setModel} />
			{/* <TweetContainer /> */}
			<PredictionContainer data={modelOutput} />
			<p className="back_home" onClick={() => navigate("/")}>
				Back To Home
			</p>
		</div>
	);
};
