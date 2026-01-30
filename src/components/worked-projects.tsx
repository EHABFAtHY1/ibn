import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ChevronLeft,
  ChevronRight,
  HardHat,
  MapPin,
  Ruler,
} from "lucide-react";
import { workingProjects } from "@/data/projectsData";

export function WorkedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % workingProjects.length);
  const handlePrev = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + workingProjects.length) % workingProjects.length
    );

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentSlide + i + workingProjects.length) % workingProjects.length;
      slides.push({ ...workingProjects[index], offset: i });
    }
    return slides;
  };

  return (
    <div className="relative mb-20 py-10">
      {/* Header Section */}
      <div className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className={`w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center relative z-10 ${
                theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"
              }`}
            >
              <HardHat className="text-primary" size={52} />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          </div>
        </div>
        <h2 className="text-5xl text-primary mb-6 font-bold">
          مشاريعنا الجارية
        </h2>
        <div className="flex justify-center mb-6">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
          ننفذ رؤيتنا على أرض الواقع من خلال مشاريع إنشائية متميزة
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {getVisibleSlides().map((project, index) => {
          const offset = project.offset;
          const isCenter = offset === 0;

          return (
            <motion.div
              key={`${project.title}-${currentSlide}-${index}`}
              initial={false}
              animate={{
                x: offset * 380,
                scale: isCenter ? 1 : 0.75,
                opacity: Math.abs(offset) > 1 ? 0 : isCenter ? 1 : 0.6,
                zIndex: isCenter ? 10 : 5 - Math.abs(offset),
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute"
            >
              <Link
                to={isCenter ? `/projects/${project.id}` : "#"}
                className={`block ${
                  !isCenter && "pointer-events-none cursor-default"
                }`}
              >
                <div
                  className={`group relative w-[350px] h-[500px] rounded-[2rem] overflow-hidden border-2 transition-all duration-500 
                  ${
                    isCenter
                      ? "border-primary shadow-2xl shadow-primary/40"
                      : "border-primary/20"
                  } 
                  bg-[#1a1a1a]`}
                >
                  {/* Project Image Background */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                  {/* Badge: Status */}
                  {project.status && (
                    <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {project.status}
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-right">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin size={18} />
                      <span className="text-sm font-medium">
                        {project.location}
                      </span>
                    </div>

                    <h3 className="text-white text-3xl font-bold mb-3 leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-4 text-gray-300 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <Ruler size={16} className="text-primary" />
                        <span>{project.area}</span>
                      </div>
                    </div>

                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-all w-full justify-center font-bold"
                      >
                        <span>تفاصيل المشروع</span>
                        <ChevronLeft size={20} />
                      </motion.div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all"
        >
          <ChevronRight size={30} />
        </button>
        <div className="flex gap-3">
          {workingProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-10 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-4 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all"
        >
          <ChevronLeft size={30} />
        </button>
      </div>
    </div>
  );
}
