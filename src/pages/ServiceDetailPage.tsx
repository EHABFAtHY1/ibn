import { useParams, Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, CheckCircle, Home, Award, Users } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { servicesData } from "../data/servicesData";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const { theme } = useTheme();

  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main
      className={`pt-32 pb-24 px-4 sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 right-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12 text-muted-foreground"
        >
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Home size={20} />
            <span>الرئيسية</span>
          </Link>
          <span>/</span>
          <Link
            to="/#services"
            className="hover:text-primary transition-colors"
          >
            الخدمات
          </Link>
          <span>/</span>
          <span className="text-primary">{service.title}</span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`w-40 h-40 rounded-full border-4 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <div className="relative z-10">{service.icon}</div>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-primary"
              />
            </div>
          </div>
          <h1 className="text-6xl text-primary mb-6">{service.title}</h1>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            {service.fullDescription}
          </p>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Award className="text-primary" size={28} />
              </div>
            </div>
            <div className="text-5xl text-primary mb-3">
              {service.stats.projects}
            </div>
            <div className="text-foreground text-lg">مشروع منجز</div>
          </div>

          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Clock className="text-primary" size={28} />
              </div>
            </div>
            <div className="text-5xl text-primary mb-3">
              {service.stats.experience}
            </div>
            <div className="text-foreground text-lg">من الخبرة</div>
          </div>

          <div
            className={`border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <TrendingUp className="text-primary" size={28} />
              </div>
            </div>
            <div className="text-5xl text-primary mb-3">
              {service.stats.satisfaction}
            </div>
            <div className="text-foreground text-lg">رضا العملاء</div>
          </div>
        </motion.div> */}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`border-2 border-primary/30 rounded-2xl p-8 mb-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
              : "bg-gradient-to-br from-white to-gray-50"
          }`}
        >
          <h2 className="text-primary text-3xl mb-8 text-center">
            خدماتنا الشاملة
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`flex items-center gap-3 border border-primary/30 px-5 py-4 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                  theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"
                }`}
              >
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-primary text-3xl mb-8 text-center">
            لماذا تختارنا
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`border-2 border-primary/30 rounded-2xl p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                    : "bg-gradient-to-br from-white to-gray-50"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                        : "bg-gradient-to-br from-gray-50 to-gray-100"
                    }`}
                  >
                    <Award className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="text-primary text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`border-2 border-primary/30 rounded-2xl p-8 mb-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
              : "bg-gradient-to-br from-white to-gray-50"
          }`}
        >
          <h2 className="text-primary text-3xl mb-8 text-center">
            مراحل العمل
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative"
              >
                <div
                  className={`border-2 border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                    theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
                  }`}
                >
                  <div className="absolute -top-4 right-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground flex items-center justify-center shadow-lg text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-primary text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rotate-45 border-t-2 border-l-2 border-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-primary text-3xl mb-8 text-center">
            معرض الأعمال
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-72 rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                    theme === "dark" ? "bg-[#1a1a1a]/80" : "bg-white/80"
                  }`}
                >
                  <Award className="text-primary" size={48} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className={`border-2 border-primary/30 rounded-2xl p-12 text-center ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
              : "bg-gradient-to-br from-gray-50 to-white"
          }`}
        >
          <h2 className="text-primary text-3xl mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-foreground text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية ومناقشة متطلبات مشروعك
          </p>
          <Link to="/#contact">
            <button className="inline-flex items-center gap-3 bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-12 py-4 rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-xl">
              <Users size={28} />
              <span>تواصل معنا الآن</span>
            </button>
          </Link>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <Link to="/#services">
            <button
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-b from-white to-gray-50"
              }`}
            >
              <ArrowRight className="text-primary" size={24} />
              <span className="text-primary text-lg">العودة للخدمات</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
