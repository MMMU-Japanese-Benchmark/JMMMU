import { BibTeX, Example, Introduction, Leaderboard, Method, PaperMetadata, Result } from "/@/components";
import { PageLayout } from "/@/templates";
import "./index.css";

const Main = () => {
  return (
    <PageLayout>
      <PaperMetadata />
      <Introduction />
      <Method />
      <Example />
      <Leaderboard />
      <Result />
      <BibTeX />
    </PageLayout>
  );
};

export default Main;
