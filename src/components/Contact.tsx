import { Mail, Phone, Pin } from "lucide-react";
import Section from "./Section";

const Contact = ({ isDark }: any) => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to strong product teams and impactful engineering work."
      icon={<Mail size={18} />}
      isDark={isDark}
      variant="cool"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <a
          href="mailto:idhiman666@gmail.com"
          className={
            isDark
              ? "group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              : "group rounded-2xl border border-black/5 bg-white p-6 hover:bg-sky-50 transition"
          }
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className={
                isDark
                  ? "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                  : "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-indigo-700"
              }
            >
              <Mail size={18} />
            </span>
            <div className={isDark ? "text-gray-100 font-semibold" : "text-gray-900 font-semibold"}>Email</div>
          </div>
          <div className={isDark ? "text-indigo-200 font-semibold group-hover:underline" : "text-indigo-700 font-semibold group-hover:underline"}>
            idhiman666@gmail.com
          </div>
        </a>

        <a
          href="tel:+918360253186"
          className={
            isDark
              ? "group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              : "group rounded-2xl border border-black/5 bg-white p-6 hover:bg-sky-50 transition"
          }
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className={
                isDark
                  ? "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                  : "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-indigo-700"
              }
            >
              <Phone size={18} />
            </span>
            <div className={isDark ? "text-gray-100 font-semibold" : "text-gray-900 font-semibold"}>Phone</div>
          </div>
          <div className={isDark ? "text-indigo-200 font-semibold group-hover:underline" : "text-indigo-700 font-semibold group-hover:underline"}>
            +91 8360253186
          </div>
        </a>

        <div
          className={
            isDark
              ? "rounded-2xl border border-white/10 bg-white/5 p-6"
              : "rounded-2xl border border-black/5 bg-white p-6"
          }
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className={
                isDark
                  ? "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                  : "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5 text-indigo-700"
              }
            >
              <Pin size={18} />
            </span>
            <div className={isDark ? "text-gray-100 font-semibold" : "text-gray-900 font-semibold"}>Location</div>
          </div>
          <div className={isDark ? "text-gray-300" : "text-gray-700"}>Mohali, Punjab, India</div>
        </div>

        <div
          className={
            isDark
              ? "rounded-2xl border border-white/10 bg-white/5 p-6"
              : "rounded-2xl border border-black/5 bg-white p-6"
          }
        >
          <div className={isDark ? "text-gray-100 font-semibold mb-2" : "text-gray-900 font-semibold mb-2"}>
            Languages
          </div>
          <div className={isDark ? "text-gray-300" : "text-gray-700"}>English, Hindi, Punjabi</div>
          <div className={isDark ? "mt-4 text-gray-300" : "mt-4 text-gray-700"}>
            Let&apos;s collaborate on building scalable, user-centric web applications and cloud-native solutions.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

