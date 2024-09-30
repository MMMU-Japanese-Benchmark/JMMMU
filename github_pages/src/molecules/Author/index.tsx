import "./index.css";

interface AuthorProps {
  name: string;
  affiliation: number[];
  annotation1?: string;
  annotation2?: string;
  url?: string;
  isLast?: boolean;
}
export type { AuthorProps };

const AFFILIATION_COLORS = ["", "#6fbf73", "#ed4b82", "#9400d3", "#4169E1", "#ffac33", "#1e90ff", "#ff69b4"];
export { AFFILIATION_COLORS };

const Author = ({ name, affiliation, annotation1, annotation2, url, isLast }: AuthorProps) => {
  return (
    <div className="author">
      {url ? (
        <a className="author-website" href={url} target="_blank" rel="noreferrer noopener">
          <span className="author-name">{name}</span>
        </a>
      ) : (
        <span className="author-name">{name}</span>
      )}
      <span className="author-annotation">
        {annotation1}
        {affiliation.map((num) => (
          <span style={{ color: AFFILIATION_COLORS[num] }} key={num}>
            {num}
          </span>
        ))}
        {annotation2}
      </span>
      {(isLast === undefined || !isLast) && <span className="author-separator">{","}&nbsp;</span>}
    </div>
  );
};
export default Author;
