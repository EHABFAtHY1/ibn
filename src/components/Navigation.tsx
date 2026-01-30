import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate, useLocation } from "react-router";

import datrklog1 from "../assests/log_4.jpeg";
import datrklog2 from "../assests/logo-2.jpeg";
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const goHome = () => {
    navigate("/");
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-primary/30 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={goHome}>
            <div className="flex flex-col items-end">
              <div className="">
                {theme === "dark" ? (
                  <div className="">
                    <img
                      src={datrklog1}
                      alt="Company Logo"
                      className="h-18 w-auto rounded-lg"
                    />
                  </div>
                ) : (
                  <img
                    src={datrklog2}
                    alt="Company Logo"
                    className="h-18 w-auto"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <button
                onClick={goHome}
                className="text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                الرئيسية
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                من نحن
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => navigate("/services")}
                className="text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                خدماتنا
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("quality")}
                className="text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                معايير الجودة
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                مشاريعنا
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-8 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                تواصل معنا
              </button>
              <button
                onClick={toggleTheme}
                className="text-primary p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="تبديل الثيم"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-primary p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="تبديل الثيم"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-primary/20 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={goHome}
              className="block w-full text-right text-foreground hover:text-primary hover:bg-secondary py-3 px-4 rounded-lg transition-all duration-300"
            >
              الرئيسية
            </button>

            {/* تعديل زر من نحن */}
            <button
              onClick={() => {
                navigate("/about");
                setIsOpen(false);
              }}
              className="block w-full text-right text-foreground hover:text-primary hover:bg-secondary py-3 px-4 rounded-lg transition-all duration-300"
            >
              من نحن
            </button>

            {/* تعديل زر خدماتنا */}
            <button
              onClick={() => {
                navigate("/services");
                setIsOpen(false);
              }}
              className="block w-full text-right text-foreground hover:text-primary hover:bg-secondary py-3 px-4 rounded-lg transition-all duration-300"
            >
              خدماتنا
            </button>

            {/* زر معايير الجودة يبقى كما هو لأنه غالباً Scroll في الصفحة الرئيسية */}
            <button
              onClick={() => scrollToSection("quality")}
              className="block w-full text-right text-foreground hover:text-primary hover:bg-secondary py-3 px-4 rounded-lg transition-all duration-300"
            >
              معايير الجودة
            </button>

            {/* تعديل زر مشاريعنا */}
            <button
              onClick={() => {
                navigate("/projects");
                setIsOpen(false);
              }}
              className="block w-full text-right text-foreground hover:text-primary hover:bg-secondary py-3 px-4 rounded-lg transition-all duration-300"
            >
              مشاريعنا
            </button>

            {/* تعديل زر تواصل معنا */}
            <button
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
              className="block w-full text-right bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
