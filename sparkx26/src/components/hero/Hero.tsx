import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

const icons = [
  {
    name: "JavaScript",
    src: "/tech/js.svg",
    className: "top-[26%] left-[6%] sm:top-[30%] sm:left-[15%]",
    size: "w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16",
    parallaxDepth: 0.05,
    delay: 0,
  },
  {
    name: "Tailwind CSS",
    src: "/tech/tailwindcss.svg",
    className: "top-[25%] right-[6%] sm:top-[29%] sm:right-[15%]",
    size: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
    parallaxDepth: -0.03,
    delay: 0.2,
  },
  {
    name: "React",
    src: "/tech/react.svg",
    className: "bottom-[16%] left-[8%] sm:bottom-[15.5%] sm:left-[24.3%]",
    size: "w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16",
    parallaxDepth: -0.04,
    delay: 0.4,
  },
  {
    name: "Git",
    src: "/tech/git.svg",
    className: "bottom-[12%] right-[8%] sm:bottom-[10%] sm:right-[19%]",
    size: "w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16",
    parallaxDepth: 0.06,
    delay: 0.6,
  },
];

export const Hero = () => {
  const mousePosition = useMousePosition();

 
  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 960;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 540;

  const mouseX = mousePosition.x - centerX;
  const mouseY = mousePosition.y - centerY;

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20 pb-22">


      {/* Floating Icons */}
      {icons.map((icon) => (
        <motion.div
          key={icon.name}
          className={`absolute z-20 ${icon.className}`}
          animate={{
            x: mouseX * icon.parallaxDepth,
            y: mouseY * icon.parallaxDepth,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -15, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay,
              },
              opacity: { duration: 1, delay: icon.delay },
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <img
              src={icon.src}
              alt={icon.name}
              className={`${icon.size} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-110`}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* ===== Mobile layout: clean centered stack (below sm) ===== */}
      <div className="flex w-full flex-col items-center px-4 text-center sm:hidden">
        <motion.img
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          src="/syntax.svg"
          alt="Syntax"
          className="w-[85%] max-w-sm h-auto object-contain"
          draggable={false}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-xs text-sm font-medium leading-relaxed text-white/60"
        >
          build . break . become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">beyond syntax</span>
        </motion.p>
      </div>

      {/* ===== Desktop layout: bottom-pinned wordmark (sm and up) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 z-20 hidden w-full pointer-events-none sm:block"
      >
        <img
          src="/syntax.svg"
          alt="Syntax"
          className="mx-auto w-full max-w-[1500px] h-auto pt-40 mt-40 object-contain object-top"
          draggable={false}
        />
      </motion.div>

      <div className="relative z-30 hidden flex-col items-center text-center mb-80 px-4 max-w-4xl w-full sm:flex" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden text-white/50 text-xl md:text-2xl mb-[-260px] px-4 text-center font-medium max-w-2xl sm:block"
      >
        build . break . become <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">beyond syntax</span>
      </motion.p>
    </section>
  );
};

