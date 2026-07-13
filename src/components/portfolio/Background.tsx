export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="animate-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="animate-blob absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-brand-purple/20 blur-3xl" style={{ animationDelay: "-6s" }} />
      <div className="animate-blob absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-cyan/15 blur-3xl" style={{ animationDelay: "-12s" }} />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
