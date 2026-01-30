import { useParams, Link } from "react-router";

import {
  ArrowRight,
  MapPin,
  CheckCircle,
  Calendar,
  Users,
  Ruler,
  Wrench,
  Award,
  Home
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { projectsData } from "@/data/projectsData";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export default function ProjectDetailPage() {
  const { category, id } = useParams();
  const { theme } = useTheme();

  const categoryData = projectsData[category as keyof typeof projectsData];
  const project = categoryData?.projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
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
          <Link to={"/projects"}>مشاريعنا</Link>
          <span>/</span>
          <Link
            to={`/projects/${category}`}
            className="hover:text-primary transition-colors"
          >
            {categoryData?.title}
          </Link>
          <span>/</span>
          <span className="text-primary">{project.title}</span>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] rounded-3xl overflow-hidden mb-16 border-2 border-primary/30"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent"
                : "bg-gradient-to-t from-white/90 via-transparent to-transparent"
            }`}
          />

          {/* Floating Info Cards */}
          <div className="absolute bottom-8 right-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl backdrop-blur-sm">
              <MapPin size={20} />
              <span className="text-lg">{project.location}</span>
            </div>
            <div
              className={`flex items-center gap-2 backdrop-blur-sm text-primary px-6 py-3 rounded-full border-2 border-primary/50 ${
                theme === "dark" ? "bg-[#1a1a1a]/80" : "bg-white/80"
              }`}
            >
              <CheckCircle size={20} />
              <span className="text-lg">{project.status}</span>
            </div>
          </div>

          <div className="absolute top-8 right-8">
            <h1 className="text-5xl text-primary-foreground drop-shadow-2xl">
              {project.title}
            </h1>
          </div>
        </motion.div>

        {/* Project Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`border-2 border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Ruler className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-muted-foreground">المساحة الإجمالية</p>
                <p className="text-primary text-2xl">{project.area}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`border-2 border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Calendar className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-muted-foreground">مدة التنفيذ</p>
                <p className="text-primary text-2xl">
                  {project.duration || "18 شهر"}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`border-2 border-primary/30 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <Users className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-muted-foreground">فريق العمل</p>
                <p className="text-primary text-2xl">
                  {project.team || "45 عضو"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`border-2 border-primary/30 rounded-2xl p-8 mb-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
              : "bg-gradient-to-br from-white to-gray-50"
          }`}
        >
          <h2 className="text-primary text-3xl mb-6">نبذة عن المشروع</h2>
          <p className="text-foreground text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.fullDescription ||
              "مشروع متكامل يجمع بين التصميم العصري والتنفيذ الاحترافي، تم إنجازه وفق أعلى المعايير العالمية في مجال البناء والتشييد. يتميز المشروع بالاهتمام بأدق التفاصيل واستخدام أحدث التقنيات والمواد الإنشائية عالية الجودة."}
          </p>
        </motion.div>

        {/* Tech Stack & Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`border-2 border-primary/30 rounded-2xl p-8 mb-16 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
              : "bg-gradient-to-br from-white to-gray-50"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="text-primary" size={32} />
            <h2 className="text-primary text-3xl">التقنيات والمميزات</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className={`flex items-center gap-3 border border-primary/30 px-5 py-4 rounded-xl hover:border-primary transition-all duration-300 ${
                  theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"
                }`}
              >
                <Award className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-primary text-3xl mb-8 text-center">
              معرض الصور
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <Link to={`/projects/${category}`}>
            <button
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-b from-white to-gray-50"
              }`}
            >
              <ArrowRight className="text-primary" size={24} />
              <span className="text-primary text-lg">
                العودة لـ {categoryData?.title}
              </span>
            </button>
          </Link>

          <Link to="/">
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <Home size={24} />
              <span className="text-lg">العودة للرئيسية</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
