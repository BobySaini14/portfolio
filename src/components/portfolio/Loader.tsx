import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
      style={{ pointerEvents: "none" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-blue border-r-brand-purple" />
        </div>
        <p className="text-sm tracking-[0.3em] text-muted-foreground">LOADING</p>
      </div>
    </motion.div>
  );
}
