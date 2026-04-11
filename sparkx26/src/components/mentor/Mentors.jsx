import ChromaGrid from './ChromaGrid';

const mentors = [
  {
    image: "/mentors/pradeep.jpeg",
    title: "Pradeep Kumar",
    subtitle: "Full Stack Developer",
    handle: "@pradeepkumar0805",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://www.instagram.com/pradeepkumar0805/"
  },
  
  {
    image: "/mentors/anmol.jpeg",
    title: "Anmol Singh Rathore",
    subtitle: "",
    handle: "@anmol_s_rathore",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://www.instagram.com/anmol_s_rathore/"
  },
  
  {
    image: "/mentors/yashika.jpeg",
    title: "Yashika Yadav",
    subtitle: "Blockchain Specialist",
    handle: "@yshka.ydv",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "https://www.instagram.com/yshka.ydv/"
  },
  {
    image: "/mentors/sid.jpeg",
    title: "Sidarth Pathania",
    subtitle: "UI/UX Designer",
    handle: "@siddhart.h_",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "https://www.instagram.com/siddhart.h_/"
  },
  {
    image: "/mentors/sashwant.jpeg",
    title: "Shashwant Trivedi",
    subtitle: "Full Stack Developer",
    handle: "@shashwatrivedi",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "https://www.instagram.com/shashwatrivedi/"
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "MD Dilshad",
    subtitle: "DSA/Management",
    handle: "@dilsh.ad2470",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://www.instagram.com/dilsh.ad2470/"
  },
  {
    image: "/mentors/amresh.jpeg",
    title: "Amresh Singh",
    subtitle: "ML/Sponsorship",
    handle: "@entangled.bunny",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://www.instagram.com/entangled.bunny/"
  },
  {
    image: "/mentors/atul.jpeg",
    title: "Atul Hooda",
    subtitle: "UI/UX Designer",
    handle: "@justatoool",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://www.instagram.com/justatoool/"
  }
  
];

export const Mentors = () => {
  return (
    <section
      id="mentors"
      className="relative w-full max-w-[1400px] mx-auto px-6 pt-24 pb-8 text-white"
    >
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-white">
          Meet the <span className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Mentors</span>
        </h2>
      </div>

      <div style={{ minHeight: '900px', position: 'relative' }}>
        <ChromaGrid
          items={mentors}
          radius={320}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
};
