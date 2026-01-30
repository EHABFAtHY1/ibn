import { useTheme } from "@/contexts/ThemeContext";
import { projectsData } from "@/data/projectsData";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Home,
  MapPin,
  Wrench
} from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
export default function ProjectCategoryPage() {
  const { category } = useParams();
  const { theme } = useTheme();

  const categoryData = projectsData[category as keyof typeof projectsData];

  if (!categoryData) {
    return <div>Category not found</div>;
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
            to="/projects"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span>مشاريعنا</span>
          </Link>
          <span>/</span>
          <span className="text-primary">{categoryData.title}</span>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className={`w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                {categoryData.icon}
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
          <h1 className="text-6xl text-primary mb-6">{categoryData.title}</h1>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            {categoryData.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group border border-primary/20 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#1a1a1a] to-[#252525]"
                  : "bg-gradient-to-b from-white to-gray-50"
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 opacity-80 ${
                    theme === "dark"
                      ? "bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"
                      : "bg-gradient-to-t from-white via-transparent to-transparent"
                  }`}
                />
                <div className="absolute top-5 right-5 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                <div
                  className={`absolute top-5 left-5 backdrop-blur-sm text-primary px-4 py-2 rounded-full border border-primary/30 ${
                    theme === "dark" ? "bg-[#1a1a1a]/80" : "bg-white/80"
                  }`}
                >
                  {project.area}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-primary text-2xl">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                    <CheckCircle size={14} />
                    <span>{project.status}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Wrench size={18} />
                    <span>المميزات:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`border border-primary/30 px-3 py-1 rounded-lg text-sm ${
                          theme === "dark"
                            ? "bg-[#1a1a1a] text-[#e8dcc4]"
                            : "bg-gray-50 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/projects/${category}/${project.id}`}
                  className="block w-full"
                >
                  <button className="w-full flex items-center justify-center gap-2 text-primary-foreground bg-gradient-to-br from-primary to-[#a88b4d] hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 px-6 py-3 rounded-xl group/btn">
                    <span>عرض التفاصيل</span>
                    <ExternalLink
                      className="group-hover/btn:-translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link to="/">
            <button
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-b from-white to-gray-50"
              }`}
            >
              <ArrowRight className="text-primary" size={24} />
              <span className="text-primary text-lg">العودة الرئيسية</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
