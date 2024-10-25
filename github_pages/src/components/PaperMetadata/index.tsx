import { FaGithub, FaRegFilePdf, FaTwitter } from "react-icons/fa";

import { AFFILIATION_COLORS, Author, AuthorProps, LinkButton, LinkButtonProps } from "/@/molecules";
import "./index.css";

// Paper title
const TITLE = (
  <>
    <img src="favicon.ico" height="64px" style={{ position: "relative", bottom: "-0.25em" }} /> JMMMU
  </>
);
const SUBTITLE = <>A Japanese Massive Multi-discipline Multimodal Understanding Benchmark</>;

// Authors of the paper
const AUTHORS: AuthorProps[] = [
  {
    name: "Shota Onohara",
    affiliation: [1],
    annotation1: "†",
    url: "https://www.linkedin.com/in/shota-onohara/",
  },
  {
    name: "Atsuyuki Miyai",
    affiliation: [1],
    annotation1: "†",
    url: "https://atsumiyai.github.io/",
  },
  {
    name: "Yuki Imajuku",
    affiliation: [1],
    annotation1: "†",
    url: "https://imajuku.tech",
  },
  {
    name: "Kazuki Egashira",
    affiliation: [1],
    annotation1: "†",
    url: "https://www.linkedin.com/in/kazuki-egashira",
  },
  {
    name: "Jeonghun Baek",
    affiliation: [1],
    annotation1: "†",
    url: "https://jeonghunbaek.net/",
  },
  {
    name: "Xiang Yue",
    affiliation: [2],
    url: "https://xiangyue9607.github.io/",
  },
  {
    name: "Graham Neubig",
    affiliation: [2],
    url: "https://www.phontron.com/index.php",
  },
  {
    name: "Kiyoharu Aizawa",
    affiliation: [1],
    url: "https://scholar.google.co.jp/citations?user=CJRhhi0AAAAJ",
    isLast: true,
  },
];

// Description of annotations
const AFFILIATIONS = ["dummy for index 0", "The University of Tokyo", "Carnegie Mellon University"];
const ANNOTATION_DESCRIPTION = ["†: Core Contributors"];

const LINK_BUTTONS: LinkButtonProps[] = [
  {
    url: "https://arxiv.org/abs/2410.17250",
    children: (
      <>
        <FaRegFilePdf />
        &nbsp;Paper (arXiv)
      </>
    ),
  },
  {
    url: "https://huggingface.co/datasets/JMMMU/JMMMU",
    children: <>🤗&nbsp;JMMMU</>,
  },
  {
    url: "https://huggingface.co/spaces/JMMMU/JMMMU_Leaderboard",
    children: <>🏆&nbsp;HF Leaderboard</>,
  },
  {
    url: "https://github.com/EvolvingLMMs-Lab/lmms-eval",
    children: (
      <>
        <FaGithub />
        &nbsp;Code
      </>
    ),
  },
  {
    url: "https://x.com/AtsuMiyaiAM/status/1840822835851510028",
    children: (
      <>
        <FaTwitter />
        &nbsp;Twitter (English)
      </>
    ),
  },
  {
    url: "https://x.com/y_imjk/status/1840910051596517763",
    children: (
      <>
        <FaTwitter />
        &nbsp;Twitter (Japanese)
      </>
    ),
  },
];

const PaperMetadata = () => {
  return (
    <div className="paper-metadata">
      <h1 className="paper-title">{TITLE}</h1>
      <h2 className="paper-subtitle">{SUBTITLE}</h2>
      <div className="authors">
        {AUTHORS.map((author, index) => (
          <Author key={`author${index}`} {...author} />
        ))}
      </div>
      <div className="authors-affiliations">
        {AFFILIATIONS.map((affiliation, index) => {
          if (index === 0) return null;
          return (
            <span key={`affiliation${index}`}>
              <span style={{ color: AFFILIATION_COLORS[index] }} key={`affiliation${index}head`}>
                {index}
              </span>
              : {affiliation}
              {index !== AFFILIATIONS.length - 1 && <>,&nbsp;</>}
            </span>
          );
        })}
      </div>
      <div className="annotation-description">
        {ANNOTATION_DESCRIPTION.map((description, index) => (
          <p key={`description${index}`}>{description}</p>
        ))}
      </div>
      <div className="link-buttons">
        {LINK_BUTTONS.map((linkButton, index) => (
          <LinkButton key={`linkButton${index}`} url={linkButton.url}>
            {linkButton.children}
          </LinkButton>
        ))}
      </div>
    </div>
  );
};

export default PaperMetadata;
