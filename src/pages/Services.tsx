import { Building, PenTool, Zap, Cog, Sparkles, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router";
import { GeometricPattern, SectionHeader } from "@/components/GeometricPattern";

export function Services() {
  const { theme } = useTheme();

  const services = [
    {
      id: "construction",
      icon: Building,
      title: "الأعمال الإنشائية",
      description:
        "تصميم وتنفيذ الأعمال الإنشائية بأعلى معايير الجودة والسلامة مع استخدام أحدث التقنيات",
      gradient: "from-[#c5a572] to-[#a88b4d]"
    },
    {
      id: "architecture",
      icon: PenTool,
      title: "الأعمال المعمارية",
      description:
        "تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفية وتلبي احتياجات العملاء",
      gradient: "from-[#d4af37] to-[#c5a572]"
    },
    {
      id: "electrical",
      icon: Zap,
      title: "الأعمال الكهربائية",
      description:
        "أنظمة كهربائية حديثة ومتطورة تلبي جميع الاحتياجات بكفاءة عالية",
      gradient: "from-[#b8954d] to-[#a88b4d]"
    },
    {
      id: "mechanical",
      icon: Cog,
      title: "الأعمال الميكانيكية",
      description:
        "أنظمة ميكانيكية متقدمة للتكييف والتهوية والسباكة بأحدث المواصفات",
      gradient: "from-[#c5a572] to-[#b8954d]"
    }
  ];

  return (
    <main>
      <section
        id="services"
        className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-[#1a1a1a] to-[#252525]"
            : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        {/* Geometric Pattern */}
        <GeometricPattern position="bottom-right" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                      : "bg-gradient-to-br from-gray-50 to-gray-100"
                  }`}
                >
                  <Sparkles className="text-primary" size={52} />
                </motion.div>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
              </div>
            </div>
            <SectionHeader
              title="خدماتنا المتكاملة"
              subtitle="نقدم مجموعة شاملة من الخدمات المتخصصة في مجال المقاولات والإنشاءات"
            />
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Link to={`/services/${service.id}`} className="block h-full">
                    <div
                      className={` h-full border border-primary/20 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/20 cursor-pointer ${
                        theme === "dark"
                          ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                          : "bg-gradient-to-b from-white to-gray-50"
                      }`}
                    >
                      {/* Animated Background Gradient */}
                      {/* <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    /> */}

                      <div className="flex justify-center mb-8">
                        <div className="relative">
                          <motion.div
                            animate={{
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className={`w-24 h-24 rounded-2xl border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                              theme === "dark"
                                ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                                : "bg-gradient-to-br from-gray-50 to-gray-100"
                            }`}
                          >
                            <Icon className="text-primary" size={40} />
                          </motion.div>
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-2xl bg-primary blur-xl"
                          />
                        </div>
                      </div>

                      <h3 className="text-2xl text-primary text-center mb-5 group-hover:scale-105 transition-transform duration-300">
                        {service.title}
                      </h3>

                      <p className="text-foreground text-center leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* View Details Button */}
                      <div className="flex justify-center mt-auto">
                        <div className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                          <span className="text-sm">اعرف المزيد</span>
                          <ArrowLeft
                            className="group-hover:-translate-x-1 transition-transform"
                            size={16}
                          />
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-primary rounded-tr-2xl" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 opacity-20">
                        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-primary rounded-bl-2xl" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div
              className={`border border-primary/30 rounded-2xl p-10 max-w-4xl mx-auto shadow-md shadow-primary/10 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-white to-gray-50"
              }`}
            >
              <div className="flex justify-center mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <p className="text-foreground text-xl leading-loose text-center">
                نحن ملتزمون بتقديم خدمات متكاملة تشمل جميع مراحل المشروع، من
                التخطيط والتصميم إلى التنفيذ والتسليم، مع ضمان أعلى مستويات
                الجودة والاحترافية في كل خطوة.
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-4 gap-6"
          >
            <div
              className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-gray-50 to-white"
              }`}
            >
              <div className="text-5xl text-primary mb-3">850+</div>
              <div className="text-foreground text-lg">خدمة مقدمة</div>
            </div>

            <div
              className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-gray-50 to-white"
              }`}
            >
              <div className="text-5xl text-primary mb-3">97%</div>
              <div className="text-foreground text-lg">معدل الرضا</div>
            </div>

            <div
              className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-gray-50 to-white"
              }`}
            >
              <div className="text-5xl text-primary mb-3">24/7</div>
              <div className="text-foreground text-lg">دعم متواصل</div>
            </div>

            <div
              className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-gray-50 to-white"
              }`}
            >
              <div className="text-5xl text-primary mb-3">4</div>
              <div className="text-foreground text-lg">خدمات رئيسية</div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
