import { createRoot } from "react-dom/client";
import "./style.css";
import { LoginForm } from "@repo/ui/components/ui-custom/login-form"

const App = () => (
  <>
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  </>
);

createRoot(document.getElementById("app")!).render(<App />);
