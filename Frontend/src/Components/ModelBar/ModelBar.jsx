import {useState} from "react";
import "./ModelBar.css";

export const ModelBar = ({selectedModel,setSelectedModel}) => {

	return (
		<div className="modelbar">
			<p className="" onClick={() => setSelectedModel("Roberta")} style={selectedModel === "Roberta" ? {background: "linear-gradient(90deg, #4A0707 0%, #1A1A1A 100%)", color: "#fff"} : {}}>
				Roberta
			</p>
			<p className="" onClick={() => setSelectedModel("Llama")} style={selectedModel === "Llama" ? {background: "linear-gradient(90deg, #4A0707 0%, #1A1A1A 100%)", color: "#fff"} : {}}>
				Llama
			</p>
			<p className="" onClick={() => setSelectedModel("gpt3.5")} style={selectedModel === "gpt3.5" ? {background: "linear-gradient(90deg, #4A0707 0%, #1A1A1A 100%)", color: "#fff"} : {}}>
				GPT 3.5
			</p>
			<p className="" onClick={() => setSelectedModel("Auto")} style={selectedModel === "Auto" ? {background: "linear-gradient(90deg, #4A0707 0%, #1A1A1A 100%)", color: "#fff"} : {}}>
				Auto
			</p>
		</div>
	);
};
