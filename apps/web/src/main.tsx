import { createRoot } from "react-dom/client";
import "./style.css";
import { Button } from '@repo/ui/components/ui/button'

const App = () => (
  <div>
    <Button>Click</Button>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
