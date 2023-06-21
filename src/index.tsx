import App from "./App"
import "@/assets/styles/index.scss"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root") as HTMLElement) // createRoot(container!) if you use TypeScript
root.render(<App />)
