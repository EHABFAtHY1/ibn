import { Eye, Sparkles } from "lucide-react";

export function VisionValues() {
  return (
    <section id="vision" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="group bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="text-primary" size={44} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-4xl text-primary mb-6">رؤيتنا</h3>
              <div className="flex justify-center mb-8">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <p className="text-foreground leading-loose text-lg">
                نسعى لأن نكون الشركة الرائدة في مجال المقاولات، من خلال تقديم
                أفضل الحلول المبتكرة التي تلبي تطلعات عملائنا وتساهم في بناء
                مستقبل مزدهر.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="text-primary" size={44} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-4xl text-primary mb-6">قيمنا</h3>
              <div className="flex justify-center mb-8">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <ul className="text-foreground leading-loose space-y-4 text-lg">
                <li className="flex items-center justify-center gap-3 hover:text-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  الجودة
                </li>
                <li className="flex items-center justify-center gap-3 hover:text-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  الالتزام
                </li>
                <li className="flex items-center justify-center gap-3 hover:text-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  الابتكار
                </li>
                <li className="flex items-center justify-center gap-3 hover:text-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  رضا العملاء
                </li>
                <li className="flex items-center justify-center gap-3 hover:text-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  الاستدامة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
