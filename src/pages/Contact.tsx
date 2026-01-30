import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { socialLinks } from "@/data/projectsData";

export function Contact() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <section
        id="contact"
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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  className={`w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                      : "bg-gradient-to-br from-gray-50 to-gray-100"
                  }`}
                >
                  <MessageCircle className="text-primary" size={52} />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
              </div>
            </div>
            <h2 className="text-5xl text-primary mb-6">
              {" "}
              تواصل معنا لحجز الاستشارة
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-foreground text-xl leading-relaxed">
                نسعد بالتواصل معكم ونتطلع للإجابة على جميع استفساراتكم
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                فريقنا جاهز لمساعدتك في تحويل أفكارك إلى واقع ملموس. سواء كان
                لديك استفسار عن مشروع جديد أو ترغب في معرفة المزيد عن خدماتنا،
                لا تتردد في التواصل معنا.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info Cards */}
              <div>
                <h3 className="text-3xl text-primary mb-8">معلومات التواصل</h3>
                <div className="space-y-6">
                  <div
                    className={`group flex items-start gap-5 border border-primary/20 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                      theme === "dark"
                        ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                        : "bg-gradient-to-b from-white to-gray-50"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                          : "bg-gradient-to-br from-gray-50 to-gray-100"
                      }`}
                    >
                      <Phone className="text-primary" size={26} />
                    </div>
                    <div>
                      <h4 className="text-primary mb-2 text-xl">الهاتف</h4>
                      <p className="text-foreground text-lg" dir="ltr">
                        +966 53 500 3675
                      </p>
                    </div>
                  </div>

                  <div
                    className={`group flex items-start gap-5 border border-primary/20 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                      theme === "dark"
                        ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                        : "bg-gradient-to-b from-white to-gray-50"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                          : "bg-gradient-to-br from-gray-50 to-gray-100"
                      }`}
                    >
                      <Mail className="text-primary" size={26} />
                    </div>
                    <div>
                      <h4 className="text-primary mb-2 text-xl">
                        البريد الإلكتروني
                      </h4>
                      <p className="text-foreground text-lg">
                        info@ibnalshekh.net
                      </p>
                    </div>
                  </div>

                  <div
                    className={`group flex items-start gap-5 border border-primary/20 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
                      theme === "dark"
                        ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                        : "bg-gradient-to-b from-white to-gray-50"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                          : "bg-gradient-to-br from-gray-50 to-gray-100"
                      }`}
                    >
                      <MapPin className="text-primary" size={26} />
                    </div>
                    <div>
                      <h4 className="text-primary mb-2 text-xl">العنوان</h4>
                      <p className="text-foreground text-lg">
                        المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div
                className={`border-2 border-primary/30 rounded-2xl p-8 shadow-xl shadow-primary/10 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                    : "bg-gradient-to-br from-white to-gray-50"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl border border-primary flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                        : "bg-gradient-to-br from-gray-50 to-gray-100"
                    }`}
                  >
                    <Clock className="text-primary" size={24} />
                  </div>
                  <h4 className="text-primary text-2xl">ساعات العمل</h4>
                </div>
                <div className="space-y-3 text-foreground text-lg leading-relaxed">
                  <p className="flex justify-between items-center pb-3 border-b border-primary/20">
                    <span>السبت - الخميس:</span>
                    <span className="text-primary">٨:٠٠ ص - ٥:٠٠ م</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span>الجمعة - السبت:</span>
                    <span className="text-muted-foreground">مغلق</span>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div
                className={`border-2 border-primary/30 rounded-2xl p-8 shadow-xl shadow-primary/10 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                    : "bg-gradient-to-br from-white to-gray-50"
                }`}
              >
                <h4 className="text-primary text-2xl mb-6">تابعنا على</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center gap-3 border border-primary/20 rounded-xl p-4 hover:border-primary transition-all duration-300 ${
                        social.color
                      } group ${
                        theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon
                        className="text-primary group-hover:text-white transition-colors"
                        size={24}
                      />
                      <span className="text-foreground group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div
              className={`lg:col-span-3 border-2 border-primary/30 rounded-2xl p-10 shadow-2xl shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-white to-gray-50"
              }`}
            >
              <h3 className="text-3xl text-primary mb-8">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary mb-3 text-lg">
                      الاسم *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full border-2 border-primary/30 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50 ${
                        theme === "dark"
                          ? "bg-[#1a1a1a] text-[#e8dcc4]"
                          : "bg-white text-gray-900"
                      }`}
                      placeholder="أدخل اسمك الكريم"
                    />
                  </div>

                  <div>
                    <label className="block text-primary mb-3 text-lg">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full border-2 border-primary/30 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50 ${
                        theme === "dark"
                          ? "bg-[#1a1a1a] text-[#e8dcc4]"
                          : "bg-white text-gray-900"
                      }`}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary mb-3 text-lg">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="رقم الهاتف"
                      className={`text-right w-full border-2 border-primary/30 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50 ${
                        theme === "dark"
                          ? "bg-[#1a1a1a] text-[#e8dcc4]"
                          : "bg-white text-gray-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-primary mb-3 text-lg">
                      الموضوع *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full border-2 border-primary/30 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50 ${
                        theme === "dark"
                          ? "bg-[#1a1a1a] text-[#e8dcc4]"
                          : "bg-white text-gray-900"
                      }`}
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary mb-3 text-lg">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full border-2 border-primary/30 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all duration-300 resize-none hover:border-primary/50 ${
                      theme === "dark"
                        ? "bg-[#1a1a1a] text-[#e8dcc4]"
                        : "bg-white text-gray-900"
                    }`}
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-8 py-5 rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:scale-105"
                >
                  <span>إرسال الرسالة</span>
                  <Send size={22} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
