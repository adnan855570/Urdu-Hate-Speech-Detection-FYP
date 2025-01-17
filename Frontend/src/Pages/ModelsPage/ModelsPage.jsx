import {Navbar} from "../../Components/Navbar/Navbar";
import Arrow from "../../assets/Arrow.png";
import {Footer} from "../../Components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const sectionStyle = {
    marginBottom: "30px",
    padding: "20px",
    lineHeight: "1.6",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    marginBottom: "10px",
  };

  const listStyle = {
    paddingLeft: "20px",
  };

  const nestedListStyle = {
    paddingLeft: "40px",
  };

const ModelsPage = () => {
	const navigate = useNavigate();

	const {userActive} = useSelector((state) => state.UserState);

	const clickHandler = () => {
		if (userActive) {
			navigate("/model/text");
		} else {
			navigate("/login");
		}
	};
	return (
		<div className="home">
			<div className="home_top">
				<Navbar />
				<div className="heading_cont">
					<p className="heading_text">Models</p>
				</div>
			</div>
			<div className="home_mid">
				<div style={{margin: "20px"}}>
					<div style={sectionStyle}>
						<h2 style={headerStyle}>1. BERT (Bidirectional Encoder Representations from Transformers)</h2>
						<h3>History</h3>
						<p>
							Introduced by Google AI in 2018 in the paper <i>"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding."</i>
						</p>
						<p>It revolutionized NLP by introducing a bidirectional pre-training method, meaning it looks at both the left and right context of a word simultaneously.</p>
						<p>
							BERT's success lies in its use of the Transformer encoder architecture, which had been introduced earlier in the 2017 paper <i>"Attention is All You Need."</i>
						</p>

						<h3>Architecture</h3>
						<p>
							<strong>Transformer Encoder-Based Model:</strong> BERT uses only the encoder part of the Transformer architecture.
						</p>
						<p>
							<strong>Bidirectional:</strong> Unlike traditional models that process text sequentially, BERT processes the entire sequence bidirectionally.
						</p>
						<h4>Key Components:</h4>
						<ul style={listStyle}>
							<li>
								<strong>Token Embeddings:</strong> Converts input words (or subwords) into dense vectors.
							</li>
							<li>
								<strong>Positional Embeddings:</strong> Adds position information to the input embeddings.
							</li>
							<li>
								<strong>Self-Attention:</strong> Captures relationships between all tokens in the input.
							</li>
							<li>
								<strong>Feed-Forward Layers:</strong> Fully connected layers with activation functions.
							</li>
							<li>
								<strong>Special Tokens:</strong>
								<ul style={nestedListStyle}>
									<li>
										<strong>[CLS]:</strong> Added at the beginning for classification tasks.
									</li>
									<li>
										<strong>[SEP]:</strong> Marks the end of a sentence or separates two sentences.
									</li>
								</ul>
							</li>
						</ul>

						<h4>Pre-training Objectives:</h4>
						<ul style={listStyle}>
							<li>
								<strong>Masked Language Modeling (MLM):</strong> Randomly masks words and predicts them.
							</li>
							<li>
								<strong>Next Sentence Prediction (NSP):</strong> Predicts whether two sentences are sequential.
							</li>
						</ul>

						<h4>Variants:</h4>
						<ul style={listStyle}>
							<li>
								<strong>BERT-base:</strong> 12 layers, 110M parameters.
							</li>
							<li>
								<strong>BERT-large:</strong> 24 layers, 340M parameters.
							</li>
						</ul>
					</div>

					<div style={sectionStyle}>
						<h2 style={headerStyle}>2. RoBERTa (Robustly Optimized BERT Approach)</h2>
						<h3>History</h3>
						<p>
							Developed by Facebook AI in 2019, introduced in the paper <i>"RoBERTa: A Robustly Optimized BERT Pretraining Approach."</i>
						</p>
						<p>It builds on BERT but optimizes the pretraining procedure to improve performance.</p>

						<h3>Architecture</h3>
						<p>RoBERTa retains the same underlying architecture as BERT but introduces optimizations:</p>
						<ul style={listStyle}>
							<li>
								<strong>No Next Sentence Prediction (NSP):</strong> Eliminates this task to focus solely on MLM, as NSP was found to hurt performance.
							</li>
							<li>
								<strong>Dynamic Masking:</strong> Dynamically masks words during each training epoch.
							</li>
							<li>
								<strong>Larger Batch Size:</strong> Trains with significantly larger datasets and batch sizes.
							</li>
							<li>
								<strong>More Training Data:</strong> RoBERTa was trained on 160GB of data compared to BERT’s 16GB.
							</li>
							<li>
								<strong>Longer Training:</strong> Trains for longer epochs than BERT.
							</li>
						</ul>
						<p>
							<strong>Key Difference:</strong> RoBERTa achieves superior performance by fine-tuning BERT's training techniques without changing the architecture.
						</p>
					</div>

					<div style={sectionStyle}>
						<h2 style={headerStyle}>3. GPT-3.5 Turbo</h2>
						<h3>History</h3>
						<p>
							Developed by OpenAI and released in 2023 as part of the GPT-4 ecosystem. It builds on the architecture of GPT-3 (Generative Pre-trained Transformer), first introduced in 2020 in the
							paper <i>"Language Models are Few-Shot Learners."</i>
						</p>
						<p>GPT-3.5 Turbo is optimized for efficiency and lower latency, used in ChatGPT applications.</p>

						<h3>Architecture</h3>
						<p>
							<strong>Transformer Decoder-Based Model:</strong> Unlike BERT, which is encoder-only, GPT-3.5 (and all GPT models) uses only the Transformer decoder.
						</p>
						<p>The decoder processes input text sequentially (left-to-right) for language generation.</p>
						<h4>Key Components:</h4>
						<ul style={listStyle}>
							<li>
								<strong>Token Embeddings:</strong> Converts text into subword-level embeddings.
							</li>
							<li>
								<strong>Positional Embeddings:</strong> Adds sequence information.
							</li>
							<li>
								<strong>Masked Self-Attention:</strong> Ensures the model can only attend to previous tokens during generation (causal attention).
							</li>
							<li>
								<strong>Feed-Forward Layers:</strong> Fully connected layers with activation functions.
							</li>
						</ul>

						<h4>Pre-training Objective:</h4>
						<p>Predicts the next token in a sequence, a task known as causal language modeling.</p>

						<h4>Size:</h4>
						<ul style={listStyle}>
							<li>
								<strong>GPT-3:</strong> 175 billion parameters.
							</li>
							<li>
								<strong>GPT-3.5 and Turbo variants:</strong> Likely have similar size but are optimized for inference speed and cost-effectiveness.
							</li>
						</ul>

						<h4>Fine-Tuning:</h4>
						<p>OpenAI employs techniques like RLHF (Reinforcement Learning from Human Feedback) to align the model’s responses with human preferences.</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ModelsPage;
