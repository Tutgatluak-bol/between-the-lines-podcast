
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-5 text-xs font-semibold uppercase tracking-[0.3em] ${
            light ? "text-cream/60" : "text-coffee"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-display text-4xl leading-tight md:text-5xl lg:text-6xl ${
          light ? "text-cream" : "text-dark-brown"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-8 ${
            light ? "text-cream/70" : "text-dark-brown/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
