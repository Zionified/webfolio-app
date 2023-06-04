import { createBrowserRouter } from "react-router-dom"
import Index from "./pages/Index"

const router = createBrowserRouter([
    {
        path: "/archive",
        lazy: () => import("./pages/Archive"),
    },
    {
        path: "/",
        element: <Index></Index>,
    },
])

export default router
