import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import ProjectCategoryPage from "../pages/ProjectCategoryPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Contact } from "@/pages/Contact";
import { AppLayout } from "@/components/AppLayout";
import { Projects } from "@/pages/Projects";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: HomePage
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/services",
        Component: Services
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "/projects",
        Component: Projects
      },
      {
        path: "/projects/:category",
        Component: ProjectCategoryPage
      },
      {
        path: "/projects/:category/:id",
        Component: ProjectDetailPage
      },
      {
        path: "/services/:id",
        Component: ServiceDetailPage
      }
    ]
  }
]);
