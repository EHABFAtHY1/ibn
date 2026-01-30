import { Building2, Users, Award, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  GeometricPattern,
  SectionHeader
} from "../components/GeometricPattern";

export function About() {
  return (
    <main>
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        {/* Geometric Pattern */}
        <GeometricPattern position="top-left" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center">
                  <Building2 className="text-primary" size={52} />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
              </div>
            </div>
            <SectionHeader
              title="من نحن"
              subtitle="شريككم الموثوق في تحقيق أحلامكم المعمارية"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678803262971-329b90abaa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDUxNjc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="موقع بناء احترافي"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl" />
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl text-primary mb-4">
                  شركة ابن الشيخ للمقاولات
                </h3>
                <p className="text-foreground leading-loose text-lg">
                  شركة متخصصة في مجال الإنشاءات والمقاولات العامة، تتمتع بخبرة
                  واسعة في تنفيذ المشاريع المتنوعة بأعلى معايير الجودة
                  والاحترافية. نفخر بسجلنا الحافل في إنجاز المشاريع الرائدة.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="group flex items-start gap-5 bg-card/50 border border-primary/20 rounded-xl p-6 hover:border-primary hover:bg-card transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-background to-card border border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="text-primary" size={26} />
                  </div>
                  <div>
                    <h4 className="text-primary mb-2 text-xl">تخصصنا</h4>
                    <p className="text-foreground leading-relaxed">
                      نتخصص في المشاريع الطبية والتعليمية والسكنية والصناعية، مع
                      التركيز على تقديم حلول مبتكرة ومستدامة.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 bg-card/50 border border-primary/20 rounded-xl p-6 hover:border-primary hover:bg-card transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-background to-card border border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="text-primary" size={26} />
                  </div>
                  <div>
                    <h4 className="text-primary mb-2 text-xl">
                      الجودة والسلامة
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      نلتزم بأعلى معايير الجودة والسلامة في جميع مشاريعنا، مع
                      اتباع أفضل الممارسات العالمية.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 bg-card/50 border border-primary/20 rounded-xl p-6 hover:border-primary hover:bg-card transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-background to-card border border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="text-primary" size={26} />
                  </div>
                  <div>
                    <h4 className="text-primary mb-2 text-xl">فريق الخبراء</h4>
                    <p className="text-foreground leading-relaxed">
                      لدينا فريق هندسي عالي الخبرة والكفاءة، مدرب على أحدث
                      التقنيات والأساليب في مجال البناء والإنشاءات.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
