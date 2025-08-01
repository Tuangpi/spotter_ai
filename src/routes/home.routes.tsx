import type { RouteObject } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Retail from "../pages/lens/Retail";
import Logistics from "../pages/lens/Logistics";
import Security from "../pages/lens/Security";
import TMS from "../pages/TMS";
import AboutUs from "../pages/sentinel/AboutUs";
import Careers from "../pages/sentinel/Careers";
import Press from "../pages/sentinel/Press";
import Extension from "../pages/Extension";
import SpotterApp from "../pages/SpotterApp";
import LoanCalculator from "../pages/LoanCalculator";
import Insights from "../pages/Insights";

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/retail",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Retail />,
      },
    ],
  },
  {
    path: "/logistics",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Logistics />,
      },
    ],
  },
  {
    path: "/security",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Security />,
      },
    ],
  },
  {
    path: "/tms",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <TMS />,
      },
    ],
  },
  {
    path: "/about-us",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/careers",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Careers />,
      },
    ],
  },
  {
    path: "/press",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Press />,
      },
    ],
  },
  {
    path: "/extension",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Extension />,
      },
    ],
  },
  {
    path: "/spotter_app",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <SpotterApp />,
      },
    ],
  },
  {
    path: "/loan_calculators",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LoanCalculator />,
      },
    ],
  },
  {
    path: "/insights",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Insights />,
      },
    ],
  },
];
