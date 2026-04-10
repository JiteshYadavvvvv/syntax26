import { motion } from 'framer-motion';
import ElectricBorder from './ElectricBorder';

const GREY = '#6B7280';

const events = [
  {
    id: 1,
    title: 'Replica',
    description:
      'Each participant has to replicate a given website with only HTML and CSS. Only the front end of the website is required to be replicated.',
    icon: '/logo.png',
  },
  {
    id: 2,
    title: 'Graphica',
    description:
      'A 12-hour frontend team event where creativity thrives as developers tackle their unique problem statements, pushing the boundaries of innovation.',
    icon: '/logo.png',
  },
  {
    id: 3,
    title: 'FSOC',
    description:
      "Freshers' Season of Code is a 5-day open-source contribution challenge where freshers dive into real projects — build, learn, and create something you're proud of!",
    icon: '/logo.png',
  },
];

export const Events = () => {
  return (
    <section
      id="events"
      className="relative w-full max-w-6xl mx-auto px-6 py-24 text-white"
    >
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
          Our{' '}
          <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
            Events
          </span>
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
          Get ready to showcase your web development skills! Our exciting competition is just around the corner.
        </p>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="h-full"
          >
            <ElectricBorder
              color={GREY}
              speed={0.8}
              chaos={0.1}
              borderRadius={20}
              className="h-full"
            >
              <div className="flex flex-col h-full bg-black/20 backdrop-blur-sm rounded-[20px] p-6">

                {/* Logo + Title */}
                <div className="mb-4">
                  <img
                    src={event.icon}
                    alt={event.title}
                    className="w-10 h-10 mb-3 object-contain"
                  />
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">
                    {event.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 mb-4 rounded-full bg-white/20" />

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-8">
                  {event.description}
                </p>

                {/* Buttons — grey theme */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href="#"
                    className="flex-1 text-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    Register
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white/60 border border-white/10 bg-transparent hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    Rulebook
                  </a>
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
