import { LuCopy } from "react-icons/lu";
import "./index.css";

// BibTeX entry for the paper
const BIBTEX_ENTRY = `@article{onohara2024jmmmu,
  title={JMMMU: A Japanese Massive Multi-discipline Multimodal Understanding Benchmark for Culture-aware Evaluation},
  author={Onohara, Shota and Miyai, Atsuyuki and Imajuku, Yuki and Egashira, Kazuki and Baek, Jeonghun and Yue, Xiang and Neubig, Graham and Aizawa, Kiyoharu},
  journal={arXiv preprint arXiv:2410.17250},
  year={2024}
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
