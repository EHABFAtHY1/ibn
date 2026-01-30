import { Cog, Droplets, Wind, Flame, Gauge, Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DiamondDivider, SectionHeader } from "./GeometricPattern";
import { useTheme } from "../contexts/ThemeContext";

export function MechanicalWorks() {
  const { theme } = useTheme();

  const mechanicalServices = [
    {
      text: "أنظمة الباكج (Package Units).",
      icon: Cog
    },
    {
      text: "أنظمة الـ VRF الحديثة ذات الكفاءة العالية.",
      icon: Wind
    },
    {
      text: "أنظمة الشيلر (Chiller Systems) للمباني الكبيرة والمستشفيات.",
      icon: Droplets
    },
    {
      text: "تصميم وتنفيذ مجاري الهواء (الدكت) وأنظمة التهوية والتحكم في جودة الهواء.",
      icon: Wind
    },
    {
      text: "دراسة وتوزيع الأحمال الحرارية لضمان كفاءة التشغيل وتقليل استهلاك الطاقة.",
      icon: Gauge
    },
    {
      text: "تنفيذ شبكات الغازات الطبية والصناعية مع أنظمة الأمان والتحكم الخاصة بها.",
      icon: Flame
    },
    {
      text: "تنفيذ شبكات المياه والصرف الصحي وأنظمة تغذية الخزانات والمضخات.",
      icon: Droplets
    },
    {
      text: "تركيب أنظمة مكافحة الحريق بجميع أنواعها (رش آلي، طفايات، مضخات).",
      icon: Flame
    },
    {
      text: "تنفيذ أنظمة التحكم الميكانيكي.",
      icon: Wrench
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
  ];

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#1a1a1a] to-[#252525]"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            title="الأعمال الميكانيكية"
            subtitle="أنظمة ميكانيكية متطورة ومتكاملة"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* الصور في Grid مع الفواصل الماسية */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6 relative">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-56 rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300">
                    <ImageWithFallback
                      src={image}
                      alt={`معدات ميكانيكية ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"
                          : "bg-gradient-to-t from-white/80 to-transparent"
                      }`}
                    />
                  </div>

                  {/* الماسة الفاصلة */}
                  {index < 3 && (
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "-left-6 top-1/2 -translate-y-1/2"
                          : "-bottom-6 left-1/2 -translate-x-1/2"
                      } z-10`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-primary drop-shadow-lg"
                      >
                        <polygon
                          points="12,0 24,12 12,24 0,12"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* القائمة التفصيلية */}
          <div className="order-1 lg:order-2 space-y-4">
            {mechanicalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group flex items-start gap-4 border-r-2 border-primary/30 hover:border-primary pr-6 py-4 rounded-lg transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-l from-[#252525] to-transparent"
                      : "bg-gradient-to-l from-gray-50 to-transparent"
                  }`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[#a88b4d] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon
                      className={
                        theme === "dark"
                          ? "text-[#1a1a1a]"
                          : "text-primary-foreground"
                      }
                      size={20}
                    />
                  </div>
                  <p className="text-foreground leading-relaxed text-lg flex-1 group-hover:text-primary transition-colors">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <DiamondDivider />

        {/* معلومات إضافية */}
        <div
          className={`mt-12 border-2 border-primary/30 rounded-2xl p-10 text-center ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
              : "bg-gradient-to-br from-gray-50 to-white"
          }`}
        >
          <p className="text-foreground text-xl leading-loose">
            نفخر بتقديم حلول ميكانيكية متكاملة تجمع بين الكفاءة العالية
            والموثوقية، مع الالتزام بأعلى معايير الجودة والسلامة في جميع أعمالنا
            الميكانيكية.
          </p>
        </div>
      </div>
    </section>
  );
}
