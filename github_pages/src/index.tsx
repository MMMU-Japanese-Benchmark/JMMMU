import { createRoot } from "react-dom/client";
import Main from "/@/pages/Main";
import "./index.css";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<Main />);
