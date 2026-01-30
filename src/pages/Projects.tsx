import { Link } from "react-router";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";

import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import { projectCategories } from "@/data/projectsData";
import { GeometricPattern, SectionHeader } from "@/components/GeometricPattern";

export function Projects() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setDirection] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % projectCategories.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + projectCategories.length) % projectCategories.length
    );
  };

  //   enter: (direction: number) => ({
  //     x: direction > 0 ? 1000 : -1000,
  //     opacity: 0,
  //     scale: 0.8
  //   }),
  //   center: {
  //     zIndex: 1,
  //     x: 0,
  //     opacity: 1,
  //     scale: 1
  //   },
  //   exit: (direction: number) => ({
  //     zIndex: 0,
  //     x: direction < 0 ? 1000 : -1000,
  //     opacity: 0,
  //     scale: 0.8
  //   })
  // };

  // Get visible slides (current + 2 on each side)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentSlide + i + projectCategories.length) %
        projectCategories.length;
      slides.push({ ...projectCategories[index], offset: i });
    }
    return slides;
  };

  return (
    <section
      id="projects"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern position="top-right" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className={`w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Building2 className="text-primary" size={60} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
          <SectionHeader title="مشاريعنا" />
          <p className="text-foreground text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            استكشف تنوع وتميز مشاريعنا في مختلف القطاعات - من السكنية إلى
            التجارية والصناعية
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative mb-20">
          {/* Main Slider Container */}
          <div className="relative h-[600px] flex items-center justify-center overflow-visible">
            {getVisibleSlides().map((category) => {
              const offset = category.offset;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${category.id}-${currentSlide}`}
                  initial={false}
                  animate={{
                    x: offset * 380,
                    scale: isCenter ? 1 : 0.75,
                    opacity: Math.abs(offset) > 1 ? 0.3 : isCenter ? 1 : 0.6,
                    zIndex: isCenter ? 10 : 5 - Math.abs(offset)
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className="absolute"
                  style={{
                    pointerEvents: isCenter ? "auto" : "none"
                  }}
                >
                  <Link
                    to={`/projects/${category.id}`}
                    className={`block ${!isCenter && "pointer-events-none"}`}
                  >
                    <div
                      className={`group relative w-[350px] h-[500px] rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                        isCenter
                          ? "border-primary shadow-2xl shadow-primary/40 cursor-pointer"
                          : "border-primary/20"
                      } ${
                        theme === "dark"
                          ? "bg-gradient-to-b from-[#1a1a1a] to-[#252525]"
                          : "bg-gradient-to-b from-white to-gray-50"
                      }`}
                    >
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Icon Container */}
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
                        <motion.div
                          animate={
                            isCenter
                              ? {
                                  scale: [1, 1.1, 1],
                                  rotate: [0, 5, -5, 0]
                                }
                              : {}
                          }
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={`relative ${
                            isCenter ? "w-40 h-40" : "w-32 h-32"
                          } rounded-full border-4 border-primary flex items-center justify-center transition-all duration-500 ${
                            theme === "dark"
                              ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                              : "bg-gradient-to-br from-gray-50 to-gray-100"
                          }`}
                        >
                          <div className="text-primary">{category.icon}</div>
                          {isCenter && (
                            <motion.div
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 rounded-full bg-primary"
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <h3
                          className={`text-primary mb-4 transition-all duration-500 ${
                            isCenter ? "text-3xl" : "text-2xl"
                          }`}
                        >
                          {category.title}
                        </h3>

                        <p
                          className={`text-muted-foreground leading-relaxed transition-opacity duration-500 ${
                            isCenter ? "opacity-100" : "opacity-60"
                          }`}
                        >
                          {category.description}
                        </p>

                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6"
                          >
                            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                              <span className="text-lg">استكشف المشاريع</span>
                              <ChevronLeft
                                className="group-hover:-translate-x-1 transition-transform"
                                size={20}
                              />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                        <div
                          className={`absolute top-0 right-0 w-full h-full border-t-4 border-r-4 border-primary rounded-tr-3xl`}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
                        <div
                          className={`absolute bottom-0 left-0 w-full h-full border-b-4 border-l-4 border-primary rounded-bl-3xl`}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border-2 border-primary/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
            aria-label="Previous"
          >
            <ChevronRight className="text-primary" size={32} />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border-2 border-primary/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
            aria-label="Next"
          >
            <ChevronLeft className="text-primary" size={32} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {projectCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3 bg-gradient-to-r from-primary to-[#a88b4d]"
                    : "w-3 h-3 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-gray-50 to-white"
            }`}
          >
            <div className="text-5xl text-primary mb-3">395+</div>
            <div className="text-foreground text-lg">إجمالي المشاريع</div>
          </div>

          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-gray-50 to-white"
            }`}
          >
            <div className="text-5xl text-primary mb-3">98%</div>
            <div className="text-foreground text-lg">معدل رضا العملاء</div>
          </div>

          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-gray-50 to-white"
            }`}
          >
            <div className="text-5xl text-primary mb-3">15+</div>
            <div className="text-foreground text-lg">سنوات من الخبرة</div>
          </div>

          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-gray-50 to-white"
            }`}
          >
            <div className="text-5xl text-primary mb-3">6</div>
            <div className="text-foreground text-lg">قطاعات متنوعة</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
