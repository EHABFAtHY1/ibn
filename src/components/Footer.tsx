import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp
} from "lucide-react";
import { Link, useNavigate } from "react-router";

export function Footer() {
  const naviagate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-card to-background border-t-2 border-primary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="text-center md:text-right space-y-6">
              <div>
                <h3 className="text-primary text-3xl mb-3 tracking-wide">
                  ابن الشيخ
                </h3>
                <div className="flex md:justify-end justify-center mb-4">
                  <div className="h-[2px] w-20 bg-gradient-to-l from-primary to-transparent" />
                </div>
                <p className="text-foreground mb-3 text-lg">للمقاولات العامة</p>
                <p className="text-muted-foreground leading-relaxed">
                  نبني للمستقبل بجودة واحترافية لا مثيل لها
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-primary mb-6 text-2xl">روابط سريعة</h4>
              <div className="flex justify-center mb-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => naviagate("/about")}
                    className="text-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    من نحن
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => naviagate("/services")}
                    className="text-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    خدماتنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("quality")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    معايير الجودة
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => naviagate("/projects")}
                    className="text-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    مشاريعنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => naviagate("/contact")}
                    className="text-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    تواصل معنا
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-left">
              <h4 className="text-primary mb-6 text-2xl">تابعنا</h4>
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <Link
                  to="https://www.facebook.com/iibnalshaikh"
                  target="_blank"
                  className="group w-12 h-12 rounded-xl bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-[#a88b4d] hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Facebook
                    className="group-hover:text-primary-foreground text-primary"
                    target="_blank"
                    size={20}
                  />
                </Link>
                <Link
                  to="https://www.twitter.com/iibnalshaikh"
                  target="_blank"
                  className="group w-12 h-12 rounded-xl bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-[#a88b4d] hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Twitter
                    className="group-hover:text-primary-foreground text-primary"
                    target="_blank"
                    size={20}
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/iibnalshaikh"
                  target="_blank"
                  className="group w-12 h-12 rounded-xl bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-[#a88b4d] hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Instagram
                    className="group-hover:text-primary-foreground text-primary"
                    size={20}
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/iibnalshaikh"
                  target="_blank"
                  className="group w-12 h-12 rounded-xl bg-gradient-to-br from-background to-card border-2 border-primary flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-[#a88b4d] hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Linkedin
                    className="group-hover:text-primary-foreground text-primary"
                    size={20}
                  />
                </Link>
              </div>
              <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
                نشارككم آخر المستجدات والمشاريع عبر منصات التواصل الاجتماعي
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          {/* Copyright */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground text-lg">
              © ٢٠٢٥ شركة ابن الشيخ للمقاولات. جميع الحقوق محفوظة.
            </p>
            <p className="text-muted-foreground/70 text-sm">
              صُمم وطُور بعناية فائقة
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={scrollToTop}
            className="group w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[#a88b4d] flex items-center justify-center shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            aria-label="العودة للأعلى"
          >
            <ChevronUp
              className="text-primary-foreground group-hover:animate-bounce"
              size={28}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
