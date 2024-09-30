import "./index.css";

const Result = () => {
  return (
    <div className="result">
      <h1 className="result-title">Findings</h1>
      <div className="result-content">
        <span>In the previous Leaderboard section, we provide the evaluation results on our JMMMU benchmark. </span>
        <span>In this section, we summarize our key observations.</span>
        {/* Improvement */}
        <div>
          <h2>Great Room for Improvement</h2>
          <span>
            In our experiment, the performance is up to 40.3% for open-source, and 58.0% for closed-source models,
            leaving great room for improvement.{" "}
          </span>
          <span>
            This also indicates the significant gap in the performance between open-source and closed-source models.
          </span>
        </div>
        {/* Culture-agnostic Split */}
        <div>
          <h2>Culture-Agnostic (CA) Split: The Effect of Translation</h2>
          <span>
            The score on the CA split is lower than its English counterpart for most of the models except for LLaVA
            CALM2 (a Japanese LMM) and GPT-4o.{" "}
          </span>
          <span>
            This suggests that, even for the same questions, many models perform worse when asked in Japanese.
          </span>
        </div>
        {/* Culture-specific Split */}
        <div>
          <h2>Culture-Specific (CS) Split: Capturing Deep Understanding of Japanese Culture</h2>
          <span>
            Even when models perform similarly on the CA split, their performance on the CS split can vary
            significantly.{" "}
          </span>
          <span>
            For instance, (i) Phi-3 Vision (no multilingual support), (ii) Phi-3.5 Vision (a multilingual model with
            Japanese support), and (iii) EvoVLM-JP v2 (a Japanese LMM) show similar results on the CA split (31.4
            &plusmn; 0.8%).{" "}
          </span>
          <span>
            However, their CS scores differ markedly: (i) Phi-3 Vision scores worse (-6.4%), (ii) Phi-3.5 Vision scores
            slightly better (+3.5%), and (iii) EvoVLM-JP v2 excels (+10.7%).{" "}
          </span>
          <span>
            This highlights how Japanese-focused training can significantly impact performance in Japanese-specific
            contexts, and JMMMU is capable of capturing these differences.
          </span>
        </div>
        {/* Scores on Japanese Heritage */}
        <div>
          <h2>Scores on Japanese Heritage</h2>
          <span>
            Among culture-specific subjects, the performances of open-source models are particularly low in Japanese
            Heritage.{" "}
          </span>
          <span>
            Even the best-performing open-source model (InternVL2 8B) scores 31.3% lower than GPT-4o in Japanese
            Heritage, while in other subjects, there is at least one open-source model whose gap from GPT-4o is &le;
            18%, indicating the inadequacy of the open-source model in this domain.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Result;
