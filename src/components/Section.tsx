import type { ReactNode } from "react";

type Variant = "warm" | "cool" | "neutral" | "dark";

const variantStyles: Record<
  Variant,
  { outer: string; inner: string; glow: string; divider: string }
> = {
  warm: {
    outer:
      "bg-[radial-gradient(900px_circle_at_15%_10%,rgba(99,102,241,0.14),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(16,185,129,0.10),transparent_55%)]",
    inner:
      "border-indigo-200/50 bg-white/70 text-gray-900 shadow-lg backdrop-blur",
    glow: "from-indigo-500/25 via-emerald-300/10 to-transparent",
    divider: "from-indigo-500/35 via-emerald-500/10 to-transparent",
  },
  cool: {
    outer:
      "bg-[radial-gradient(900px_circle_at_15%_10%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(14,165,233,0.10),transparent_55%)]",
    inner:
      "border-sky-200/50 bg-white/70 text-gray-900 shadow-lg backdrop-blur",
    glow: "from-sky-500/25 via-blue-300/10 to-transparent",
    divider: "from-sky-500/35 via-sky-500/10 to-transparent",
  },
  neutral: {
    outer:
      "bg-[radial-gradient(900px_circle_at_15%_10%,rgba(0,0,0,0.06),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(0,0,0,0.04),transparent_55%)]",
    inner: "border-black/5 bg-white/70 text-gray-900 shadow-lg backdrop-blur",
    glow: "from-black/10 via-black/5 to-transparent",
    divider: "from-black/15 via-black/5 to-transparent",
  },
  dark: {
    outer:
      "bg-[radial-gradient(900px_circle_at_15%_10%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(52,211,153,0.12),transparent_55%)]",
    inner:
      "border-white/10 bg-gray-950/40 text-white shadow-lg backdrop-blur",
    glow: "from-indigo-500/25 via-emerald-300/10 to-transparent",
    divider: "from-white/15 via-white/5 to-transparent",
  },
};

export default function Section({
  id,
  title,
  subtitle,
  icon,
  children,
  isDark,
  variant,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  isDark: boolean;
  variant: Variant;
}) {
  const v: Variant = isDark ? "dark" : variant;
  const styles = variantStyles[v];
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="py-24">
      <div className={`relative ${styles.outer}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br ${styles.glow} blur-2xl`}
            />

            <div className="text-center mb-10">
              {icon ? (
                <div className="flex items-center justify-center mb-3">
                  <span
                    className={
                      isDark
                        ? "inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-200"
                        : "inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-white text-indigo-700"
                    }
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                </div>
              ) : null}
              <h2
                id={titleId}
                className={
                  isDark
                    ? "text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
                    : "text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
                }
              >
                {title}
              </h2>
              {subtitle ? (
                <p
                  className={
                    isDark
                      ? "mt-3 text-gray-300 max-w-2xl mx-auto"
                      : "mt-3 text-gray-600 max-w-2xl mx-auto"
                  }
                >
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className={`rounded-2xl border p-8 ${styles.inner}`}>
              {children}
            </div>

            <div
              aria-hidden="true"
              className={`mt-10 h-px w-full bg-gradient-to-r ${styles.divider}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

