import {
  ChevronDown,
  Award,
  Users,
  Building2,
  TrendingUp,
  Sparkles,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useRef } from "react";

export function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // const scrollToAbout = () => {
  //   const element = document.getElementById("about");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const scrollVision = () => {
    const element = document.getElementById("vision");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "٠٥+", label: "سنوات الخبرة", icon: Award },
    { value: "١٠٠+", label: "مشروع منجز", icon: Building2 },
    { value: "١٠٠+", label: "عميل راضٍ", icon: Users },
    { value: "٩٨٪", label: "نسبة النجاح", icon: TrendingUp },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA0NDUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="بناء حديث فاخر"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Gradient Overlays - Different for each theme */}
        {theme === "dark" ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/85 to-[#1a1a1a]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,#1a1a1a_100%)]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_0%,#ffffff_100%)]" />
          </>
        )}

        {/* Animated Geometric Patterns */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 opacity-5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 20}
                y1="0"
                x2={i * 20}
                y2="200"
                stroke="#C9A961"
                strokeWidth="0.5"
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 20}
                x2="200"
                y2={i * 20}
                stroke="#C9A961"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <Star className="text-primary/40" size={12 + Math.random() * 8} />
            </motion.div>
          ))}
        </div>

        {/* Golden Line Accent */}
        <motion.div
          className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />

        {/* Diagonal Lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Accent */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-primary tracking-widest text-sm flex items-center gap-2">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles size={16} />
                </motion.div>
                شركة رائدة منذ عام ٢٠٠٩
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative inline-block">
                <motion.h1
                  className="text-6xl sm:text-7xl lg:text-8xl text-primary tracking-wide"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(201, 169, 97, 0)",
                      "0 0 20px rgba(201, 169, 97, 0.3)",
                      "0 0 0px rgba(201, 169, 97, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ابن الشيخ
                </motion.h1>
                <motion.div
                  className="absolute -bottom-3 right-0 h-[3px] bg-gradient-to-l from-primary to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  للمقاولات العامة
                </h2>
                <motion.div
                  className="h-[1px] bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "12rem" }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="space-y-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-2xl sm:text-3xl text-primary">نبني للمستقبل</p>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                شريكك الموثوق في تحويل الرؤى إلى واقع ملموس بأعلى معايير الجودة
                والاحترافية
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={scrollVision}
                className="group relative bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-10 py-5 rounded-lg overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                  اكتشف المزيد
                  <ChevronDown
                    className="group-hover:translate-y-1 transition-transform"
                    size={22}
                  />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative border-2 border-primary text-primary px-10 py-5 rounded-lg overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-lg">تواصل معنا</span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                  تواصل معنا
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
            </div>

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative bg-card/80 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Accent Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rotate-45 transform translate-x-8 -translate-y-8" />
                    </div>

                    {/* Content */}
                    <div className="relative space-y-4">
                      <div className="flex justify-between items-start">
                        <motion.div
                          className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[#a88b4d] flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 6 }}
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(201, 169, 97, 0)",
                              "0 0 20px rgba(201, 169, 97, 0.3)",
                              "0 0 0px rgba(201, 169, 97, 0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          <Icon className="text-primary-foreground" size={26} />
                        </motion.div>
                      </div>

                      <div className="space-y-2">
                        <motion.div
                          className="text-4xl text-primary font-medium"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.8 + index * 0.1,
                            type: "spring",
                            stiffness: 100,
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-foreground text-sm leading-relaxed">
                          {stat.label}
                        </div>
                      </div>
                    </div>

                    {/* Hover Shine Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1 }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Accent */}
            <motion.div
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-muted-foreground text-sm">
                موثوق به من قبل العملاء الرائدين
              </span>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-primary/50" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-muted-foreground text-sm tracking-wider">
              اكتشف المزيد
            </div>
            <div className="relative">
              <ChevronDown className="text-primary" size={32} />
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
