import { MapPin, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { address, quickContacts } from "@/data/projectsData";

export function Map() {
  const { theme } = useTheme();

  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/vKkQFEUkPgu2kNRX9", "_blank");
  };

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className={`w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <MapPin className="text-primary" size={52} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>
          <h2 className="text-5xl text-primary mb-6">موقعنا</h2>
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className={`border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 h-full min-h-[500px] ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-b from-white to-gray-50"
              }`}
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.3528781147653!2d43.95946068695838!3d26.368023024423028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f59cb32575edf%3A0x78736dce6df27aba!2z2LTYsdmD2Kkg2KXYqNmGINin2YTYtNmK2K4g2YTZhNmF2YLYp9mI2YTYp9iqINin2YTYudin2YXYqQ!5e0!3m2!1sen!2seg!4v1765110114422!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="موقع الشركة"
              />
            </div>
          </motion.div>

          {/* Address & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div
              className={`border-2 border-primary/30 rounded-2xl p-8 shadow-xl shadow-primary/20 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a]"
                  : "bg-gradient-to-br from-white to-gray-50"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl border-2 border-primary flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#1a1a1a] to-[#252525]"
                      : "bg-gradient-to-br from-gray-50 to-gray-100"
                  }`}
                >
                  <MapPin className="text-primary" size={26} />
                </div>
                <div>
                  <h3 className="text-primary text-2xl mb-2">العنوان</h3>
                  <div className="text-foreground space-y-1 text-lg">
                    <p>{address.street}</p>
                    <p>{address.city}</p>
                    <p>{address.country}</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <button
                onClick={handleGetDirections}
                className="w-full bg-gradient-to-br from-primary to-[#a88b4d] text-primary-foreground px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:scale-105"
              >
                <Navigation size={22} />
                <span>احصل على الاتجاهات</span>
              </button>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-4">
              {quickContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className={`flex items-start gap-5 border border-primary/20 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
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
                        <contact.icon className="text-primary" size={26} />
                      </div>
                      <div>
                        <h4 className="text-primary mb-2 text-xl">
                          {contact.label}
                        </h4>
                        <p className="text-foreground text-lg">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div
                      className={`flex items-start gap-5 border border-primary/20 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 ${
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
                        <contact.icon className="text-primary" size={26} />
                      </div>
                      <div>
                        <h4 className="text-primary mb-2 text-xl">
                          {contact.label}
                        </h4>
                        <p className="text-foreground text-lg">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div
              className={`border border-primary/30 rounded-2xl p-6 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-primary/10 to-primary/5"
                  : "bg-gradient-to-br from-primary/5 to-primary/10"
              }`}
            >
              <p className="text-foreground leading-relaxed text-center">
                <span className="text-primary">نصيحة:</span> يمكنكم حجز موعد
                مسبق للزيارة من خلال التواصل معنا عبر الهاتف أو البريد
                الإلكتروني
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
