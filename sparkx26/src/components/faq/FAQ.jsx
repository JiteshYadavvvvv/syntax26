import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do I need prior programming knowledge to attend SPARK?",
    a: "SPARK is open to all FEs, regardless of branch or experience level. It covers basics to advanced topics and runs from July 18 to August 26, with 2-hour sessions every weekend. Whether you're a beginner or have some coding experience, you’re welcome to join!"
  },
  {
    q: "Will I be able to create high-quality websites after completing Spark classes?",
    a: "After completing Spark, you'll be ready to create high-quality websites. The classes cover essential web development skills like HTML, CSS, JavaScript, and possibly some backend technologies. With hands-on projects and exercises, you'll gain a solid foundation to build and design effective, functional websites."
  },
  {
    q: "Will there be any assignments or projects?",
    a: "Yes, participants will be given small practice assignments regularly. There will also be a two competitions - REPLICA and FSoC (Freshers Season of Code), during the run of SPARK. Here participants can apply everything they’ve learned to build fully functional websites and learn how to contribute to open source."
  },
  {
    q: "What resources will I need?",
    a: "You will need a laptop with an internet connection. We also recommend installing the code editor - Visual Studio Code, but detailed instructions on setting up your development environment will be provided in the first session. Don't forget to bring your own USB cables and chargers. All reference materials and notes will be shared on the community and website."
  },
  {
    q: "What if I'm already familiar with web development?",
    a: "Absolutely! While the bootcamp starts with the basics, it quickly progresses to more advanced topics. Experienced participants can also assist others and potentially take on more challenging projects. The competitions organised are exciting opportunities to win prizes and goodies."
  },
  {
    q: "Who do I contact if I have more questions?",
    a: "For any additional questions, feel free to contact the OSS Club via email at ossclub@aitpune.edu.in"
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => onToggle(index)}
        className="w-full grid grid-cols-[56px_1fr_32px] items-center gap-2 py-6  text-left group cursor-pointer"
      >
        <span className="text-sm font-mono text-white/25 group-hover:text-white/40 transition-colors duration-200">
          {num}
        </span>

        <span className={`text-base md:text-lg font-light leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
          {faq.q}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex justify-end text-white/30 group-hover:text-white/50 transition-colors duration-200"
        >
          <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pl-[72px] pr-10 pb-6 text-sm text-white/40 leading-relaxed font-light">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative w-full max-w-5xl mx-auto px-6 pt-8 pb-24 text-white"
    >
      <div className="mb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
          Inquiries
        </p>
        <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
          FAQs
        </h2>
      </div>

      <div className="border-t border-white/10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            isOpen={openIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};
