import { Figure } from "/@/molecules";
import overviewFigure from "/@/assets/overview.png";
import "./index.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <h1 className="introduction-title">Introduction</h1>
      <div className="introduction-content">
        <span>
          We introduce{" "}
          <b>
            JMMMU (<i>Japanese MMMU</i>)
          </b>
          , a multimodal benchmark that can truly evaluate LMM performance in Japanese.{" "}
        </span>
        <span>
          To create JMMMU, we first carefully analyzed the existing{" "}
          <a href="https://huggingface.co/datasets/MMMU/MMMU" target="_blank" rel="noreferrer noopener">
            MMMU benchmark
          </a>{" "}
          and examined its cultural dependencies.{" "}
        </span>
        <span>
          Then, for questions in culture-agnostic subjects, we employed native Japanese speakers who are experts for
          each subject, and asked to translate <b>both the texts and images</b> (e.g. the title of a graph) into
          Japanese.{" "}
        </span>
        <span>
          Further, we replaced culture-dependent subjects with new subjects that are well aligned with Japanese culture.{" "}
        </span>
        <span>
          As a result, JMMMU consists of <b>720 translation-based (Culture-Agnostic)</b> and{" "}
          <b>600 brand-new questions (Culture-Specific)</b>, for <b>a total of 1,320 questions</b>, updating the size of
          the existing culture-aware Japanese benchmark by &gt;10x.{" "}
        </span>
      </div>
      <Figure
        image={overviewFigure} // eslint-disable-line
        altText="Overview of our JMMMU dataset"
        caption={
          <>
            Figure 1: <b>Overview of our JMMMU dataset.</b> JMMMU consists of{" "}
            <b style={{ color: "#7db7cf", fontWeight: "500" }}>720 Culture-Agnostic questions</b> and{" "}
            <b style={{ color: "#96be87", fontWeight: "500" }}>600 Culture-Specific questions</b>, for a total of 1,320
            questions.
          </>
        }
      />
    </div>
  );
};

export default Introduction;
