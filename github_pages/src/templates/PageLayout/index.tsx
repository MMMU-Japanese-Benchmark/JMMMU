import React from "react";
import { Footer } from "/@/components";

import "./index.css";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

export default PageLayout;
