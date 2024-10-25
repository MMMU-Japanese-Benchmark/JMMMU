import { LuCopy } from "react-icons/lu";
import "./index.css";

// BibTeX entry for the paper
const BIBTEX_ENTRY = `@misc{onohara2024jmmmu,
  title={JMMMU: A Japanese Massive Multi-discipline Multimodal Understanding Benchmark},
  author={Shota Onohara and Atsuyuki Miyai and Yuki Imajuku and Kazuki Egashira and Jeonghun Baek and Xiang Yue and Graham Neubig and Kiyoharu Aizawa},
  eprint={2410.17250},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://arxiv.org/abs/2410.17250},
  year={2024},
  howpublished={arXiv:2410.17250}
}`;

const copyClipboard = () => {
  navigator.clipboard.writeText(BIBTEX_ENTRY).catch((error) => {
    console.error("Failed to copy BibTeX entry to clipboard", error);
  });
};

const BibTeX = () => {
  return (
    <div className="bibtex">
      <h1 className="bibtex-title">BibTeX</h1>
      <pre className="bibtex-entry">
        <code>{BIBTEX_ENTRY}</code>
        <button className="bibtex-copy-button" onClick={copyClipboard}>
          <LuCopy />
        </button>
      </pre>
    </div>
  );
};

export default BibTeX;
