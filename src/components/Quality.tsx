import { Shield } from "lucide-react";
import { GeometricPattern, SectionHeader } from "./GeometricPattern";
import { standards } from "@/data/projectsData";

export function Quality() {
  return (
    <section
      id="quality"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Geometric Pattern */}
      <GeometricPattern position="bottom-left" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center">
                <Shield className="text-primary" size={52} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
          <SectionHeader
            title="معايير الجودة"
            subtitle="نلتزم بأعلى معايير الجودة العالمية في جميع مشاريعنا دون استثناء"
          />
        </div>

        {/* Standards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-b from-background to-card border border-primary/20 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-card to-background border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg group-hover:bg-primary/40 transition-all duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-primary mb-3 text-xl">
                      {standard.title}
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Statement */}
        <div className="relative">
          <div className="bg-gradient-to-br from-card via-background to-card border-2 border-primary/40 rounded-2xl p-12 text-center shadow-2xl shadow-primary/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <p className="text-primary text-3xl mb-6 italic">
                "الجودة ليست عملاً، بل هي عادة"
              </p>
              <p className="text-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                نحن ملتزمون بتقديم أعمال تفوق التوقعات وتحقق رضا عملائنا الكامل
                من خلال الاهتمام بأدق التفاصيل والتطوير المستمر لمعاييرنا
              </p>
              <div className="flex justify-center mt-6">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
