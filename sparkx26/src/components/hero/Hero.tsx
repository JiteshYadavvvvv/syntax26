import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

const icons = [
  {
    name: "JavaScript",
    src: "/js.svg",
    className: "top-[30%] left-[17%]",
    size: "w-16 h-16",
    parallaxDepth: 0.05,
    delay: 0,
  },
  {
    name: "Tailwind CSS",
    src: "/tailwindcss.svg",
    className: "top-[20%] right-[18%]",
    size: "w-20 h-20",
    parallaxDepth: -0.03,
    delay: 0.2,
  },
  {
    name: "React",
    src: "/react.svg",
    className: "bottom-[30%] left-[22%]",
    size: "w-16 h-16",
    parallaxDepth: -0.04,
    delay: 0.4,
  },
  {
    name: "Git",
    src: "git.svg",
    className: "bottom-[40%] right-[25%]",
    size: "w-16 h-16",
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
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat pt-20 pb-22">
      
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />

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

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-xl md:text-2xl text-white/60 font-semibold mb-4 tracking-widest uppercase">
            Welcome to
          </div>
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              OSS
            </span>{" "}
            <span className="text-white drop-shadow-md">Sparkx.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/50 text-xl md:text-2xl mb-8 font-medium max-w-2xl"
        >
          IGNITE THE SPARK OF DEVELOPMENT
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
      >
        <img
          src="/Spark-main.svg"
          alt="Spark"
          className="mx-auto w-[1500px] h-[450px] pt-40 mb-[-70px] object-contain object-bottom"
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

