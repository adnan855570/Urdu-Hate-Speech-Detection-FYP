import {Navbar} from "../../Components/Navbar/Navbar";
import Arrow from "../../assets/Arrow.png";
import {Footer} from "../../Components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const sectionStyle = {
    marginBottom: "20px",
    padding: "15px",
    lineHeight: "1.6",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    marginBottom: "10px",
    color: "#2c3e50",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const subHeaderStyle = {
    marginTop: "10px",
    marginBottom: "5px",
    color: "#34495e",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "10px",
  };

  const codeStyle = {
    display: "block",
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
    fontFamily: "monospace",
  };

const Techniques = () => {
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
					<p className="heading_text">Techhniques</p>
				</div>
			</div>
			<div className="home_mid">
				(
				<div style={{margin: "20px", maxWidth: "800px"}}>
					<h1 style={headerStyle}>Deep Learning Techniques for Fine-Tuning</h1>
					<div style={sectionStyle}>
						<ol style={listStyle}>
							<li>
								<strong>Model-Specific Tokenization</strong>
								<ul style={listStyle}>
									<li>Use a tokenizer compatible with the model, such as BERT tokenizer or RoBERTa tokenizer.</li>
									<li>
										For Urdu text:
										<ul style={listStyle}>
											<li>Ensure the tokenizer supports Unicode characters for Urdu.</li>
											<li>Use a pre-trained tokenizer trained on multilingual datasets (like bert-base-multilingual-cased).</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<strong>Positional Embeddings</strong>
								<p>Ensure the input sequence length is appropriate for the model. Truncate or pad sequences to fit the model's maximum token length (e.g., 512 for BERT).</p>
							</li>
							<li>
								<strong>Transfer Learning</strong>
								<ul style={listStyle}>
									<li>Use a pre-trained language model and fine-tune it on a labeled dataset specific to hate speech detection.</li>
									<li>Update the weights only in the classification head (typically a fully connected layer).</li>
								</ul>
							</li>
							<li>
								<strong>Loss Function</strong>
								<ul style={listStyle}>
									<li>For binary classification: Binary Cross-Entropy Loss.</li>
									<li>For multi-class classification: Categorical Cross-Entropy Loss.</li>
								</ul>
							</li>
							<li>
								<strong>Optimization Techniques</strong>
								<ul style={listStyle}>
									<li>Optimizer: Use AdamW for better weight decay handling.</li>
									<li>Learning Rate Scheduler: Employ a scheduler like linear_with_warmup to gradually increase and then decrease the learning rate.</li>
									<li>Regularization: Use dropout layers to prevent overfitting.</li>
								</ul>
							</li>
							<li>
								<strong>Class Imbalance Handling</strong>
								<ul style={listStyle}>
									<li>Apply class weights in the loss function.</li>
									<li>
										Data augmentation techniques:
										<ul style={listStyle}>
											<li>Paraphrasing or back-translation (e.g., Urdu-English-Urdu).</li>
											<li>SMOTE (Synthetic Minority Oversampling Technique) to balance the dataset.</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<strong>Attention Mechanisms</strong>
								<p>Exploit self-attention layers of transformers to capture contextual relationships in Urdu text.</p>
							</li>
							<li>
								<strong>Evaluation Metrics</strong>
								<p>Use metrics suitable for imbalanced datasets: Precision, Recall, F1-score, and AUC-ROC.</p>
							</li>
						</ol>
					</div>

					<h1 style={headerStyle}>Data Cleaning for Urdu Text</h1>
					<div style={sectionStyle}>
						<p>Preprocessing Urdu text requires addressing specific challenges like script complexity, special characters, and diverse vocabulary. Here’s a step-by-step guide:</p>
						<ol style={listStyle}>
							<li>
								<strong>Remove Non-Urdu Characters</strong>
								<p>Strip out Latin characters, numbers, and other scripts if not relevant.</p>
								<code style={codeStyle}>urdu_text = re.sub(r'[a-zA-Z0-9]', '', urdu_text)</code>
							</li>
							<li>
								<strong>Normalize Unicode</strong>
								<p>Standardize Urdu characters by replacing variations (e.g., ے and ی or ھ and ہ) with a single form.</p>
							</li>
							<li>
								<strong>Remove Diacritics (Optional)</strong>
								<p>Eliminate diacritics (Zabar, Zer, Pesh) for cleaner text.</p>
								<code style={codeStyle}>urdu_text = re.sub(r'[\u064B-\u0652]', '', urdu_text)</code>
							</li>
							<li>
								<strong>Handle Stopwords</strong>
								<p>Remove common Urdu stopwords like "اور," "کے," "ہے." Use predefined Urdu stopword lists or create one based on the dataset.</p>
							</li>
							<li>
								<strong>Tokenization</strong>
								<p>Tokenize text using Urdu-specific tokenizers or pre-trained multilingual tokenizers. Libraries like Hazm or NLTK (with custom Urdu tokenization) are helpful.</p>
							</li>
							<li>
								<strong>Spelling Normalization</strong>
								<p>Correct commonly misspelled words using a custom Urdu spelling dictionary.</p>
							</li>
							<li>
								<strong>Handle Punctuation</strong>
								<p>Remove unnecessary punctuation marks or replace them with normalized equivalents (e.g., Urdu commas and periods).</p>
							</li>
							<li>
								<strong>Lemmatization or Stemming</strong>
								<p>Use Urdu stemmers (e.g., from UrduHack) to reduce words to their root forms.</p>
							</li>
							<li>
								<strong>Translate Emojis/Slang</strong>
								<p>Replace emojis with corresponding textual meaning. Translate Roman Urdu to standard Urdu if present.</p>
							</li>
							<li>
								<strong>Impute Missing Data</strong>
								<p>Handle incomplete or noisy tweets by removing them or imputing missing words based on context.</p>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Techniques;
