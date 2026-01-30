import { Outlet } from "react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ScrollToTop from "./scroll";

export function AppLayout() {
  return (
    <div
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
      dir="rtl"
    >
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
