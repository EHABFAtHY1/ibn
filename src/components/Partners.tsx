import { Award, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useState, useEffect } from "react";
import { partners } from "@/data/projectsData";

export function Partners() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // شعارات الشركاء

  // Auto-scroll
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % partners.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  // Get visible partners (5 at a time)
  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push({ ...partners[index], position: i });
    }
    return visible;
  };

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#1a1a1a] to-[#252525]"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className={`w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Handshake className="text-primary" size={52} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
          <h2 className="text-5xl text-primary mb-6">شركاؤنا</h2>
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            نفتخر بشراكاتنا الاستراتيجية مع كبرى الشركات والمؤسسات في المملكة
          </p>
        </div>

        {/* Animated Slider */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Container */}
          <div className="relative h-80 flex items-center justify-center overflow-hidden">
            {/* Infinite Scroll Animation */}
            <div className="flex gap-8 items-center">
              {getVisiblePartners().map((partner, index) => {
                const position = partner.position;
                const isCenter = position === 2;

                return (
                  <motion.div
                    key={`-${currentIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.5, x: 300 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1.2 : 0.9,
                      x: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.5, x: -300 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`group border border-primary/20 rounded-2xl p-8 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col items-center justify-center w-64 h-64 relative overflow-hidden ${
                        theme === "dark"
                          ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                          : "bg-gradient-to-b from-white to-gray-50"
                      }`}
                    >
                      {/* Animated Background Pattern */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 opacity-5"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary" />
                      </motion.div>

                      {/* Partner Logo with animated border */}
                      <motion.div
                        animate={
                          isCenter
                            ? {
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-32 h-32 mb-6 rounded-xl overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-all duration-500 relative"
                      >
                        <img
                          src={partner.logo}
                          alt={"image"}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500" />

                        {/* Animated Ring */}
                        <motion.div
                          animate={
                            isCenter
                              ? {
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0, 0.5],
                                }
                              : {}
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 border-4 border-primary rounded-xl"
                        />
                      </motion.div>

                      {/* Partner Name
                      <div className="text-center relative z-10">
                        <h3 className="text-foreground group-hover:text-primary transition-colors duration-500 text-lg">
                          {partner.name}
                        </h3>
                      </div> */}

                      {/* Hover Icon with animation */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-6"
                      >
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Award className="text-primary" size={24} />
                        </motion.div>
                      </motion.div>

                      {/* Glowing corners */}
                      <div className="absolute top-0 left-0 w-8 h-8">
                        <motion.div
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-full h-full border-t-2 border-l-2 border-primary rounded-tl-2xl"
                        />
                      </div>
                      <div className="absolute bottom-0 right-0 w-8 h-8">
                        <motion.div
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                          className="w-full h-full border-b-2 border-r-2 border-primary rounded-br-2xl"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-primary/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <ChevronLeft className="text-primary" size={28} />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-primary/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <ChevronRight className="text-primary" size={28} />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {partners.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                opacity: index === currentIndex ? 1 : 0.4,
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-primary to-[#a88b4d]"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Trust Stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-gray-50 to-white"
            }`}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="text-5xl text-primary mb-3"
            >
              +100
            </motion.div>
            <div className="text-foreground text-lg">مشروع مشترك</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-gray-50 to-white"
            }`}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="text-5xl text-primary mb-3"
            >
              15+
            </motion.div>
            <div className="text-foreground text-lg">سنة من الثقة</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
