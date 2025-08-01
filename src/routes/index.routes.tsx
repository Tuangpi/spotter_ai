import { createBrowserRouter } from "react-router";
import { homeRoutes } from "./home.routes";

export const router = createBrowserRouter([...homeRoutes]);
